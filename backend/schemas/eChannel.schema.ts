import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';

export type EChannelDocument = HydratedDocument<EChannel>;

@Schema({ timestamps: true })
export class EChannel {
  
  _id: ObjectId;

  @Prop()
  type: string;

  @Prop()
  gender: string;

  @Prop()
  status: string;

  @Prop()
  personCode: string;

  @Prop()
  phone: string;

  @Prop()
  uid: string;

  @Prop()
  emiratesId: string;

  @Prop()
  name: string;

  @Prop()
  eChannelNotes: string;

  @Prop()
  username: string;

  @Prop()
  password: string;
  
  @Prop({type : mongoose.Schema.Types.ObjectId , ref : "Employee"})
  employee:ObjectId


  @Prop({type : mongoose.Schema.Types.ObjectId , ref : "Owner"})
  owner: ObjectId

  @Prop({default : false})
  deleted: boolean;

}

export const EChannelSchema = SchemaFactory.createForClass(EChannel);

EChannelSchema.index({ uid: 1 , deleted: 1 } , {unique : true, partialFilterExpression : {deleted : false}})
EChannelSchema.index({ username: 1 , deleted: 1 } , {unique : true, partialFilterExpression : {deleted : false}})

// UserSchema.index({ phone: 1 , deleted: 1 } , {unique : true, partialFilterExpression : {deleted : false}})
// UserSchema.index({ name: 1 , deleted: 1 } , {unique : true, partialFilterExpression : {deleted : false}})
