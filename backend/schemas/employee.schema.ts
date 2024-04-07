import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type EmployeeDocument = HydratedDocument<Employee>;

@Schema({ timestamps: true })
export class Employee {
  
    @Prop({ required: true })
    _id: string;
  
    @Prop({ required: true })
    employeeName: string;
  
    @Prop({ type: String, ref: 'Company', required: true })
    companyCode: string;
  
    @Prop({ type: Date })
    dateOfBirth: Date;
  
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
    uidNo: string;
  
    @Prop()
    emiratesIdNo: string;
  
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: string;

    @Prop()
  deleted: boolean;

}



export const EmployeeSchema = SchemaFactory.createForClass(Employee);