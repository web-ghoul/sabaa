import { Injectable } from '@nestjs/common';
import fs from 'fs/promises';

@Injectable()
export class DynamicSelectsService {
  private baseFilePath = __dirname + `../../../../src/data/`;
  async create(createAlertDto: object, selector: string) {
    try {
      // Convert the object to a JSON string
      const filePath = this.baseFilePath + selector + '.json';

      const jsonString = JSON.stringify(createAlertDto, null, 2);

      // Write the JSON string to the file
      const res = await fs.writeFile(filePath, jsonString, 'utf-8');

      return res;
    } catch (error) {
      console.error('Error writing to file', error);
    }
  }

  async findAll(selector: string) {
    const filePath = this.baseFilePath + selector + '.json';
    const fileContent = await fs.readFile(filePath, 'utf-8');

    // Parse the JSON string into an object
    const data = JSON.parse(fileContent);

    // console.log('Object read from file successfully:', data);
    return data;
  }
}
