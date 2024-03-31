import { Module } from '@nestjs/common';
import { NationalityService } from './nationality.service';
import { NationalityController } from './nationality.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Nationality, NationalitySchema } from 'schemas/nationality.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Nationality.name, schema: NationalitySchema }])],
  controllers: [NationalityController],
  providers: [NationalityService],
})
export class NationalityModule {}
