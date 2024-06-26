import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ImmgcardService } from './immgcard.service';
import { CreateImmgcardDto } from './dto/create-immgcard.dto';
import { UpdateImmgcardDto } from './dto/update-immgcard.dto';
import { IMMGCard } from 'schemas/IMMGCard.schema';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Immgcard')
@Controller('immgcard')
export class ImmgcardController {
  constructor(private readonly immgcardService: ImmgcardService) {}

  @Post()
  create(@Body() createImmgcardDto: CreateImmgcardDto) {
    return this.immgcardService.create(createImmgcardDto);
  }

  @Get()
  findAll(@Query('limit') limit: number, @Query('page') page: number, @Query('search') search: string, @Query('cardType') cardType: string,@Query('select') selectFields: string[]): Promise <IMMGCard[]> {
    return this.immgcardService.findAll(limit,page,search,selectFields,cardType);
  }
  @Get("counters")
  getCounters(@Query('cardType') cardType: string){
    return this.immgcardService.getCounters(cardType);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.immgcardService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImmgcardDto: UpdateImmgcardDto) {
    return this.immgcardService.update(id, updateImmgcardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.immgcardService.remove(id);
  }
}
