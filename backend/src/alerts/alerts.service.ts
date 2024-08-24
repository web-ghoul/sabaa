import { InjectModel } from '@nestjs/mongoose';
import { ActivitiesService } from './../activities/activities.service';
import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

import fs from 'fs/promises';
import { Model } from 'mongoose';
import { Transaction } from 'schemas/transaction.schema';
import { ActivityLog } from 'schemas/activityLog.schema';
@Injectable()
export class AlertsService {
  constructor(private activitiesService:ActivitiesService ,
    @InjectModel('Transaction') private transactionModel: Model<Transaction>,
    @InjectModel(ActivityLog.name) private activityModel: Model<ActivityLog>,
  ) {}
  private filePath = __dirname + "/../data/alerts.json";
  async create(createAlertDto: object) {
    try {
      // Convert the object to a JSON string
      
      const jsonString = JSON.stringify(createAlertDto, null, 2);
  
      // Write the JSON string to the file
      await fs.writeFile(this.filePath, jsonString, 'utf-8');
      
      return createAlertDto ; 
    } catch (error) {
      console.error('Error writing to file', error);
    }
  }

  async findAll() {
    try{
      const fileContent = await fs.readFile(this.filePath, 'utf-8');

      // Parse the JSON string into an object
      const data = JSON.parse(fileContent);
  
      // console.log('Object read from file successfully:', data);
      return data;
    }catch(err)
    {
      await this.create({
        "passportExpiry": 50,
        "workPermitExpiryDate": 50,
        "visitExpiryDate": 50,
        "changeStatusDate": 50,
        "tawjeehDate": 50,
        "lcExpiryDate": 50,
        "residenceExpiryDate": 50
      })   
    }
    
  }

  async checkExpiry(field: string, duration: Date) {
    const data = await this.transactionModel.find({ [field]: { $lte: duration } });
    
    if (data.length > 0) {

      
      await Promise.all(
        data.map(async (e) => {
          
          
          await this.activityModel.create({
            action: `${field} About to be Expired`,
            id: e._id,
            route: "alerts"
          });
        })
      );
    }
  }
  
  @Cron('* */2 * * *')
  async checkAlerts() {
    const durations = await this.findAll();
    
    const currentDate = new Date();
  
    const expiryPromises = Object.keys(durations).map(async (key) => {
      const expiryDate = new Date(currentDate);
      expiryDate.setDate(expiryDate.getDate() + durations[key]);
      await this.checkExpiry(key, expiryDate);
    });
  
    await Promise.all(expiryPromises);
  }
  

  


}
