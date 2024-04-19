import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateNationalityDto } from './dto/create-nationality.dto';
import { UpdateNationalityDto } from './dto/update-nationality.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Nationality } from 'schemas/nationality.schema';

@Injectable()
export class NationalityService {
  constructor(@InjectModel(Nationality.name) private nationalityModel: Model<Nationality>) {}

  async create(createNationalityDto: CreateNationalityDto): Promise<Nationality> {
    try{
      

      return await this.nationalityModel.create(createNationalityDto);
    }catch(err)
    {
      console.log(err)

      throw new HttpException("Error while creating nationality" , HttpStatus.FORBIDDEN);
    }
  }

  findAll(limit: number, page: number, search:string,fields:string[],sortType:string, deleted:boolean = false): Promise<Nationality[]> {  
    const projection: any = {};
    if (fields && fields.length > 0) {
        fields.forEach(field => {
            projection[field] = 1; // Include the field
        });
    }

    const sort:any = {}
    if(sortType == "nationality_asc")
    {
      sort["nationality"] = 1; 
    }else if(sortType == "code_asc")
    {
      sort["id"] = 1; 
    }else
    {
      sort["createdAt"] = -1; 
    }
   
    
    return this.nationalityModel.find({
  $or: [
    { nationality: { $regex: new RegExp(search, "i") } },
    { id: { $regex: new RegExp(search, "i") } }
  ],
  deleted : deleted
}).select(projection).limit(limit).skip(page * limit).sort(sort);

  }

  findOne(id: string) {
    return this.nationalityModel.findById(id);
  }

  async update(id: string, updateNationalityDto: UpdateNationalityDto) {
    try{
      return await this.nationalityModel.findByIdAndUpdate(id, updateNationalityDto);
    }catch(err)
    {
      throw new HttpException("Error while updating nationality" , HttpStatus.FORBIDDEN);
    }
  }

  remove(id: string) {
    try{
      return this.nationalityModel.updateOne({ _id: id },{deleted : true});

    }catch(err)
    {
      throw new HttpException("Error while deleting nationality" , HttpStatus.FORBIDDEN);
    }
  }

  importNationalities(createNationalityDto: CreateNationalityDto[]) {
    try{
      
      return this.nationalityModel.insertMany(createNationalityDto);
    }catch(err)
    {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: err,
      }, HttpStatus.FORBIDDEN, {
        cause: err
      });
    }
    
  }
  async getCounters() {
    const [count,deleted] = await Promise.all([
      this.nationalityModel.countDocuments({ deleted: false }),
    this.nationalityModel.countDocuments({ deleted: true })
    ]) ;
    return {
      count,
      deleted
    };
  }
}
