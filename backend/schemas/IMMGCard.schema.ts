import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type IMMGCardDocument = HydratedDocument<IMMGCard>;

@Schema({ timestamps: true })
export class IMMGCard {
  @Prop({ required: true })
  _id: string;

  @Prop({ enum: ["GDRFA", "ECHANEL", "ECHANELPersonal"], required: true })
  cardType : string

  @Prop({ required: true })
  userName: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  nogodiNewUser: string;

  @Prop()
  nogodiRegNo: string;

  @Prop()
  nogodiNewPass: string;

  @Prop()
  nogodiWallet: string;

  @Prop()
  nogodiPassword: string;

  @Prop()
  pinToken: string;

  @Prop()
  dataCreate: string;

  @Prop()
  eChanelExpiry: Date;

  @Prop()
  type: string;

  @Prop()
  status: string;

  @Prop()
  customerName: string;

  @Prop()
  customerNameAr: string;

  @Prop()
  gender: string;

  @Prop()
  nationality: string;

  @Prop()
  emiratesId: string;

  

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: string;
}

export const IMMGCardSchema = SchemaFactory.createForClass(IMMGCard);
