import { Controller, Get, Post, Body } from '@nestjs/common';
import { AlertsService } from './alerts.service';


@Controller('alert')
export class AlertsController {
  constructor(private readonly alertsService: AlertsService) {}

  @Post()
  create(@Body() createAlertDto: object) {
    return this.alertsService.create(createAlertDto);
  }

  @Get()
  findAll() {
    return this.alertsService.findAll();
  }

}
