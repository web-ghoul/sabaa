import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from 'schemas/employee.schema';
import { Company } from 'schemas/company.schema';
import { ActivityLog } from 'schemas/activityLog.schema';

@Injectable()
export class EmployeesService {
  constructor(@InjectModel('Employee') private employeeModel: Model<Employee>, @InjectModel('Company') private companyModel: Model<Company>,
  @InjectModel(ActivityLog.name) private activityModel: Model<ActivityLog>) {}
  async create(createEmployeeDto: CreateEmployeeDto, file: Express.Multer.File, user: ObjectId) {
    try{
      
      if (Array.isArray(createEmployeeDto)) {
        createEmployeeDto.map((employee) => {
          employee.user = user;
          // employee.avatar = file ? file.path : undefined;
        });
      } else {
        createEmployeeDto.user = user;
        createEmployeeDto.avatar = file ? file.path : undefined;
      }

      // createEmployeeDto.avatar = file ? file.path : undefined;
      // console.log(createEmployeeDto);
      
      return await Promise.all([
        this.employeeModel.create(createEmployeeDto),
        this.companyModel.findByIdAndUpdate(createEmployeeDto.companyId, {$push: {employees: createEmployeeDto._id}})
      ]) 

      //inject in company if exits
    }catch(err)
    {
      throw new HttpException(err, 400);
    }

  }

  findAll(limit: number, page: number, search:string,fields: string[],sortType:string,nationality:string = '',cardType:string = '',status:string = '',gender:string = '', deleted: boolean = false) {
    try{
      const projection: any = {};
      if (fields && fields.length > 0) {
          fields.forEach(field => {
              projection[field] = 1; // Include the field
          });
      }
      const sort:any = {}
      sort["createdAt"] = -1; 
      if(sortType == "lc_expire_date")
      {
        sort["lcExpireDate"] = 1; 
      }else if(sortType == "residence_expire_date")
      {
        sort["residenceExpireDate"] = 1; 
      }
      // else
      // {
      //   sort["createdAt"] = -1; 
      // } 

      
      const query = {$or:[{name: { $regex: new RegExp(search, "i") }},{ companyName: { $in: [new RegExp(search, 'i')] } },
      {workPermitNumber: { $regex: new RegExp(search, "i") }}
      ]}
      
      nationality != '' ? query["nationality"] = nationality : undefined;
      cardType != '' ? query["cardType"] = cardType : undefined;
      status != '' ? query["status"] = status : null;
      deleted != false ? query["deleted"] = deleted :  query["deleted"] = false;
      gender != '' ? query["gender"] = gender : undefined;

      // console.log(query);
      
      return this.employeeModel.find(query).select(projection).limit(limit).skip(page*limit).sort(sort);
    }catch(err)
    {
      throw new HttpException("Error while getting employees" , HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string) {
    const [employee, companies, activities] = await Promise.all([
      this.employeeModel.findById(id),
      this.companyModel.find({employees: { $in: {id}}}),
      this.activityModel.find({id: id, route: "employee"}).exec()
    ])
    return {employee,companies,activities}
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto, file: Express.Multer.File) {

    try{
      updateEmployeeDto.avatar = file ? file.path : undefined;
      return await this.employeeModel.findByIdAndUpdate(id, updateEmployeeDto);

    }catch(err)
    {
      throw new HttpException(err , HttpStatus.BAD_REQUEST);
    }
   
  }

  async getCounters(isCustomer:boolean = false) {
    const [count,deleted] = await Promise.all([
      this.employeeModel.countDocuments({deleted : false , isCustomer : isCustomer}),
      this.employeeModel.countDocuments({deleted : true , isCustomer : isCustomer})
    ]) ;
    return {
      count,
      deleted
    };
  }

  async remove(id: string) {
    try{  
       
      await Promise.all([this.employeeModel.updateOne({ _id: id },{deleted : true}),
      this.companyModel.updateMany({ownerId: id},{$pull : {employees: id}})
      ]);
      return {_id : id}
    }catch(err)
    {
      throw new HttpException(err , HttpStatus.BAD_REQUEST);
    }
  }
}
