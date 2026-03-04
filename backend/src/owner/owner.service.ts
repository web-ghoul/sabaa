import { HttpException, HttpStatus, Injectable, Res } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Owner } from '../schemas/owner.schema';
import mongoose, { Model, ObjectId } from 'mongoose';
import { Company } from '../schemas/company.schema';
import { ActivityLog } from '../schemas/activityLog.schema';
import { Response } from 'express';
import * as exceljs from 'exceljs';
import { EChannel } from '../schemas/eChannel.schema';
import { Tasaheel } from '../schemas/tasaheel.schema';
import { Natwasal } from '../schemas/natwasal.schema';
import { CloudinaryService } from '../utils/cloudinary/cloudinary.service';

@Injectable()
export class OwnerService {
  constructor(
    @InjectModel('Owner') private ownerModel: Model<Owner>,
    @InjectModel('Company') private companyModel: Model<Company>,
    @InjectModel(ActivityLog.name) private activityModel: Model<ActivityLog>,
    @InjectModel('EChannel') private eChannelModel: Model<EChannel>,
    @InjectModel('Tasaheel') private eTasaheelModel: Model<Tasaheel>,
    @InjectModel('Natwasal') private eNatwasalModel: Model<Natwasal>,
    private cloudinaryService: CloudinaryService,
  ) {}
  async create(
    createOwnerDto: CreateOwnerDto,
    file: Express.Multer.File,
    user: ObjectId,
  ) {
    try {
      if (Array.isArray(createOwnerDto)) {
        for (const owner of createOwnerDto) {
          owner.user = user;
        }
      } else {
        if (file) {
          const upload = await this.cloudinaryService.uploadFile(
            file,
            'owners',
          );
          createOwnerDto.avatar = upload.secure_url;
        }
        createOwnerDto.user = user;
      }

      return await this.ownerModel.create(createOwnerDto);

      //inject in company if exits
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  findAll(
    limit: number,
    page: number,
    search: string,
    fields: string[],
    sortType: string,
    nationality: string = '',
    state: string = '',
    dobFrom: string = '',
    dobTo: string = '',
    deleted: boolean = false,
    type: string = '',
    status: string = '',
    residenceFrom: string = '',
    residenceTo: string = '',
  ): Promise<Owner[]> {
    try {
      const projection: any = {};
      if (fields && fields.length > 0) {
        fields.forEach((field) => {
          projection[field] = 1; // Include the field
        });
      }
      const sort: any = {};
      sort['status'] = 1;
      sort['residenceExpiryDate'] = 1;
      sort['createdAt'] = -1;
      if (sortType == 'name_asc') {
        sort['name'] = 1;
      } else if (sortType == 'code_asc') {
        sort['personCode'] = 1;
      }
      // else
      // {
      //   sort["createdAt"] = -1;
      // }

      if (dobFrom != '' && dobTo == '') {
        dobTo = '9999-12-31';
      }
      if (residenceFrom != '' && residenceTo == '') {
        residenceTo = '9999-12-31';
      }

      const query: any = {
        $and: [
          {
            $or: [
              { name: { $regex: new RegExp(search, 'i') } },
              { nameAr: { $regex: new RegExp(search, 'i') } },
              { personCode: { $regex: new RegExp(search, 'i') } },
              { phone: { $regex: new RegExp(search, 'i') } },
              { uid: { $regex: new RegExp(search, 'i') } },
              { emiratesId: { $regex: new RegExp(search, 'i') } },
            ],
          },
        ],
      };
      dobFrom != ''
        ? (query['dob'] = { $gte: new Date(dobFrom), $lte: new Date(dobTo) })
        : null;
      nationality != '' ? (query['nationality'] = nationality) : undefined;
      state != '' ? (query['state'] = state) : undefined;
      deleted != false
        ? (query['deleted'] = deleted)
        : (query['deleted'] = false);

      status != '' ? (query['status'] = status) : undefined;
      residenceFrom != ''
        ? (query['residenceExpiryDate'] = {
            $gte: new Date(residenceFrom),
            $lte: new Date(residenceTo),
          })
        : undefined;

      if (type == 'owner') {
        query['$and'].push({ $or: [{ type: 'owner' }, { type: 'owner&pro' }] });
      } else if (type == 'pro') {
        query['$and'].push({ $or: [{ type: 'pro' }, { type: 'owner&pro' }] });
      } else {
        type != '' ? (query['type'] = type) : undefined;
      }

      console.log(query);

      return this.ownerModel
        .find(query)
        .select(projection)
        .limit(limit)
        .skip(page * limit)
        .sort(sort);
    } catch (err) {
      console.log(err);
      throw new HttpException(
        'Error while getting owners',
        HttpStatus.FORBIDDEN,
      );
    }
  }

  async findOne(id: string) {
    const [owner, companies, activities, eChannel, eNatwasal, eTasaheel] =
      await Promise.all([
        this.ownerModel
          .findById(id)
          .populate({ path: 'sponsors', model: 'Sponsor' }),
        this.companyModel
          .find({ $or: [{ ownerId: id }, { proCode: id }], deleted: false })
          .populate([
            { path: 'ownerId', model: 'Owner' },
            { path: 'proCode', model: 'Owner' },
          ])
          .exec(),
        this.activityModel.find({
          id: new mongoose.Types.ObjectId(id),
          route: 'owner',
        }),
        this.eChannelModel.findOne({ owner: id, deleted: false }),
        this.eNatwasalModel.findOne({ owner: id, deleted: false }),
        this.eTasaheelModel.findOne({ owner: id, deleted: false }),
      ]);
    return { owner, companies, activities, eChannel, eNatwasal, eTasaheel };
  }

  async update(
    id: string,
    updateOwnerDto: UpdateOwnerDto,
    file: Express.Multer.File,
  ) {
    try {
      // Set avatar path if the file exists
      if (file) {
        const upload = await this.cloudinaryService.uploadFile(file, 'owners');
        updateOwnerDto.avatar = upload.secure_url;
      } else {
        delete updateOwnerDto.avatar; // Avoid sending undefined
      }

      // Prepare update object with $set to force update
      const updateFields = {
        ...updateOwnerDto,
        medical: updateOwnerDto.medical || {}, // Ensure medical is set to an empty object if it's passed
      };

      console.log(updateFields);

      // Use $set to ensure fields are updated
      return await this.ownerModel.findByIdAndUpdate(
        id,
        { $set: updateFields },
        { new: true }, // Return the updated document
      );
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: string) {
    try {
      await Promise.all([
        this.ownerModel.updateOne({ _id: id }, { deleted: true }),
        this.companyModel.updateMany(
          { ownerId: id },
          { $pull: { ownerId: id } },
        ),
      ]);

      return { _id: id };
    } catch (err) {
      throw new HttpException(err, HttpStatus.FORBIDDEN);
    }
  }

  importOwners(createOwnerDto: CreateOwnerDto[]) {
    try {
      return this.ownerModel.insertMany(createOwnerDto);
    } catch (err) {
      throw new HttpException(err, HttpStatus.FORBIDDEN);
    }
  }

  async getCounters(type: string = 'owner') {
    const [count, deleted] = await Promise.all([
      this.ownerModel.countDocuments({ deleted: false, type: type }),
      this.ownerModel.countDocuments({ deleted: true, type: type }),
    ]);
    return {
      count,
      deleted,
    };
  }

  async export(@Res() res: Response, type: string = 'owner', fileName: string) {
    const owners = await this.ownerModel.find({ deleted: false, type: type });

    const workbook = new exceljs.Workbook();
    const worksheet = workbook.addWorksheet('Owners');
    worksheet.columns = [
      { header: 'UID', key: 'uid', width: 20 },
      { header: 'Name', key: 'name', width: 20 },
      { header: 'Name (Arabic)', key: 'nameAr', width: 20 },
      { header: 'Avatar', key: 'avatar', width: 20 },
      { header: 'Date of Birth', key: 'dob', width: 20 },
      { header: 'ID Nationality', key: 'idNationality', width: 20 },
      { header: 'Nationality', key: 'nationality', width: 20 },
      { header: 'Phone', key: 'phone', width: 20 },
      { header: 'Email', key: 'email', width: 20 },
      { header: 'Remarks', key: 'remarks', width: 20 },
      { header: 'State', key: 'state', width: 20 },
      { header: 'Address', key: 'address', width: 20 },
      { header: 'Sponsor', key: 'sponsor', width: 20 },
      {
        header: 'Residence Expiry Date',
        key: 'residenceExpiryDate',
        width: 20,
      },
      { header: 'File IMMG No', key: 'fileImmgNo', width: 20 },
      { header: 'Status', key: 'status', width: 20 },
      { header: 'Type', key: 'type', width: 20 },
      { header: 'Emirates ID', key: 'emiratesId', width: 20 },
      { header: 'Person Code', key: 'personCode', width: 20 },
      { header: 'User', key: 'user', width: 20 },
      { header: 'Deleted', key: 'deleted', width: 10 },
    ];

    owners.forEach((owner) => {
      worksheet.addRow({
        uid: owner.uid,
        name: owner.name,
        nameAr: owner.nameAr,
        avatar: owner.avatar,
        dob: owner.dob,
        idNationality: owner.idNationality,
        nationality: owner.nationality,
        phone: owner.phone,
        email: owner.email,
        remarks: owner.remarks,
        state: owner.state,
        address: owner.address,
        sponsor: owner.sponsor,
        residenceExpiryDate: owner.residenceExpiryDate,
        fileImmgNo: owner.fileImmgNo,
        status: owner.status,
        type: owner.type,
        emiratesId: owner.emiratesId,
        personCode: owner.personCode,
        user: owner.user,
        deleted: owner.deleted,
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
