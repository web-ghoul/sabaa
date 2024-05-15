import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Owner } from 'schemas/owner.schema';
import { Model, ObjectId } from 'mongoose';
import { Company } from 'schemas/company.schema';

@Injectable()
export class OwnerService {
  constructor(
    @InjectModel('Owner') private ownerModel: Model<Owner>,
    @InjectModel('Company') private companyModel: Model<Company>,
  ) {}
  async create(
    createOwnerDto: CreateOwnerDto,
    file: Express.Multer.File,
    user: ObjectId,
  ) {
    try {
      

      if (Array.isArray(createOwnerDto)) {
        createOwnerDto.map((owner) => {
          owner.user = user;
          createOwnerDto.avatar = file ? file.path : undefined;
        });
      } else {
        createOwnerDto.user = user;
        createOwnerDto.avatar = file ? file.path : undefined;
      }

      return await this.ownerModel.create(createOwnerDto);

      //inject in company if exits
    } catch (err) {
      throw new HttpException(err, HttpStatus.FORBIDDEN);
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
  ): Promise<Owner[]> {
    try {
      const projection: any = {};
      if (fields && fields.length > 0) {
        fields.forEach((field) => {
          projection[field] = 1; // Include the field
        });
      }
      const sort: any = {};
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

      const query = {
        $or: [
          { name: { $regex: new RegExp(search, 'i') } },
          { personCode: { $regex: new RegExp(search, 'i') } },
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
      type != '' ? (query['type'] = type) : (query['type'] = undefined);
      

      // console.log(query);

      return this.ownerModel
        .find(query)
        .select(projection)
        .limit(limit)
        .skip(page * limit)
        .sort(sort);
    } catch (err) {
      throw new HttpException(
        'Error while getting owners',
        HttpStatus.FORBIDDEN,
      );
    }
  }

  async findOne(id: string) {
    const [owner, companies] = await Promise.all([
      this.ownerModel.findById(id),
      this.companyModel
        .find({ $or:[
          {ownerId: id },
          {proCode: id },
        ]
        })
        .populate([
          { path: 'ownerId', model: 'Owner' },
          { path: 'proCode', model: 'Owner' },
        ])
        .exec(),
      //this.companyModel.find({ownerId: id}).populate([{ path: 'ownerId', model: 'Owner' },{ path: 'proCode', model: 'Owner' }, { path: 'immgCardNo', model: 'IMMGCard' }]).exec()
    ]);
    return { owner, companies };
  }

  async update(
    id: string,
    updateOwnerDto: UpdateOwnerDto,
    file: Express.Multer.File,
  ) {
    try {
      updateOwnerDto.avatar = file ? file.path : undefined;
      return await this.ownerModel.findByIdAndUpdate(id, updateOwnerDto);
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

      return {id: id} ; 
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

  async getCounters(isPro: boolean = false) {
    const [count, deleted] = await Promise.all([
      this.ownerModel.countDocuments({ deleted: false, isPro: isPro }),
      this.ownerModel.countDocuments({ deleted: true, isPro: isPro }),
    ]);
    return {
      count,
      deleted,
    };
  }
}
