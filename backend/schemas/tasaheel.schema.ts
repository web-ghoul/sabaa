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

  
  @Prop({type : mongoose.Schema.Types.ObjectId , ref : "Employee"})
  employee:ObjectId


  @Prop({type : mongoose.Schema.Types.ObjectId , ref : "Owner"})
  owner: ObjectId

  @Prop()
  deleted: boolean;

}

export const TasaheelSchema = SchemaFactory.createForClass(Tasaheel);

// UserSchema.index({ email: 1 , deleted: 1 } , {unique : true, partialFilterExpression : {deleted : false}})
// UserSchema.index({ phone: 1 , deleted: 1 } , {unique : true, partialFilterExpression : {deleted : false}})
// UserSchema.index({ name: 1 , deleted: 1 } , {unique : true, partialFilterExpression : {deleted : false}})
