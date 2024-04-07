import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Transaction extends Document {
  @Prop({ required: true })
  _id: string;

  @Prop({ type: String, ref: 'Company', required: true })
  companyCode: string;

  @Prop()
  companyName: string;

  @Prop()
  employeeName: string;

  @Prop({ type: Date })
  dateOfBirth: Date;

  @Prop()
  gender: string;

  @Prop({ type: String, ref: 'Nationality', required: true })
  idNationality: string;

  @Prop()
  nationality: string;

  @Prop()
  passportNumber: string;

  @Prop({ type: Date })
  passportExpiry: Date;

  @Prop({ type: String, ref: 'JobTitle', required: true })
    codeMOHREJOB: string;

  @Prop()
  job: string;

  @Prop({ type: String, ref: 'Employee', required: true })
    personCode: string;

  @Prop()
  uidNo: string;

  @Prop()
  emiratesIdNo: string;

  @Prop({ type: Date })
  visitExpiryDate: Date;

  @Prop({ type: Date })
  tawjeehDate: Date;

  @Prop({ type: Date })
  medicalDate: Date;

  @Prop({ type: Date })
  changeStatusDate: Date;

  @Prop()
  status: string;

  @Prop({ type: Date })
  statusDate: Date;

  @Prop()
  cardType: string;

  @Prop({ type: Date })
  dateEntry: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: string;

  @Prop({ type: Date })
  residenceExpiryDate: Date;

  @Prop()
  deleted: boolean;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
