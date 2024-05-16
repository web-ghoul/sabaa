import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsMongoId, IsOptional, IsString } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateCompanyDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    _id: string;
  
    @ApiProperty()
    @IsString()
    name: string;
    
    @ApiProperty()
    @IsString()
    nameAr: string;

    @ApiProperty()
    @IsString()
    echannelExpiryDate: string;

    @ApiProperty()
    @IsString()
    logo: string;

    @ApiProperty()
    @IsString()
    status: string;

    @ApiProperty()
    @IsString()
    state: string;

    @ApiProperty()
    @IsString()
    address: string;

    @ApiProperty()
    @IsString()
    phone: string;

    @ApiProperty()
    @IsString()
    establishmentType: string;

    @ApiProperty()
    @IsString()
    molCode: string;


    @ApiProperty()
    @IsString()
    molCategory: string;

    @ApiProperty()
    @IsString()
    whatsAppNo: string;

    @ApiProperty()
    @IsString()
    mobileNo: string;

    @ApiProperty()
    @IsString()
    website: string;

    @ApiProperty()
    @IsString()
    trn: string;

    @ApiProperty()
    @IsString()
    remarks: string;

    @ApiProperty({ type: [String] })
    @IsString()
    proCode: string[];

    @ApiProperty({ type: [String] })
    @IsString()
    ownerId: string[];

    @ApiProperty()
    @IsString()
    category: string;

    @ApiProperty()
    @IsString()
    licenseNo: string;

    @ApiProperty()
    @IsString()
    immgCardNo: string; // ref this

    @ApiProperty()
    @IsString()
    country: string;

    @ApiProperty()
    @IsString()
    zipCode: string;

    @ApiProperty()
    @IsString()
    licenseIssuePlace: string;

    @ApiProperty()
    @IsDate()
    immgCardExpiry: Date;

    @ApiProperty()
    @IsDate()
    licenseIssueDate: Date;

    @ApiProperty()
    @IsDate()
    licenseExpiryDate: Date;

    @ApiProperty({ required: false })
    @IsMongoId()
    @IsOptional()
    user?: ObjectId;
}
