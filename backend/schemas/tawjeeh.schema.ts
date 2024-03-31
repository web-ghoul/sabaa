import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Tawjeeh extends Document {
  @Prop({ required: true })
  _id: string;

  @Prop({ type: String, ref: 'Employee', required: true })
    personCode: string;

  @Prop()
  companyCode: string;

  @Prop()
  eMailUser: string;

  @Prop()
  mobilNo: string;

  @Prop()
  userName: string;

  @Prop()
  password: string;

  @Prop([{ type: String }])
  securityQuestions1: string[];

  @Prop([{ type: String }])
  securityQuestions2: string[];

  @Prop({ type: Date })
  dataCreate: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: string;


}

export const TawjeehSchema = SchemaFactory.createForClass(Tawjeeh);
