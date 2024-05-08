import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ActivityLogDocument = HydratedDocument<ActivityLog>;

@Schema({ timestamps: true })
export class ActivityLog {
    
    @Prop({ required: true })
    action: string;

    @Prop()
    type: string;

    @Prop({type : Object})
    data : object

}

export const ActivityLogSchema = SchemaFactory.createForClass(ActivityLog);