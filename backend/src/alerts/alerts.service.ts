import { ActivitiesService } from './../activities/activities.service';
import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

import fs from 'fs/promises';
@Injectable()
export class AlertsService {
  constructor(private activitiesService:ActivitiesService) {}
  private filePath = __dirname + "../../../../data/alerts.json";
  async create(createAlertDto: object) {
    try {
      // Convert the object to a JSON string
      
      const jsonString = JSON.stringify(createAlertDto, null, 2);
  
      // Write the JSON string to the file
      const res = await fs.writeFile(this.filePath, jsonString, 'utf-8');
      
      return res ; 
    } catch (error) {
      console.error('Error writing to file', error);
    }
  }

  async findAll() {
    const fileContent = await fs.readFile(this.filePath, 'utf-8');

    // Parse the JSON string into an object
    const data = JSON.parse(fileContent);

    // console.log('Object read from file successfully:', data);
    return data;
  }

  // @Cron('0 */2 * * *')
  // checkAlerts(){
    
    
  // }


}
