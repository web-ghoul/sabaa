import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Company } from '../schemas/company.schema';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import * as crypto from 'crypto';
import { ActivityLog } from '../schemas/activityLog.schema';
import { Response } from 'express';
import * as exceljs from 'exceljs';
import { CloudinaryService } from '../utils/cloudinary/cloudinary.service';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<Company>,
    @InjectModel(ActivityLog.name) private activityModel: Model<ActivityLog>,
    private cloudinaryService: CloudinaryService,
  ) {}

  encrypt(text: string): string {
    const key = 'findwhatyouloveAndDontLeaveittillyoudie';
    const cipher = crypto.createCipher('aes-256-cbc', key);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }
  // decrypt(encryptedText: string): string {
  //   const key = 'my-secret-key';
  //   const decipher = crypto.createDecipher('aes-256-cbc', key);
  //   let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  //   decrypted += decipher.final('utf8');
  //   return decrypted;
  // }
  async create(
    createCompanyDto: CreateCompanyDto,
    file: Express.Multer.File,
    user: ObjectId,
  ) {
    try {
      if (Array.isArray(createCompanyDto)) {
        for (const company of createCompanyDto) {
          company.user = user;
        }
      } else {
        if (file) {
          const upload = await this.cloudinaryService.uploadFile(
            file,
            'companies',
          );
          createCompanyDto.logo = upload.secure_url;
        }
        createCompanyDto.user = user;
      }

      return await this.companyModel.create(createCompanyDto);
    } catch (err) {
      console.log(err);
      throw new HttpException(err, HttpStatus.FORBIDDEN);
    }
  }

  findAll(
    limit: number,
    page: number,
    search: string,
    fields: string[],
    sortType: string,
    id: string,
    filterQuery: any,
  ): Promise<Company[]> {
    try {
      const projection: any = {};
      if (fields && fields.length > 0) {
        fields.forEach((field) => {
          projection[field] = 1; // Include the field
        });
      }
      if (id) {
        return this.companyModel
          .find({
            $nor: [{ ownerId: id }, { proCode: id }],
            deleted: false,
          })
          .select(projection)
          .limit(limit)
          .skip(page * limit);
      }
      const sort: any = {};
      if (sortType == 'name_asc') {
        sort['name'] = 1;
      } else if (sortType == 'code_asc') {
        sort['molCode'] = 1;
      } else {
        sort['createdAt'] = -1;
      }
      //query variable
      const query = {
        $or: [
          { name: { $regex: new RegExp(search, 'i') } },
          { molCode: { $regex: new RegExp(search, 'i') } },
          { immgCardNo: { $regex: new RegExp(search, 'i') } },
          { licenseNo: { $regex: new RegExp(search, 'i') } },
        ],
      };

      if (filterQuery?.licenseFrom != '' && filterQuery?.licenseTo == '') {
        filterQuery.licenseTo = new Date();
      }
      if (filterQuery?.IMMGFrom != '' && filterQuery?.IMMGTo == '') {
        filterQuery.IMMGTo = new Date();
      }

      filterQuery?.state != ''
        ? (query['state'] = filterQuery?.state)
        : undefined;
      filterQuery?.status != ''
        ? (query['status'] = filterQuery?.status)
        : undefined;
      filterQuery?.establishmentType != ''
        ? (query['establishmentType'] = filterQuery?.establishmentType)
        : undefined;
      filterQuery?.molCategory != ''
        ? (query['molCategory'] = filterQuery?.molCategory)
        : undefined;
      filterQuery?.licenseFrom != ''
        ? (query['licenseExpiryDate'] = {
            $gte: filterQuery?.licenseFrom,
            $lte: filterQuery?.licenseTo,
          })
        : undefined;
      filterQuery?.IMMGFrom != ''
        ? (query['immgCardExpiry'] = {
            $gte: filterQuery?.IMMGFrom,
            $lte: filterQuery?.IMMGTo ? filterQuery?.IMMGTo : new Date(),
          })
        : undefined;

      filterQuery?.deleted != undefined
        ? (query['deleted'] = filterQuery?.deleted)
        : (query['deleted'] = false);

      // console.log(filterQuery);

      return this.companyModel
        .find(query)
        .select(projection)
        .limit(limit)
        .skip(page * limit)
        .sort(sort);
    } catch (err) {
      console.log(err);

      throw new HttpException(err, HttpStatus.FORBIDDEN);
    }
  }

  async findOne(id: string) {
    const [data, activities] = await Promise.all([
      this.companyModel
        .findById(id)
        .populate([
          {
            path: 'ownerId',
            model: 'Owner',
            match: { deleted: false }, // Only include if deleted is false
          },
          {
            path: 'proCode',
            model: 'Owner',
            match: { deleted: false }, // Only include if deleted is false
          },
          {
            path: 'employees',
            model: 'Employee',
            match: { deleted: false }, // Only include if deleted is false
          },
        ])
        .exec(),
      this.activityModel.find({ id: id, route: 'company' }).exec(),
    ]);
    // if(data?.password)
    //   {
    //     data.password = this.encrypt(data.password);
    //   }

    return { data, activities };
  }

  async update(
    id: string,
    updateCompanyDto: UpdateCompanyDto,
    file: Express.Multer.File,
  ) {
    try {
      if (file) {
        const upload = await this.cloudinaryService.uploadFile(
          file,
          'companies',
        );
        updateCompanyDto.logo = upload.secure_url;
      }
      return await this.companyModel.findByIdAndUpdate(id, updateCompanyDto, {
        new: true,
      });
    } catch (err) {
      throw new HttpException(err, HttpStatus.FORBIDDEN);
    }
  }

  async addEmployee(id: string, employeeId: string) {
    try {
      return await this.companyModel.findByIdAndUpdate(
        id,
        {
          $addToSet: { employees: employeeId }, // Add only if employeeId is not already in the array
        },
        { new: true },
      );
    } catch (err) {
      throw new HttpException(err, HttpStatus.FORBIDDEN);
    }
  }

  async remove(id: string) {
    try {
      await this.companyModel.updateOne({ _id: id }, { deleted: true });
      return { _id: id };
    } catch (err) {
      throw new HttpException(
        'Error while deleting company',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  async ManageCompanyOwnersAndPro(
    companyId: string[],
    Id: string,
    operation: string,
    typeOfPerson: string,
  ) {
    try {
      let query: any = {};
      const fields: any = {};
      if (typeOfPerson == 'owner') {
        fields.ownerId = Id;
      } else if (typeOfPerson == 'pro') {
        fields.proCode = Id;
      }
      if (operation == 'adding') {
        query = { $push: fields };
      } else {
        query = { $pull: fields };
      }

      await this.companyModel.updateMany({ _id: { $in: companyId } }, query);

      return { message: 'success' };
    } catch (err) {
      throw new HttpException(
        `Error while ${operation} ${typeOfPerson} to company`,
        HttpStatus.FORBIDDEN,
      );
    }
  }

  async getCounters() {
    const [count, deleted] = await Promise.all([
      this.companyModel.countDocuments({ deleted: false }),
      this.companyModel.countDocuments({ deleted: true }),
    ]);
    return {
      count,
      deleted,
    };
  }

  async export(res: Response, fileName: string) {
    const companies = await this.companyModel.find({ deleted: false });

    const workbook = new exceljs.Workbook();
    const worksheet = workbook.addWorksheet('Companies');
    worksheet.columns = [
      { header: 'Name', key: 'name', width: 20 },
      { header: 'Name (Arabic)', key: 'nameAr', width: 20 },
      { header: 'Logo', key: 'logo', width: 20 },
      { header: 'Status', key: 'status', width: 20 },
      { header: 'State', key: 'state', width: 20 },
      { header: 'Address', key: 'address', width: 20 },
      { header: 'Phone', key: 'phone', width: 20 },
      { header: 'Pro Codes', key: 'proCode', width: 30 },
      { header: 'Owner IDs', key: 'ownerId', width: 30 },
      { header: 'Customer IDs', key: 'customerId', width: 30 },
      { header: 'License No', key: 'licenseNo', width: 20 },
      { header: 'IMMG Card No', key: 'immgCardNo', width: 20 },
      { header: 'IMMG Card Expiry', key: 'immgCardExpiry', width: 20 },
      { header: 'License Issue Date', key: 'licenseIssueDate', width: 20 },
      { header: 'License Expiry Date', key: 'licenseExpiryDate', width: 20 },
      { header: 'Establishment Type', key: 'establishmentType', width: 20 },
      { header: 'MOL Code', key: 'molCode', width: 20 },
      { header: 'MOL Category', key: 'molCategory', width: 20 },
      { header: 'WhatsApp No', key: 'whatsAppNo', width: 20 },
      { header: 'Mobile No', key: 'mobileNo', width: 20 },
      { header: 'E-Channel Expiry Date', key: 'echannelExpiryDate', width: 20 },
      { header: 'Website', key: 'website', width: 20 },
      { header: 'TRN', key: 'trn', width: 20 },
      { header: 'Email', key: 'email', width: 20 },
      {
        header: 'Tenancy Contract Value',
        key: 'tenancyContractValue',
        width: 20,
      },
      {
        header: 'Tenancy Contract Expiry',
        key: 'tenancyContractExp',
        width: 20,
      },
      { header: 'Remarks', key: 'remarks', width: 20 },
      { header: 'Country', key: 'country', width: 20 },
      { header: 'Zip Code', key: 'zipCode', width: 20 },
      { header: 'License Issue Place', key: 'licenseIssuePlace', width: 20 },
      { header: 'Employees', key: 'employees', width: 30 },
      { header: 'User', key: 'user', width: 20 },
      { header: 'Deleted', key: 'deleted', width: 10 },
      { header: 'Username', key: 'userName', width: 20 },
      { header: 'Password', key: 'password', width: 20 },
    ];

    companies.forEach((company) => {
      worksheet.addRow({
        name: company.name,
        nameAr: company.nameAr,
        logo: company.logo,
        status: company.status,
        state: company.state,
        address: company.address,
        phone: company.phone,
        proCode: company.proCode.join(', '),
        ownerId: company.ownerId.join(', '),
        licenseNo: company.licenseNo,
        immgCardNo: company.immgCardNo,
        immgCardExpiry: company.immgCardExpiry,
        licenseIssueDate: company.licenseIssueDate,
        licenseExpiryDate: company.licenseExpiryDate,
        establishmentType: company.establishmentType,
        molCode: company.molCode,
        molCategory: company.molCategory,
        whatsAppNo: company.whatsAppNo,
        mobileNo: company.mobileNo,
        echannelExpiryDate: company.echannelExpiryDate,
        website: company.website,
        trn: company.trn,
        email: company.email,
        tenancyContractValue: company.tenancyContractValue,
        tenancyContractExp: company.tenancyContractExp,
        remarks: company.remarks,
        country: company.country,
        zipCode: company.zipCode,
        licenseIssuePlace: company.licenseIssuePlace,
        employees: company.employees.join(', '),
        user: company.user,
        deleted: company.deleted,
        userName: company.userName,
        password: company.password,
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
