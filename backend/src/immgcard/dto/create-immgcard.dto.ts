import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEnum, IsString } from 'class-validator';

export class CreateImmgcardDto {
    @ApiProperty()
    @IsString()
    _id: string;

    @ApiProperty()
    @IsEnum(['GDRFA', 'ECHANEL', 'ECHANELPersonal'])
    cardType: string;

    @ApiProperty()
    @IsString()
    userName: string;

    @ApiProperty()
    @IsString()
    password: string;

    @ApiProperty()
    @IsString()
    nogodiNewUser: string;

    @ApiProperty()
    @IsString()
    nogodiRegNo: string;

    @ApiProperty()
    @IsString()
    nogodiNewPass: string;

    @ApiProperty()
    @IsString()
    nogodiWallet: string;

    @ApiProperty()
    @IsString()
    nogodiPassword: string;

    @ApiProperty()
    @IsString()
    pinToken: string;

    @ApiProperty()
    @IsString()
    dataCreate: string;

    @ApiProperty()
    @IsDate()
    eChanelExpiry: Date;

    @ApiProperty()
    @IsString()
    type: string;

    @ApiProperty()
    @IsString()
    status: string;

    @ApiProperty()
    @IsString()
    customerName: string;

    @ApiProperty()
    @IsString()
    customerNameAr: string;

    @ApiProperty()
    @IsString()
    gender: string;

    @ApiProperty()
    @IsString()
    nationality: string;

    @ApiProperty()
    @IsString()
    emiratesId: string;

}
