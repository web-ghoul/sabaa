import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({ timestamps: true })
export class WorkPermit extends Document {
  @Prop({ required: true })
  _id: string;

  @Prop({ type: String, ref: 'Employee', required: true })
    personCode: string;

    @Prop({ type: String, ref: 'Transaction', required: true })
    transactionsNO: string;
  

  @Prop()
  companyCode: string;

  @Prop({ type: Date })
  workPermitIssu: Date;

  @Prop({ type: Date })
  workPermitExpiry: Date;

  @Prop()
  cardType: string;

  @Prop()
  cardStatus: string;

  @Prop({ type: Date })
  tawjeehDate: Date;

  @Prop()
  uidNo: string;

  @Prop()
  emiratesIdNo: string;

  @Prop({ type: String, ref: 'JobTitle', required: true })
  codeMOHREJOB: string;
  
  @Prop({ type: Date })
  visitExpiryDate: Date;

  @Prop({ type: Date })
  medicalDate: Date;

  @Prop({ type: Date })
  changeStatusDate: Date;

  @Prop({ type: Date })
  residenceExpiryDate: Date;

  @Prop({ type: Date })
  dateEntry: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: string;
}

export const WorkPermitSchema = SchemaFactory.createForClass(WorkPermit);
