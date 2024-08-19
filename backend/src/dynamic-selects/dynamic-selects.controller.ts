import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { DynamicSelectsService } from './dynamic-selects.service';

@Controller(['dynamic-selector', 'selectors'])
export class DynamicSelectsController {
  constructor(private readonly dynamicSelectsService: DynamicSelectsService) {}

  @Post()
  create(@Body() body: any, @Query('selector') selector: string) {
    return this.dynamicSelectsService.create(body, selector);
  }

  @Get()
  findAll(@Query('selector') selector: string) {
    return this.dynamicSelectsService.findAll(selector);
  }
}
