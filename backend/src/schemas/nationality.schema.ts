
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type NationalityDocument = HydratedDocument<Nationality>;

@Schema({ timestamps: true })
export class Nationality {
  
  @Prop({ required: true })
  id: string;
  
  @Prop({ required: true })
  nationality: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: string;

  @Prop({default : false})
  deleted: boolean;
}


export const NationalitySchema = SchemaFactory.createForClass(Nationality);

NationalitySchema.index({ nationality: 1 , deleted: 1 } , {unique : true, partialFilterExpression : {deleted : false}})
NationalitySchema.index({ id: 1 , deleted: 1 } , {unique : true, partialFilterExpression : {deleted : false}})