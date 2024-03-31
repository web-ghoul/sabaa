import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateImmgcardDto } from './dto/create-immgcard.dto';
import { UpdateImmgcardDto } from './dto/update-immgcard.dto';
import { InjectModel } from '@nestjs/mongoose';
import { IMMGCard } from 'schemas/IMMGCard.schema';
import { Model } from 'mongoose';

@Injectable()
export class ImmgcardService {
  constructor(@InjectModel(IMMGCard.name) private immgcardModel: Model<IMMGCard>) {}

  create(createImmgcardDto: CreateImmgcardDto) {
    try{
      return this.immgcardModel.create(createImmgcardDto);
    }catch(err)
    {
      throw new HttpException("Error while creating immgcard" , HttpStatus.FORBIDDEN);
    }
  }

  findAll(limit: number, page: number, search:string,fields:string[],cardType:string): Promise<IMMGCard[]> {  
    const projection: any = {};
    if (fields && fields.length > 0) {
        fields.forEach(field => {
            projection[field] = 1; // Include the field
        });
    }
    const query = {}
    if(cardType)  
    {
      query["cardType"] = cardType
    }
    if(search)
    {
      query["_id"] = { $regex: new RegExp(search, "i") }
    }

    return this.immgcardModel.find(query).select(projection).limit(limit).skip(page*limit).sort({createdAt: -1});
  }

  findOne(id: string) {
    return this.immgcardModel.findById(id);
  }

  update(id: string, updateImmgcardDto: UpdateImmgcardDto) {
    try{
      return this.immgcardModel.findByIdAndUpdate(id, updateImmgcardDto);
    }catch(err)
    {
      throw new HttpException("Error while updating immgcard" , HttpStatus.FORBIDDEN);
    }
  }

  remove(id: string) {
    try{
      return this.immgcardModel.deleteOne({ _id: id });

    }catch(err)
    {
      throw new HttpException("Error while deleting immgcard" , HttpStatus.FORBIDDEN);
    }
  }
}
