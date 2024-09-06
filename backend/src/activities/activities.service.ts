import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { ActivityLog } from 'schemas/activityLog.schema';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ActivitiesService {
  constructor(@InjectModel(ActivityLog.name) private ActivityModel: Model<ActivityLog>) {}
  create(createActivityDto: CreateActivityDto) {
    return 'This action adds a new activity';
  }

  findAll(limit: number, page: number, search: string = '', operation: string = '', from: string = '', to: string= '', route: string= '', userId: string = '', id: string = '') {

    const query = {}  

    if (search != '') {
      query['name'] = { $regex: search, $options: 'i' };
    }
    if (from != '' && to == '') {
      to = '9999-12-31';
    }

    from != ''
        ? (query['createdAt'] = { $gte: new Date(from), $lte: new Date(to) })
        : null;
    operation  != '' ? (query['action'] = operation ) : undefined;
    route != '' ? (query['route'] = route) : undefined;
    userId != '' ? (query['userId'] = userId) : undefined;
    id != '' ? (query['id'] = new mongoose.Types.ObjectId(id)) : undefined;
    console.log(query);
    
    // console.log(query);
    // console.log(operation);
    
    return this.ActivityModel
      .find(query)
      .limit(limit)
      .skip(page * limit)
      .sort({createdAt: -1}).populate({path: 'userId', model: 'User', select: 'avatar phone'});
  }

  async getCounters() {
    const [count] = await Promise.all([
      this.ActivityModel.countDocuments()
    ]) ;
    return {
      count
    };
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
