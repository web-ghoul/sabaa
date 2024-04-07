import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type JobTitleDocument = HydratedDocument<JobTitle>;

@Schema({ timestamps: true })
export class JobTitle {
  
    @Prop({ required: true })
    _id: string;
    @Prop()
    ENSCOCode: string;
    
    @Prop()
    jobTitle: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: string;

    @Prop()
  deleted: boolean;
  
}

export const JobTitleSchema = SchemaFactory.createForClass(JobTitle);