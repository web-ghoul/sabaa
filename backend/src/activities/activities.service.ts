import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { ActivityLog } from 'schemas/activityLog.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ActivitiesService {
  constructor(@InjectModel(ActivityLog.name) private ActivityModel: Model<ActivityLog>) {}
  create(createActivityDto: CreateActivityDto) {
    return 'This action adds a new activity';
  }

  findAll(limit: number, page: number, search: string) {
    return this.ActivityModel
      .find({
        $or: [
          { action: { $regex: new RegExp(search, 'i') } },
        ],
      })
      .limit(limit)
      .skip(page * limit)
      .sort({createdAt: -1});
  }

  findOne(id: number) {
    return `This action returns a #${id} activity`;
  }

  update(id: number, updateActivityDto: UpdateActivityDto) {
    return `This action updates a #${id} activity`;
  }

  remove(id: number) {
    return `This action removes a #${id} activity`;
  }
}
