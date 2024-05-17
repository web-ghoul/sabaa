import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import mongoose, { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from 'schemas/employee.schema';
import { Company } from 'schemas/company.schema';
import { ActivityLog } from 'schemas/activityLog.schema';
import * as exceljs from 'exceljs';
import { Response } from 'express';

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
      
      const [data,] =  await Promise.all([
        this.employeeModel.create(createEmployeeDto),
        this.companyModel.findByIdAndUpdate(createEmployeeDto.companyId, {$push: {employees: createEmployeeDto._id}})
      ]) 
      return data
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
      this.companyModel.find({employees:id}),
      this.activityModel.find({id: new mongoose.Types.ObjectId(id), route: "employee"}).exec()
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

  async getCounters() {
    const [count,deleted] = await Promise.all([
      this.employeeModel.countDocuments({deleted : false }),
      this.employeeModel.countDocuments({deleted : true })
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

  async export(res: Response,fileName: string) {
    const employees = await this.employeeModel.find({deleted : false});

      const workbook = new exceljs.Workbook();
      const worksheet = workbook.addWorksheet('Employees');
      worksheet.columns = [
        { header: 'Name', key: 'name', width: 20 },
        { header: 'Name (Arabic)', key: 'nameAr', width: 20 },
        { header: 'Avatar', key: 'avatar', width: 20 },
        { header: 'Person Code', key: 'personCode', width: 20 },
        { header: 'Company ID', key: 'companyId', width: 20 },
        { header: 'Company Name', key: 'companyName', width: 20 },
        { header: 'Date of Birth', key: 'dob', width: 20 },
        { header: 'Status', key: 'status', width: 20 },
        { header: 'Card Type', key: 'cardType', width: 20 },
        { header: 'Card Number', key: 'cardNumber', width: 20 },
        { header: 'Job', key: 'job', width: 20 },
        { header: 'Visa File Number', key: 'visaFileNumber', width: 20 },
        { header: 'Salary', key: 'salary', width: 20 },
        { header: 'Medical', key: 'medical', width: 20 },
        { header: 'ILOE', key: 'iLOE', width: 20 },
        { header: 'Gender', key: 'gender', width: 20 },
        { header: 'ID Nationality', key: 'idNationality', width: 20 },
        { header: 'Nationality', key: 'nationality', width: 20 },
        { header: 'Passport Number', key: 'passportNumber', width: 20 },
        { header: 'Passport Expiry', key: 'passportExpiry', width: 20 },
        { header: 'UID', key: 'uid', width: 20 },
        { header: 'Residence Expire Date', key: 'residenceExpireDate', width: 20 },
        { header: 'Work Permit Number', key: 'workPermitNumber', width: 20 },
        { header: 'LC Expire Date', key: 'lcExpireDate', width: 20 },
        { header: 'Mobile Number', key: 'mobileNumber', width: 20 },
        { header: 'Email', key: 'email', width: 20 },
        { header: 'Remarks', key: 'remarks', width: 20 },
        { header: 'Emirates ID', key: 'emiratesId', width: 20 },
        { header: 'User', key: 'user', width: 20 },
        { header: 'Deleted', key: 'deleted', width: 20 },
        // Add more columns as needed
      ];

      employees.forEach(employee => {
        worksheet.addRow({
          name: employee.name,
          nameAr: employee.nameAr,
          avatar: employee.avatar,
          personCode: employee.personCode,
          companyId: employee.companyId,
          companyName: employee.companyName,
          dob: employee.dob,
          status: employee.status,
          cardType: employee.cardType,
          cardNumber: employee.cardNumber,
          job: employee.job,
          visaFileNumber: employee.visaFileNumber,
          salary: employee.salary,
          medical: JSON.stringify(employee.medical), // Convert to string for Excel
          iLOE: JSON.stringify(employee.iLOE), // Convert to string for Excel
          gender: employee.gender,
          idNationality: employee.idNationality,
          nationality: employee.nationality,
          passportNumber: employee.passportNumber,
          passportExpiry: employee.passportExpiry,
          uid: employee.uid,
          residenceExpireDate: employee.residenceExpireDate,
          workPermitNumber: employee.workPermitNumber,
          lcExpireDate: employee.lcExpireDate,
          mobileNumber: employee.mobileNumber,
          email: employee.email,
          remarks: employee.remarks,
          emiratesId: employee.emiratesId,
          user: employee.user,
          deleted: employee.deleted,
          // Add more properties as needed
        });
      });

      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      res.setHeader('Content-Disposition', `attachment; filename=${fileName}.xlsx1`);
      await workbook.xlsx.write(res);

      res.end();
  }
}
