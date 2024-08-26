import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {HydratedDocument, ObjectId } from 'mongoose';

export type TransactionDocument = HydratedDocument<Transaction>;

@Schema({ timestamps: true })
export class Transaction {
  _id: ObjectId;

  @Prop({ type: String })
  transactionNo: string;

  @Prop({ type: String, ref: 'Employee', required: true })
  employeeId: string;

  @Prop({ type: String, required: true })
  companyCode: string;

  @Prop({ type: String, ref: 'Company', required: true })
  companyId: string;

  @Prop()
  companyName: string;

  @Prop()
  employeeName: string;

  @Prop()
  employeeNameAr: string;

  @Prop({ type: Date })
  dob: Date;

  @Prop()
  gender: string;

  @Prop({ type: String, ref: 'Nationality', required: true })
  idNationality: string;

  @Prop()
  nationality: string;

  @Prop()
  passportNumber: string;

  @Prop({ type: Date })
  passportExpiry: Date;

  @Prop()
  job: string;

  @Prop({ type: String })
  personCode: string;

  @Prop()
  uid: string;

  @Prop({})
  emiratesNo: string;

  @Prop()
  lcNumber: string;

  @Prop()
  lcNo: string;

  @Prop()
  type: string;

  @Prop({ type: Date })
  lcExpiryDate: Date;

  @Prop({ type: Date })
  visitExpiryDate: Date;

  @Prop({ type: Date })
  tawjeehDate: Date;

  @Prop({ type: Date })
  medicalDate: Date;

  @Prop({ type: Date })
  changeStatusDate: Date;

  @Prop({ default: 'In Process' })
  status: string;

  @Prop({ type: Date })
  statusDate: Date;

  @Prop()
  cardType: string;

  @Prop()
  salary: number;

  @Prop()
  remarks: string;

  @Prop({ type: Date })
  residenceExpiryDate: Date;

  @Prop({ default: false })
  deleted: boolean;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);


TransactionSchema.index(
  { uid: 1, deleted: 1, transactionNo: 1},
  { unique: true, partialFilterExpression: { deleted: false, uid: { $exists: true } } }
);

TransactionSchema.index(
  { transactionNo: 1, deleted: 1},
  { unique: true, partialFilterExpression: { deleted: false, transactionNo: { $exists: true } } }
);

TransactionSchema.index(
  { emiratesNo: 1, deleted: 1, transactionNo: 1 },
  { unique: true, partialFilterExpression: { deleted: false, emiratesNo: { $exists: true } } }
);