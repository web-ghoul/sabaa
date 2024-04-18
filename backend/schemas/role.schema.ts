import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';

export type UserDocument = HydratedDocument<Role>;

@Schema({ timestamps: true })
export class Role {
  
  _id: ObjectId;
  @Prop()
  name: string;

  @Prop({default : false})
  echanel: boolean;

  @Prop({default : false})
  newEmp: string;

  @Prop({default : false})
  renewEmp: string;

  @Prop({default : false})
  addNationality: string;

  @Prop({default : false})
  addEmployee: string;

  @Prop({default : false})
  deleted: boolean;
}

export const RoleSchema = SchemaFactory.createForClass(Role);