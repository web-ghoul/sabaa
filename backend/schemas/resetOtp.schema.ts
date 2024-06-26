import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';

export type resetOtpDocument = HydratedDocument<ResetOtp>;

@Schema({ timestamps: true })
export class ResetOtp {
  
  _id: ObjectId;

  @Prop()
  email: string;

  @Prop()
  otp: string;

  @Prop()
  expiryDate: Date;

}

export const ResetOtpSchema = SchemaFactory.createForClass(ResetOtp);