import { HttpException, HttpStatus, Injectable, Res } from '@nestjs/common';
import { CreateTasheelDto } from './dto/create-tasheel.dto';
import { UpdateTasheelDto } from './dto/update-tasheel.dto';
import { Model } from 'mongoose';
import { Tasaheel } from 'schemas/tasaheel.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from 'schemas/employee.schema';
import { Owner } from 'schemas/owner.schema';
import { Company } from 'schemas/company.schema';
import * as exceljs from 'exceljs';
import { Response } from 'express';

@Injectable()
export class TasheelsService {

  constructor(
    @InjectModel('Tasaheel') private tasheelModel: Model<Tasaheel>,
    @InjectModel('Employee') private employeeModel: Model<Employee>,
    @InjectModel('Owner') private ownerModel: Model<Owner>,
    @InjectModel('Company') private companyModel: Model<Company>,

  ) {}
  create(createTasheelDto: CreateTasheelDto) {
    return this.tasheelModel.create(createTasheelDto);

  }

  findAll(limit: number, page: number, search: string, type: string,sort: string,fields: string[]) {
    try {
      const projection: any = {};
      if (fields && fields.length > 0) {
        fields.forEach((field) => {
          projection[field] = 1; // Include the field
        });
      }
      const sort: any = {};
      sort['createdAt'] = -1;
      if (sort == 'name_asc') {
        sort['name'] = 1;
      }
      
      const query: any = {
        $and: [{$or: [
          { username: { $regex: new RegExp(search, 'i') } },
          { personCode: { $regex: new RegExp(search, 'i') } },
          { phone: { $regex: new RegExp(search, 'i') } },
          { uid: { $regex: new RegExp(search, 'i') } },
          { emiratesId: { $regex: new RegExp(search, 'i') } },
        ]}
      ],
        
      };

      if(type == 'owner'){
        query['$and'].push({ $or : [{type: 'owner'},{type: 'owner&pro'}]});
      }else if (type == 'pro') {
        query['$and'].push({ $or : [{type: 'pro'},{type: 'owner&pro'}]});
      }else
      {
        type != '' ? (query['type'] = type) : undefined;
      }

      // console.log(query.$and);
      query.$and.push({deleted: false});

      return this.tasheelModel
        .find(query)
        .select(projection)
        .limit(limit)
        .skip(page * limit)
        .sort(sort);
    } catch (err) {
      throw new HttpException(
        'Error while getting tasaheel',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findOne(id: string) {
    const data = await this.tasheelModel.findOne({personCode: id}).populate([{ path: 'employee', model: 'Employee'},{path: 'owner', model: 'Owner'}]);
    if(data){
      return data;
    }else{
      const [emp,owner,company] = await Promise.all([
        this.employeeModel.findOne({personCode: id}),
        this.ownerModel.findOne({personCode: id}),
        this.companyModel.findOne({molCode: id}).populate([{ path: 'employees', model: 'Employee'},{path: 'ownerId', model: 'Owner'},{ path: 'proCode', model: 'Owner' },]),
      ])

      return (emp || owner || company || {});
    }
  }

  update(id: string, updateTasheelDto: UpdateTasheelDto) {
    return this.tasheelModel.findByIdAndUpdate(id, updateTasheelDto);

  }

  async remove(id: string) {
    await this.tasheelModel.updateOne({ _id: id }, { deleted: true });

    return { _id: id };
  }

  async getCounters() {
    const [count, deleted] = await Promise.all([
      this.tasheelModel.countDocuments({ deleted: false}),
      this.tasheelModel.countDocuments({ deleted: true}),
      
    ]);
    return {
      count,
      deleted,
    };
  }

  async export(@Res() res: Response, fileName: string) {
    const eChannels = await this.tasheelModel.find({ deleted: false});

    const workbook = new exceljs.Workbook();
    const worksheet = workbook.addWorksheet('EChannels');
    worksheet.columns = [
      { header: 'ID', key: '_id', width: 20 },
      { header: 'Type', key: 'type', width: 20 },
      { header: 'email', key: 'email', width: 20 },
      { header: 'mobile', key: 'mobile', width: 20 },
      { header: 'Username', key: 'username', width: 20 },
      { header: 'Password', key: 'password', width: 20 },
      { header: 'Employee', key: 'employee', width: 20 },
      { header: 'Owner', key: 'owner', width: 20 },
      { header: 'Deleted', key: 'deleted', width: 10 },
    ];

    eChannels.forEach(eChannel => {
      worksheet.addRow({
        _id: eChannel._id.toString(),
        type: eChannel.type,
        gender: eChannel.email,
        status: eChannel.mobile,
        username: eChannel.username,
        password: eChannel.password,
        employee: eChannel.employee ? eChannel.employee.toString() : '',
        owner: eChannel.owner ? eChannel.owner.toString() : '',
        deleted: eChannel.deleted,
      });
    });

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename=${fileName}.xlsx`);
    await workbook.xlsx.write(res);

    res.end();
  }
}
