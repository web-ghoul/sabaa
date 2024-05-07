import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type EmployeeDocument = HydratedDocument<Employee>;

@Schema({ timestamps: true })
export class Employee {
  
  
    @Prop({ required: true })
    name: string;
    
    @Prop({ required: true })
    nameAr: string;

    @Prop({type: String, trim: true,unique: true, sparse: true, partialFilterExpression: { deleted: false } })
    personCode: string;
  
    @Prop({ type: [String], ref: 'Company', required: true })
    companyCode: [string];
  
    @Prop({ type: Date })
    dateOfBirth: Date;

    @Prop({})
    
  
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

    @Prop({default : false})
  deleted: boolean;

}



export const EmployeeSchema = SchemaFactory.createForClass(Employee);