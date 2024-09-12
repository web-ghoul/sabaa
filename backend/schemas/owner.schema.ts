import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type OwnerDocument = HydratedDocument<Owner>;

@Schema({ timestamps: true })
export class Owner {
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
  residenceExpiryDate: Date;

  @Prop()
  fileImmgNo: string;

  @Prop({ default: 'active' })
  status: string;

  @Prop({ type: Array, default: [], ref: 'Sponsor' })
  sponsors: string[];

  // @Prop()
  // cardNumber: string;

  @Prop()
  type: string;

  // @Prop()
  // proCode: string[]; //array of Pro

  // @Prop({default: false})
  // isCustomer: boolean

  // @Prop({default: false})
  // isPro: boolean;

  @Prop({ type: Object })
  medical: object;

  @Prop({ type: String })
  medicalPolicyNo: string;

  @Prop({ type: Object })
  iLOE: object;

  @Prop({ type: String })
  iLOEPolicyNo: string;

  @Prop()
  gender: string;

  @Prop()
  job: string;

  @Prop({ type: String, trim: true, sparse: true })
  emiratesId: string;

  @Prop({ type: String, trim: true, sparse: true })
  personCode: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: string;

  @Prop({ default: false })
  deleted: boolean;
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);

OwnerSchema.index(
  { emiratesId: 1, deleted: 1 },
  {
    unique: true,
    partialFilterExpression: {
      deleted: false,
      emiratesId: { $exists: true, $ne: '' },
    },
  },
);
OwnerSchema.index(
  { personCode: 1, deleted: 1 },
  {
    unique: true,
    partialFilterExpression: {
      deleted: false,
      personCode: { $exists: true, $ne: '' },
    },
  },
);

OwnerSchema.index(
  { uid: 1, deleted: 1 },
  {
    unique: true,
    partialFilterExpression: {
      deleted: false,
      uid: { $exists: true, $ne: '' },
    },
  },
);

OwnerSchema.index(
  { name: 1, deleted: 1 },
  { unique: true, partialFilterExpression: { deleted: false } },
);
OwnerSchema.index(
  { nameAr: 1, deleted: 1 },
  { unique: true, partialFilterExpression: { deleted: false } },
);
