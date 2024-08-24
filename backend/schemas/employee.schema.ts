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

    @Prop({type: String, trim: true, default: "Cancel", enum: ["Active", "Cancel", "Abscond", "Complaint", ""]})
    status: string

    @Prop()
    cardType: string

    @Prop()
    lcNumber: string;

    @Prop()
    job: string

    @Prop()
    visaFileNumber: string

    @Prop()
    salary: number

    @Prop({type : Object})
    medical : object

    @Prop({type : String})
    medicalPolicyNo : string

    @Prop({type : Object})
    iLOE: object

    @Prop({type : String})
    iLOEPolicyNo: string
    
  
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
    lcExpireDate: Date

    @Prop()
    mobileNumber: string

    @Prop()
    email: string

    @Prop()
    remarks: string

    @Prop()
    fileImmgNo: string

    @Prop()
    emiratesId: string;

    @Prop()
    sponsor: string;
  
    @Prop({ type: Array, default: [], ref: 'Sponsor' })
    sponsors: string[];

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

EmployeeSchema.index(
  { name: 1, deleted: 1 },
  { unique: true, partialFilterExpression: { deleted: false, name: { $exists: true } } }
);

EmployeeSchema.index(
  { nameAr: 1, deleted: 1 },
  { unique: true, partialFilterExpression: { deleted: false, nameAr: { $exists: true } } }
);

EmployeeSchema.index(
  { uid: 1, deleted: 1 },
  { unique: true, partialFilterExpression: { deleted: false, uid: { $exists: true } } }
);

EmployeeSchema.index(
  { visaFileNumber: 1, deleted: 1 },
  { unique: true, partialFilterExpression: { deleted: false, visaFileNumber: { $exists: true } } }
);

EmployeeSchema.index(
  { emiratesId: 1, deleted: 1 },
  { unique: true, partialFilterExpression: { deleted: false, emiratesId: { $exists: true } } }
);

EmployeeSchema.index(
  { cardNumber: 1, deleted: 1 },
  { unique: true, partialFilterExpression: { deleted: false, cardNumber: { $exists: true } } }
);

EmployeeSchema.index(
  { medicalPolicyNo: 1, deleted: 1 },
  { unique: true, partialFilterExpression: { deleted: false, medicalPolicyNo: { $exists: true } } }
);

EmployeeSchema.index(
  { iLOEPolicyNo: 1, deleted: 1 },
  { unique: true, partialFilterExpression: { deleted: false, iLOEPolicyNo: { $exists: true } } }
);

