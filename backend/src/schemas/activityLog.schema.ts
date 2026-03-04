import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';

export type ActivityLogDocument = HydratedDocument<ActivityLog>;

@Schema({ timestamps: true })
export class ActivityLog {
    
    @Prop({ required: true })
    action: string;

    @Prop()
    route: string;

    @Prop({type: mongoose.Types.ObjectId})
    id : ObjectId

    @Prop()
    ownerType: string;

    @Prop({ type: mongoose.Types.ObjectId, ref: 'User'})
    userId: ObjectId

    @Prop()
    userName:string 

   
}

export const ActivityLogSchema = SchemaFactory.createForClass(ActivityLog);