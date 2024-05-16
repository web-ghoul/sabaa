import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type EmployeeDocument = HydratedDocument<Employee>;

@Schema({ timestamps: true })
export class Employee {
  
  
    @Prop({ required: true })
    name: string;
    
    @Prop({ required: true })
    nameAr: string;

    @Prop()
    avatar: string;

    @Prop({ type: String, trim: true, sparse: true })
    personCode: string;
  
    @Prop({ type: [String], ref: 'Company', required: true })
    companyId: [string];

    @Prop()
    companyName: [string]
  
    @Prop({ type: Date })
    dob: Date;

    @Prop({type: String, default: "Cancel", enum: ["Active", "Cancel", "Abscond", "Complaint"]})
    status: string

    @Prop()
    cardType: string

    @Prop()
    cardNumber: string;

    @Prop()
    job: string


    @Prop()
    visaFileNumber: string

    @Prop()
    salary: number

    @Prop({type : Object})
    medical : object

    @Prop({type : Object})
    iLOE: object
  
    @Prop()
    gender: string;
  
    @Prop({ type: String, ref: 'Nationality' })
    idNationality: string;
  
    @Prop()
    nationality: string;
  
    @Prop()
    passportNumber: string;
  
    @Prop({ type: Date })
    passportExpiry: Date;
  
    @Prop()
    uid: string;

    @Prop()
    residenceExpireDate: Date

    @Prop()
    workPermitNumber: string //ref it 

    @Prop()
    lcExpireDate: Date

    @Prop()
    mobileNumber: string

    @Prop()
    email: string

    @Prop()
    remarks: string

    @Prop()
    emiratesId: string;
  
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: string;


    @Prop({default : false})
    deleted: boolean;

}


export const EmployeeSchema = SchemaFactory.createForClass(Employee);

EmployeeSchema.index(
  { personCode: 1, deleted: 1 },
  { unique: true, partialFilterExpression: { deleted: false, personCode: { $exists: true } } }
);