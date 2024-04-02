import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from 'schemas/company.schema';
import { Model } from 'mongoose';

@Injectable()
export class CompanyService {
  constructor(@InjectModel(Company.name) private companyModel: Model<Company>) {}

  create(createCompanyDto: CreateCompanyDto,file: Express.Multer.File) {
    
    try{
      if(Array.isArray(createCompanyDto))
      {
        createCompanyDto.map((x) => {x._id = x.licenseNo + x.state ;
          x.logo = file ? file.path : undefined});
      }else
      {
        createCompanyDto._id = createCompanyDto.licenseNo + createCompanyDto.state;
      createCompanyDto.logo = file ? file.path : undefined;
      }
      
      return this.companyModel.create(createCompanyDto);
    }catch(err)
    {
      throw new HttpException("Error while creating company" , HttpStatus.FORBIDDEN);
    }
  }

  findAll(limit: number, page: number, search:string,fields:string[],sortType:string,id:string,filterQuery:any): Promise<Company[]> {  
    const projection: any = {};
    if (fields && fields.length > 0) {
        fields.forEach(field => {
            projection[field] = 1; // Include the field
        });
    }
    if(id)
    {
      return this.companyModel.find({
        $nor: [
            { ownerId: id },
            { proCode: id }
        ]
    }).select(projection).limit(limit).skip(page * limit);
    }
    const sort:any = {}
    if(sortType == "name_asc")
    {
      sort["name"] = 1; 
    }else if(sortType == "code_asc")
    {
      sort["molCode"] = 1; 
    }else
    {
      sort["createdAt"] = -1; 
    }
    
    const query = {$or: [
      { name: { $regex: new RegExp(search, "i") } },
      { molCode: { $regex: new RegExp(search, "i") } },
      { immgCardNo: { $regex: new RegExp(search, "i") } },
      { licenseNo: { $regex: new RegExp(search, "i") } }
    ]}

    filterQuery?.state != '' ? query["state"] = filterQuery?.state : undefined;
    filterQuery?.status != '' ? query["status"] = filterQuery?.status : undefined;
    filterQuery?.establishmentType != '' ? query["establishmentType"] = filterQuery?.establishmentType : undefined;
    filterQuery?.molCategory != '' ? query["molCategory"] = filterQuery?.molCategory : undefined;

    
    return this.companyModel.find(query).select(projection).limit(limit).skip(page * limit).sort(sort);
  }

  findOne(id: string) {
    return this.companyModel.findById(id).populate([{ path: 'ownerId', model: 'Owner' },{ path: 'proCode', model: 'Owner' }, { path: 'immgCardNo', model: 'IMMGCard' }]).exec();
  }


  update(id: string, updateCompanyDto: UpdateCompanyDto,file: Express.Multer.File) {
    try{
      updateCompanyDto._id = updateCompanyDto.licenseNo + updateCompanyDto.state;
      updateCompanyDto.logo = file ? file.path : undefined;
      return this.companyModel.findByIdAndUpdate(id, updateCompanyDto);
    }catch(err)
    {
      throw new HttpException("Error while updating company" , HttpStatus.FORBIDDEN);
    }
  }

  remove(id: string) {
    try{
      return this.companyModel.deleteOne({ _id: id });

    }catch(err)
    {
      throw new HttpException("Error while deleting company" , HttpStatus.FORBIDDEN);
    }
  }
  async ManageCompanyOwnersAndPro(companyId: string, Id: string, operation: string, typeOfPerson: string) {
    try{
      
      let query:any = {}
      const fields:any = {}
      if(typeOfPerson == "owner"){
        fields.ownerId = Id;
      }else{
        fields.proCode = Id;
      }
      if(operation == "adding")
      {
        query = {$push: fields}
      }else
      {
        query = {$pull: fields}
      }
      
      
      await this.companyModel.findByIdAndUpdate(companyId, query);
      
      return {message : "success"}
    }catch(err)
    {
      throw new HttpException(`Error while ${operation} ${typeOfPerson} to company` , HttpStatus.FORBIDDEN);
    }
  }

  async getCounters() {
    const count = await this.companyModel.estimatedDocumentCount();
    return {
      count}
  }



  
}
