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

@Catch()
export class CustomErrorFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const status = exception instanceof HttpException ? exception.getStatus() : 500;
        const message = exception.message || 'Internal server error';

        let customError = new CustomError(message, status);

        console.log(Object.keys(exception));
        
        
        
        if (process.env.NODE_ENV == "development") {
            devErrors(response, customError);
        }else{
          if (exception?.response?.name === 'CastError') customError = castErrorHandler(exception?.response);
          if (exception?.response?.code === 11000) customError = duplicateKeyErrorHandler(exception?.response);
          if (exception?.response?.name === 'BadRequestException') customError = validationErrorHandler(exception?.response);
  
          if (exception?.name === 'CastError') customError = castErrorHandler(exception);
          if (exception?.code === 11000) customError = duplicateKeyErrorHandler(exception);
          if (exception?.name === 'BadRequestException') customError = validationErrorHandler(exception);
  
          prodErrors(response, customError);
        }
    }
}
