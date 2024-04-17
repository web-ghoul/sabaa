import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type OwnerDocument = HydratedDocument<Owner>;

@Schema({ timestamps: true })
export class Owner {
  
    @Prop({required:true})
    uid: string; //not unique 

    @Prop()
    name: string;
    
    @Prop()
    nameAr: string;

    @Prop()
    avatar: string;

    @Prop()
    dob: Date;

    @Prop({ type: String, ref: 'Nationality', required: true })
    idNationality: string;
  
    @Prop()
    nationality: string;

    @Prop()
    phone: string;

    @Prop()
    email: string;

    @Prop()
    remarks: string;

    @Prop()
    state: string;

    @Prop()
    address: string;

    // @Prop()
    // proCode: string[]; //array of Pro

    @Prop({default: false})
    proCode: boolean;

    @Prop()
    emiratesId: string;

    @Prop({unique: true})
    personCode: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: string;

    @Prop()
  deleted: boolean;
  
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);