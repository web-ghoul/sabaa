import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';

export type NatwasalDocument = HydratedDocument<Natwasal>;

@Schema({ timestamps: true })
export class Natwasal {
  _id: ObjectId;

  @Prop()
  type: string;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  security1: string;

  @Prop()
  security2: string;

  @Prop()
  email: string;

  @Prop()
  mobile: string;

  @Prop()
  personCode: string;

  @Prop()
  name: string;

  @Prop()
  nameAr: string;
  
  @Prop()
  notes: string;
  
  @Prop({type : mongoose.Schema.Types.ObjectId , ref : "Employee"})
  employee:ObjectId


  @Prop({type : mongoose.Schema.Types.ObjectId , ref : "Owner"})
  owner: ObjectId

  @Prop({default : false})
  deleted: boolean;

}

export const NatwasalSchema = SchemaFactory.createForClass(Natwasal);

NatwasalSchema.index({ personCode: 1 , deleted: 1 } , {unique : true, partialFilterExpression : {deleted : false}})
// UserSchema.index({ phone: 1 , deleted: 1 } , {unique : true, partialFilterExpression : {deleted : false}})
// UserSchema.index({ name: 1 , deleted: 1 } , {unique : true, partialFilterExpression : {deleted : false}})
