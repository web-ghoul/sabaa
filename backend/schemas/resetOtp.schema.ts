import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';

export type resetOtpDocument = HydratedDocument<ResetOtp>;

@Schema({ timestamps: true })
export class ResetOtp {
  
  _id: ObjectId;

  @Prop()
  otp: string;

}

export const UserSchema = SchemaFactory.createForClass(ResetOtp);