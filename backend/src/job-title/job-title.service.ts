import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateJobTitleDto } from './dto/create-job-title.dto';
import { UpdateJobTitleDto } from './dto/update-job-title.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JobTitle } from 'schemas/jobTitle.schema';

@Injectable()
export class JobTitleService {

  constructor(@InjectModel (JobTitle.name) private jobTitleModel: Model<JobTitle>) {}
  create(createJobTitleDto: CreateJobTitleDto) {
    
    try{

      return this.jobTitleModel.create(createJobTitleDto);
    }catch(err)
    {
      throw new HttpException("Error while creating jobTitle" , HttpStatus.FORBIDDEN);
    }
  }

  findAll(limit: number, page: number, search:string, fields: string[],sortType:string): Promise<JobTitle[]> {  
    const projection: any = {};
    if (fields && fields.length > 0) {
        fields.forEach(field => {
            projection[field] = 1; // Include the field
        });
    }

    const sort:any = {}
    if(sortType == "job_title_asc")
    {
      sort["jobTitle"] = 1; 
    }else if(sortType == "code_asc")
    {
      sort["_id"] = 1; 
    }else
    {
      sort["createdAt"] = -1; 
    }

    return this.jobTitleModel.find({
      $or: [
        { jobTitle: { $regex: new RegExp(search, "i") } },
        { _id: { $regex: new RegExp(search, "i") } } // Exact match for the _id field
    ]  
    })
    .select(projection) // Applying the projection
    .limit(limit)
    .skip(page * limit)
    .sort(sort);
  }


  findOne(id: string) {
    return this.jobTitleModel.findById(id);
  }

  update(id: string, updateJobTitleDto: UpdateJobTitleDto) {
    try{

      return this.jobTitleModel.findByIdAndUpdate(id, updateJobTitleDto);
    }catch(err)
    {
      throw new HttpException("Error while updating jobTitle" , HttpStatus.FORBIDDEN);
    }
  }

  remove(id: string) {
    try{

      return this.jobTitleModel.deleteOne({ _id: id });
    }catch(err)
    {
      throw new HttpException("Error while deleting jobTitle" , HttpStatus.FORBIDDEN);
    }
  }
}
