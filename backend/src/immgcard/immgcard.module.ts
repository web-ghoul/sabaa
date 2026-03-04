import { Module } from '@nestjs/common';
import { ImmgcardService } from './immgcard.service';
import { ImmgcardController } from './immgcard.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { IMMGCard, IMMGCardSchema } from '../schemas/IMMGCard.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: IMMGCard.name, schema: IMMGCardSchema },
    ]),
  ],
  controllers: [ImmgcardController],
  providers: [ImmgcardService],
})
export class ImmgcardModule {}
