import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSponsorDto } from './dto/create-sponsor.dto';
import { UpdateSponsorDto } from './dto/update-sponsor.dto';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, ObjectId } from 'mongoose';
import { Sponsor } from 'schemas/sponsor.schema';
import { Owner } from 'schemas/owner.schema';
import { Employee } from 'schemas/employee.schema';

@Injectable()
export class SponsorsService {
  constructor(@InjectModel('Sponsor') private sponsorModel: Model<Sponsor>,@InjectModel('Owner') private ownerModel: Model<Owner>,
  @InjectModel('Employee') private employeeModel: Model<Employee>,) {}
  async create(createSponsorDto: CreateSponsorDto,file: Express.Multer.File,
    user: ObjectId,) {
      try {
        

        if (Array.isArray(createSponsorDto)) {
          createSponsorDto.map((sponsor) => {
            sponsor.user = user;
            // owner.avatar = file ? file.path : undefined;
          });
        } else {
          createSponsorDto.user = user;
          createSponsorDto.avatar = file ? file.path : undefined;
        }
        
        const data = await this.sponsorModel.create(createSponsorDto) ;

        if(data.owner)
          {
            await this.ownerModel.updateMany({ _id: data.owner }, { $push: { sponsors: data._id } })
          }else
          {
            await this.employeeModel.updateMany({ _id: data.employee }, { $push: { sponsors: data._id } })
          }
        
        

        return data ; 
  
        //inject in company if exits
      } catch (err) {
        throw new HttpException(err, HttpStatus.BAD_REQUEST);
      }
  }

  findAll() {
    return `This action returns all sponsors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sponsor`;
  }

  async update(id: string,
    updateSponsorDto: UpdateSponsorDto,
    file: Express.Multer.File,) {
      try {
        updateSponsorDto.avatar = file ? file.path : undefined;
        return await this.sponsorModel.findByIdAndUpdate(id, updateSponsorDto);
      } catch (err) {
        throw new HttpException(err, HttpStatus.BAD_REQUEST);
      }
  }

 async remove(id: string) {
    try {

       await Promise.all([
        this.sponsorModel.updateOne({ _id: id }, { deleted: true }),
        this.ownerModel.updateOne(
          { sponsors: new mongoose.Types.ObjectId(id) },
          { $pull: { sponsors: new mongoose.Types.ObjectId(id) } },
        ),
        this.employeeModel.updateOne(
          { sponsors: new mongoose.Types.ObjectId(id) },
          { $pull: { sponsors: new mongoose.Types.ObjectId(id) } },
        ),
      ]);
      
      return {_id: id} ; 
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }
}
