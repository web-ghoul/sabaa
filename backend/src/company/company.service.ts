import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company } from 'schemas/company.schema';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import * as crypto from 'crypto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<Company>,
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
  async create(createCompanyDto: CreateCompanyDto, file: Express.Multer.File) {
    try {
      if (Array.isArray(createCompanyDto)) {
        createCompanyDto.map((x) => {
          //x._id = x.licenseNo + x.state ;
          x.logo = file ? file.path : undefined;
        });
      } else {
        //createCompanyDto._id = createCompanyDto.licenseNo + createCompanyDto.state;
        createCompanyDto.logo = file ? file.path : undefined;
      }
      
      return await this.companyModel.create(createCompanyDto);
    } catch (err) {
      console.log(err)
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
      
      filterQuery?.deleted != undefined ? query['deleted'] = filterQuery?.deleted : query['deleted'] = false
        
      
      

      return this.companyModel
        .find(query)
        .select(projection)
        .limit(limit)
        .skip(page * limit)
        .sort(sort);
    } catch (err) {
      throw new HttpException(err, HttpStatus.FORBIDDEN);
    }
  }

  async findOne(id: string) {
    const data = await this.companyModel
      .findById(id)
      .populate([
        { path: 'ownerId', model: 'Owner' },
        { path: 'proCode', model: 'Owner' },
        {path: 'employees', model: 'Employee'}
      ])
      .exec();

      data.password = this.encrypt(data.password);

      return data ;
    
  }

  async update(
    id: string,
    updateCompanyDto: UpdateCompanyDto,
    file: Express.Multer.File,
  ) {
    try {
      //updateCompanyDto._id = updateCompanyDto.licenseNo + updateCompanyDto.state;
      updateCompanyDto.logo = file ? file.path : undefined;
      return await this.companyModel.findByIdAndUpdate(id, updateCompanyDto, {
        new: true,
      });
    } catch (err) {
      throw new HttpException(err, HttpStatus.FORBIDDEN);
    }
  }

  remove(id: string) {
    try {
      return this.companyModel.updateOne({ _id: id }, { deleted: true });
    } catch (err) {
      throw new HttpException(
        'Error while deleting company',
        HttpStatus.FORBIDDEN,
      );
    }
  }
  async ManageCompanyOwnersAndPro(
    companyId: string,
    Id: string,
    operation: string,
    typeOfPerson: string,
  ) {
    try {
      let query: any = {};
      const fields: any = {};
      if (typeOfPerson == 'owner') {
        fields.ownerId = Id;
      } else {
        fields.proCode = Id;
      }
      if (operation == 'adding') {
        query = { $push: fields };
      } else {
        query = { $pull: fields };
      }

      await this.companyModel.findByIdAndUpdate(companyId, query);

      return { message: 'success' };
    } catch (err) {
      throw new HttpException(
        `Error while ${operation} ${typeOfPerson} to company`,
        HttpStatus.FORBIDDEN,
      );
    }
  }

  async getCounters() {
    const [count,deleted] = await Promise.all([
      this.companyModel.countDocuments({ deleted: false }),
    this.companyModel.countDocuments({ deleted: true })
    ]) ;
    return {
      count,
      deleted
    };
  }
}
