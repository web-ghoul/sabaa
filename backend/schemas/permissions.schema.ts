import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes, Types } from 'mongoose';

export type PermissionDocument = HydratedDocument<Permission>;

@Schema()
class PermissionsObject {
  
  @Prop({ type: Boolean, default: false })
  read: boolean;

  @Prop({ type: Boolean, default: false })
  post: boolean;

  @Prop({ type: Boolean, default: false })
  patch: boolean;

  @Prop({ type: Boolean, default: false })
  delete: boolean;

}

const PermissionsObjectSchema = SchemaFactory.createForClass(PermissionsObject);

@Schema({ timestamps: true })
export class Permission {
  @Prop({ type: SchemaTypes.ObjectId, auto: true })
  _id: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ type: Map, of: PermissionsObjectSchema })
  permissions: Map<string, PermissionsObject>;
}

export const PermissionSchema = SchemaFactory.createForClass(Permission);
