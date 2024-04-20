import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  
  _id: ObjectId;
  @Prop({unique: true, min : [5, 'name must be at least 5 characters long'] , max : [20, 'name must be at most 20 characters long']} )
  name: string;

  @Prop()
  password: string;

  @Prop({unique: true})
  email: string;

  @Prop()
  role: string;

  @Prop({unique: true})
  phone: string;

  @Prop()
  avatar: string;

  @Prop()
  status: string;

  @Prop({default : false})
  deleted: boolean;

}

export const UserSchema = SchemaFactory.createForClass(User);