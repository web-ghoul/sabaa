import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpStatus } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ActivityLog } from 'schemas/activityLog.schema';

@Injectable()
export class LogInterceptor implements NestInterceptor {
    constructor(private reflector: Reflector,@InjectModel('ActivityLog') private activityLogModel: Model<ActivityLog>,) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap(async response => {
        const httpContext = context.switchToHttp();
        const res = httpContext.getResponse();
        const statusCode = res.statusCode;
        // console.log(res);
        
        if (statusCode === HttpStatus.OK || statusCode === HttpStatus.CREATED) {
          const activity: any = this.reflector.get<string>(
                'logActivity',
                context.getHandler(),
              ) || '';
        // console.log(activity);
        activity.data = response
            await this.activityLogModel.create(activity)
        }
      }),
    );
  }
}
