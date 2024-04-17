import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateJobTitleDto } from './dto/create-job-title.dto';
import { UpdateJobTitleDto } from './dto/update-job-title.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JobTitle } from 'schemas/jobTitle.schema';

@Injectable()
export class JobTitleService {

  constructor(@InjectModel (JobTitle.name) private jobTitleModel: Model<JobTitle>) {}
  async create(createJobTitleDto: CreateJobTitleDto) {
    
    try{

      return await this.jobTitleModel.create(createJobTitleDto);
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
      sort["MOHRE"] = 1; 
    }else
    {
      sort["createdAt"] = -1; 
    }

    return this.jobTitleModel.find({
      $or: [
        { jobTitle: { $regex: new RegExp(search, "i") } },
        { MOHRE: { $regex: new RegExp(search, "i") } } // Exact match for the _id field
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

  async update(id: string, updateJobTitleDto: UpdateJobTitleDto) {
    try{

      return await this.jobTitleModel.findByIdAndUpdate(id, updateJobTitleDto);
    }catch(err)
    {
      throw new HttpException("Error while updating jobTitle" , HttpStatus.FORBIDDEN);
    }
  }

  remove(id: string) {
    try{

      return this.jobTitleModel.updateOne({ _id: id } ,{deleted : true});
    }catch(err)
    {
      throw new HttpException("Error while deleting jobTitle" , HttpStatus.FORBIDDEN);
    }
  }

  async getCounters() {
    const count = await this.jobTitleModel.estimatedDocumentCount();
    return {
      count}
  }
}
