import { Injectable } from '@nestjs/common';
import fs from 'fs/promises';

@Injectable()
export class CustomizeService {
  private filePath = __dirname + '/../data/customize.json';
  async create(createCustomizeDto: object, logo?: Express.Multer.File) {
    try {
      // Convert the object to a JSON string
      createCustomizeDto['logo'] = logo ? logo.path : undefined;
      if (createCustomizeDto['logo'] == undefined) {
        delete createCustomizeDto['logo'];
        const { logo } = await this.findAll();
        createCustomizeDto['logo'] = logo;
      }

      const jsonString = JSON.stringify(createCustomizeDto, null, 2);

      await fs.writeFile(this.filePath, jsonString, 'utf-8');

      return createCustomizeDto;
    } catch (error) {
      console.error('Error writing to file', error);
    }
  }

  async findAll() {
    try {
      const fileContent = await fs.readFile(this.filePath, 'utf-8');

      // Parse the JSON string into an object
      const data = JSON.parse(fileContent);

      // console.log('Object read from file successfully:', data);
      return data;
    } catch (err) {
      return await this.create({
        'companyName ': 'Sabaa',
        logo: 'logo.png',
        mobile: '01013714763',
        websiteLink: 'https://sabaatyping.com/',
        officialEmail: 'amr006.dev@gmail.com',
      });
    }
  }
}
