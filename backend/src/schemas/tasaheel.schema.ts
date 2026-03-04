import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';

export type TasaheelDocument = HydratedDocument<Tasaheel>;

@Schema({ timestamps: true })
export class Tasaheel {
  
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
  personCode: string;

  @Prop()
  mobile: string;
  
  @Prop()
  notes: string;

  @Prop()
  name: string;

  @Prop()
  nameAr: string;
  
  @Prop({type : mongoose.Schema.Types.ObjectId , ref : "Employee"})
  employee:ObjectId


  @Prop({type : mongoose.Schema.Types.ObjectId , ref : "Owner"})
  owner: ObjectId

  @Prop({default : false})
  deleted: boolean;

}

export const TasaheelSchema = SchemaFactory.createForClass(Tasaheel);

TasaheelSchema.index({ personCode: 1 , deleted: 1 } , {unique : true, partialFilterExpression : {deleted : false}})
TasaheelSchema.index({ username: 1 , deleted: 1 } , {unique : true, partialFilterExpression : {deleted : false}})

// UserSchema.index({ phone: 1 , deleted: 1 } , {unique : true, partialFilterExpression : {deleted : false}})
// UserSchema.index({ name: 1 , deleted: 1 } , {unique : true, partialFilterExpression : {deleted : false}})
