import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type CompanyDocument = HydratedDocument<Company>;

@Schema({ timestamps: true })
export class Company {

  @Prop({ required: true })
  _id: string;

  @Prop()
  name: string;

  @Prop()
  nameAr: string;

  @Prop()
  logo: string;

  @Prop()
  status: string;

  @Prop()
  state: string;

  @Prop()
  address: string;

  @Prop()
  phone: string;

  @Prop({ type: Array, ref: 'Owner' })
  proCode: string[];

  @Prop({ type: Array, ref: 'Owner' })
  ownerId: string[];

  @Prop()
  licenseNo: string; //can be repeated but in different state

  @Prop({ type: mongoose.Types.ObjectId, ref: 'IMMGCard' })
  immgCardNo: string;

  @Prop({ type: Date })
  immgCardExpiry: Date;

  @Prop({ type: Date })
  licenseIssueDate: Date;

  @Prop({ type: Date })
  licenseExpiryDate: Date;

  @Prop()
  establishmentType: string;

  @Prop()
  molCode: string;

  @Prop()
  molCategory: string;

  @Prop()
  whatsAppNo: string;

  @Prop()
  mobileNo: string;

  @Prop()
  website: string;

  @Prop()
  trn: string;

  @Prop()
  email : string;

  @Prop()
  tenancyContractValue : string;

  @Prop()
  tenancyContractExp : string;

  @Prop()
  remarks: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
