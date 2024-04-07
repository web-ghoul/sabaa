
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type NationalityDocument = HydratedDocument<Nationality>;

@Schema({ timestamps: true })
export class Nationality {
  
  @Prop({ required: true })
  _id: string;
  @Prop()
  nationality: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: string;

  @Prop()
  deleted: boolean;
}

export const NationalitySchema = SchemaFactory.createForClass(Nationality);