import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type JobTitleDocument = HydratedDocument<JobTitle>;

@Schema({ timestamps: true })
export class JobTitle {

    @Prop({ required: true ,unique:true})
    MOHRE: string;
    @Prop({ required: true ,unique:true})
    ENSCOCode: string;
    
    @Prop({ required: true ,unique:true})
    jobTitle: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: string;

    @Prop({default : false})
  deleted: boolean;
  
}

export const JobTitleSchema = SchemaFactory.createForClass(JobTitle);