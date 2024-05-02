import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'schemas/user.schema';
import * as userData from './data/users.json';
@Injectable()
export class AppService implements OnApplicationBootstrap {

  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  getHello(): object {
    const treasureMap = {
      message: "🗺️ Welcome to the Treasure Hunt API! 🏴‍☠️",
      clues: [
        "🌴 Follow the path of 'api/' to start the journey.",
        "🦜 Look out for the 'X marks the spot' at each endpoint!",
        "⚓ More treasures await as you navigate the API seas!",
      ],
      disclaimer: "Remember, only true adventurers can unlock the secrets...",
      documentation: "/api-docs",
    };
    return treasureMap;
  }

  onApplicationBootstrap() {
    
    this.seedData();
  }

  private async seedData() {
    await this.seedUsers();
  }

  private async seedUsers() {
    const usersCount = await this.userModel.countDocuments();
    if (usersCount === 0) {
      // If users collection is empty, seed users
       // Assuming you have a JSON file with user data
      try {
        await this.userModel.create(userData);
        console.log('Users seeded successfully!');
      } catch (error) {
        console.error('Error seeding users:', error);
      }
    } else {
      console.log('Users collection is not empty. Skipping seeding.');
    }
  }


}
