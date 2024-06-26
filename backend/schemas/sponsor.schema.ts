import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';

export type SponsorDocument = HydratedDocument<Sponsor>;

@Schema({ timestamps: true })
export class Sponsor {
  @Prop({ required: true })
  uid: string; //not unique

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  nameAr: string;

  @Prop()
  avatar: string;

  @Prop()
  dob: Date;

  @Prop({ type: String, ref: 'Nationality', required: true })
  idNationality: string;

  @Prop({ type: String, ref: 'Owner' })
  owner: ObjectId;

  @Prop({ type: String, ref: 'Employee' })
  employee: ObjectId;

  @Prop()
  nationality: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  remarks: string;

  @Prop()
  state: string;

  @Prop()
  address: string;

  @Prop()
  sponsor: string;

  @Prop()
  gender: string;

  @Prop()
  job: string;

  @Prop()
  residenceExpiryDate: Date;

  @Prop()
  fileImmgNo: string;

  @Prop()
  status: string;

  @Prop()
  relativeRelation: string;

  @Prop({ type: String, trim: true, sparse: true })
  emiratesId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: string;

  @Prop({ default: false })
  deleted: boolean;
}

export const SponsorSchema = SchemaFactory.createForClass(Sponsor);

SponsorSchema.index(
  { emiratesId: 1, deleted: 1 },
  {
    unique: true,
    partialFilterExpression: { deleted: false, emiratesId: { $exists: true } },
  },
);

SponsorSchema.index(
  { uid: 1, deleted: 1 },
  { unique: true, partialFilterExpression: { deleted: false } },
);

SponsorSchema.index(
  { name: 1, deleted: 1 },
  { unique: true, partialFilterExpression: { deleted: false } },
);
SponsorSchema.index(
  { nameAr: 1, deleted: 1 },
  { unique: true, partialFilterExpression: { deleted: false } },
);
