import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  
  _id: ObjectId;
  @Prop({unique: true})
  name: string;

  @Prop()
  password: string;

  @Prop()
  email: string;

  @Prop()
  role: string;

  @Prop()
  phone: string;

  @Prop()
  avatar: string;

  @Prop()
  status: string;

  @Prop({default : false})
  deleted: boolean;

}

export const UserSchema = SchemaFactory.createForClass(User);