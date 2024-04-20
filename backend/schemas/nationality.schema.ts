
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type NationalityDocument = HydratedDocument<Nationality>;

@Schema({ timestamps: true })
export class Nationality {
  
  @Prop({ required: true ,unique: true})
  id: string;
  
  @Prop({ required: true ,unique: true})
  nationality: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: string;

  @Prop({default : false})
  deleted: boolean;
}


export const NationalitySchema = SchemaFactory.createForClass(Nationality);