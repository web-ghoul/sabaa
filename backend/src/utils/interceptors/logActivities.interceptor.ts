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
        const request = httpContext.getRequest();
        const res = httpContext.getResponse();
        const statusCode = res.statusCode;
        // console.log(res);
        
        if (statusCode === HttpStatus.OK || statusCode === HttpStatus.CREATED) {
          const activity: any = this.reflector.get<string>(
                'logActivity',
                context.getHandler(),
              ) || '';
        // console.log(activity);
        activity.route = request.route.path.split('/')[2]
        activity.id = response._id
        activity.route == "owner" ? activity.ownerType = response.type : undefined 
        console.log(request.user);
        
        activity.userName = request.user.name
        activity.userId = request.user.id

        // console.log(activity);
            await this.activityLogModel.create(activity)
        }
      }),
    );
  }
}
