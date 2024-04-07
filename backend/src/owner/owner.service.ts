import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Owner } from 'schemas/owner.schema';
import { Model } from 'mongoose';
import { Company } from 'schemas/company.schema';

@Injectable()
export class OwnerService {
  constructor(@InjectModel('Owner') private ownerModel: Model<Owner>, @InjectModel('Company') private companyModel: Model<Company>) {}
  async create(createOwnerDto: CreateOwnerDto,file: Express.Multer.File) {
    try{
      createOwnerDto.avatar = file ? file.path : undefined;
      
      return await this.ownerModel.create(createOwnerDto);
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

  findAll(limit: number, page: number, search:string,fields: string[],sortType:string,nationality:string = '',state:string = '',dobFrom:string = '',dobTo:string = ''): Promise<Owner[]> {
    const projection: any = {};
    if (fields && fields.length > 0) {
        fields.forEach(field => {
            projection[field] = 1; // Include the field
        });
    }
    const sort:any = {}
    if(sortType == "name_asc")
    {
      sort["name"] = 1; 
    }else if(sortType == "code_asc")
    {
      sort["personCode"] = 1; 
    }else
    {
      sort["createdAt"] = -1; 
    } 
    const query = {$or:[{name: { $regex: new RegExp(search, "i") }},{personCode: { $regex: new RegExp(search, "i") }}]}
    dobFrom != '' ? query["dob"] = { $gte: new Date(dobFrom), $lte: new Date(dobTo) } : null; 
    nationality != '' ? query["nationality"] = nationality : null;
    state != '' ? query["state"] = state : null;
   

    return this.ownerModel.find(query).select(projection).limit(limit).skip(page*limit).sort(sort);
  }

  async findOne(id: string) {
    const [owner, companies] = await Promise.all([
      this.ownerModel.findById(id),
      this.companyModel.find({ownerId: id}).populate([{ path: 'ownerId', model: 'Owner' },{ path: 'proCode', model: 'Owner' }, { path: 'immgCardNo', model: 'IMMGCard' }]).exec()
    ])
    return {owner,companies}
  }

  async update(id: string, updateOwnerDto: UpdateOwnerDto,file: Express.Multer.File) {
    try{
      updateOwnerDto.avatar = file ? file.path : undefined;
      return await this.ownerModel.findByIdAndUpdate(id, updateOwnerDto);

    }catch(err)
    {
      throw new HttpException("Error while updating owner" , HttpStatus.FORBIDDEN);
    }
  }

  remove(id: string) {
    try{  
       
      return Promise.all([this.ownerModel.updateOne({ _id: id },{deleted : true}),
      this.companyModel.updateMany({ownerId: id},{$pull : {ownerId: id}})
      ]);

    }catch(err)
    {
      throw new HttpException("Error while deleting owner" , HttpStatus.FORBIDDEN);
    }
  }

  importOwners(createOwnerDto: CreateOwnerDto[]) {
    try{
      return this.ownerModel.insertMany(createOwnerDto);
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
    const count = await this.ownerModel.estimatedDocumentCount();
    return {
      count}
  }
}
