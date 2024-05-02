import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type JobTitleDocument = HydratedDocument<JobTitle>;

@Schema({ timestamps: true })
export class JobTitle {

    @Prop({ required: true})
    MOHRE: string;
    @Prop({ required: true})
    ENSCOCode: string;
    
    @Prop({ required: true})
    jobTitle: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: string;

    @Prop({default : false})
    deleted: boolean;
  
}

export const JobTitleSchema = SchemaFactory.createForClass(JobTitle);

JobTitleSchema.index({ MOHRE: 1, deleted: 1 }, { unique: true, partialFilterExpression: { deleted: false } });
JobTitleSchema.index({jobTitle : 1 , deleted: 1 } , {unique : true, partialFilterExpression : {deleted : false}})