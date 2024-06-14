import { HttpException, HttpStatus, Injectable, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as exceljs from 'exceljs';
import { Response } from 'express';
import { Model } from 'mongoose';
import { EChannel } from 'schemas/eChannel.schema';
import { Employee } from 'schemas/employee.schema';
import { Owner } from 'schemas/owner.schema';
import { CreateEChannelDto } from './dto/create-e-channel.dto';
import { UpdateEChannelDto } from './dto/update-e-channel.dto';

@Injectable()
export class EChannelService {
  constructor(
    @InjectModel('EChannel') private eChannelModel: Model<EChannel>,
    @InjectModel('Employee') private employeeModel: Model<Employee>,
    @InjectModel('Owner') private ownerModel: Model<Owner>,
  ) {}
  create(createEChannelDto: CreateEChannelDto) {
    return this.eChannelModel.create(createEChannelDto);
  }

  findAll(
    limit: number,
    page: number,
    search: string,
    type: string,
    status: string,
    gender: string,
    sort: string,
    fields: string[],
  ) {
    try {
      const projection: any = {};
      if (fields && fields.length > 0) {
        fields.forEach((field) => {
          projection[field] = 1; // Include the field
        });
      }
      const sort: any = {};
      sort['createdAt'] = -1;
      sort['status'] = 1;

      if (sort == 'name_asc') {
        sort['name'] = 1;
      }

      const query: any = {
        $and: [
          {
            $or: [
              { username: { $regex: new RegExp(search, 'i') } },
              { personCode: { $regex: new RegExp(search, 'i') } },
              { phone: { $regex: new RegExp(search, 'i') } },
              { uid: { $regex: new RegExp(search, 'i') } },
              { emiratesId: { $regex: new RegExp(search, 'i') } },
            ],
          },
        ],
      };

      status != '' ? (query['status'] = status) : undefined;
      gender != '' ? (query['gender'] = gender) : undefined;

      if (type == 'owner') {
        query['$and'].push({ $or: [{ type: 'owner' }, { type: 'owner&pro' }] });
      } else if (type == 'pro') {
        query['$and'].push({ $or: [{ type: 'pro' }, { type: 'owner&pro' }] });
      } else {
        type != '' ? (query['type'] = type) : undefined;
      }

      // console.log(query.$and);
      query.$and.push({ deleted: false });

      return this.eChannelModel
        .find(query)
        .select(projection)
        .limit(limit)
        .skip(page * limit)
        .sort(sort)
        .populate([
          { path: 'employee', model: 'Employee' },
          { path: 'owner', model: 'Owner' },
        ]);
    } catch (err) {
      throw new HttpException(
        'Error while getting eChannel data',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findOne(id: string) {
    const echannel = await this.eChannelModel
      .findOne({ $or: [{ uid: id }, { emiratesId: id }] ,  deleted: false })
      .populate([
        { path: 'employee', model: 'Employee' },
        { path: 'owner', model: 'Owner' },
      ]);
    if (echannel) {
      return echannel;
    } else {
      const [emp, owner] = await Promise.all([
        this.employeeModel.findOne({ $or: [{ uid: id }, { emiratesId: id }] }),
        this.ownerModel.findOne({ $or: [{ uid: id }, { emiratesId: id }] }),
      ]);

      return emp || owner || {};
    }
  }

  update(id: string, updateEChannelDto: UpdateEChannelDto) {
    return this.eChannelModel.findByIdAndUpdate(id, updateEChannelDto);
  }

  async remove(id: string) {
    await this.eChannelModel.updateOne({ _id: id }, { deleted: true });

    return { _id: id };
  }

  async getCounters() {
    const [count, deleted] = await Promise.all([
      this.eChannelModel.countDocuments({ deleted: false }),
      this.eChannelModel.countDocuments({ deleted: true }),
    ]);
    return {
      count,
      deleted,
    };
  }

  async export(@Res() res: Response, fileName: string) {
    const eChannels = await this.eChannelModel.find({ deleted: false });

    const workbook = new exceljs.Workbook();
    const worksheet = workbook.addWorksheet('EChannels');
    worksheet.columns = [
      { header: 'ID', key: '_id', width: 20 },
      { header: 'Type', key: 'type', width: 20 },
      { header: 'Gender', key: 'gender', width: 20 },
      { header: 'Status', key: 'status', width: 20 },
      { header: 'Username', key: 'username', width: 20 },
      { header: 'Password', key: 'password', width: 20 },
      { header: 'Employee', key: 'employee', width: 20 },
      { header: 'Owner', key: 'owner', width: 20 },
      { header: 'Deleted', key: 'deleted', width: 10 },
    ];

    eChannels.forEach((eChannel) => {
      worksheet.addRow({
        _id: eChannel._id.toString(),
        type: eChannel.type,
        gender: eChannel.gender,
        status: eChannel.status,
        username: eChannel.username,
        password: eChannel.password,
        employee: eChannel.employee ? eChannel.employee.toString() : '',
        owner: eChannel.owner ? eChannel.owner.toString() : '',
        deleted: eChannel.deleted,
      });
    });

    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.setHeader(
      'Content-Disposition',
      `attachment; filename=${fileName}.xlsx`,
    );
    await workbook.xlsx.write(res);

    res.end();
  }
}
