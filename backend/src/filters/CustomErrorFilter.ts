import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Response } from 'express';

import {
    devErrors,
    castErrorHandler,
    duplicateKeyErrorHandler,
    validationErrorHandler,
    prodErrors,
} from './error-handlers';
import { CustomError } from 'src/utils/CustomError';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OwnerDocument } from 'schemas/owner.schema';

@Catch()
export class CustomErrorFilter implements ExceptionFilter {

    constructor(
        @InjectModel('Owner')  readonly ownerModel: Model<OwnerDocument>,
    ) {}
    async catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception instanceof HttpException ? exception.getStatus() : 500;
        const message = exception.message || 'Internal server error';
        // console.log(exception);
        
        let customError : CustomError = new CustomError(message, status);

        // console.log(Object.keys(exception));
        
        
        
        const check = request.url.includes("owner")

        if (process.env.NODE_ENV == "development") {
            devErrors(response, customError);
        }else{
          if (exception?.response?.name === 'CastError') customError = castErrorHandler(exception?.response);
          if (exception?.response?.code === 11000) customError = await duplicateKeyErrorHandler(exception?.response, this.ownerModel,check );
          if (exception?.response?.name === 'BadRequestException') customError = validationErrorHandler(exception?.response);
        //   console.log(exception?.name);
          
        
          if (exception?.name === 'CastError') customError = castErrorHandler(exception);
          if (exception?.code === 11000) customError = await duplicateKeyErrorHandler(exception, this.ownerModel,check);
          if (exception?.name === 'BadRequestException') customError = validationErrorHandler(exception);
            // console.log(customError);
            
          prodErrors(response, customError);
        }
    }
}
