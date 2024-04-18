import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'schemas/user.schema';
import { CreateUserDto } from './dtos/create-user.dto';
import { Model, ObjectId, Schema } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { Express } from 'express'
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UserService {
  
  constructor(@InjectModel(User.name) private userModel: Model<User> ) {}

  async createUser(createUserDto: CreateUserDto ,file: Express.Multer.File): Promise<object> {
    //const secretPassword = this.configService.get<string>('SECRET_PASSWORD');
    // Hash the password
    const emailIsTaken = await this.userModel.findOne({email: createUserDto.email});
    if(emailIsTaken)
    {
      throw new HttpException('Email is already used', HttpStatus.FORBIDDEN);
    }
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10 );

    // Create a new user instance with the hashed password
    const createdUser = new this.userModel({
      ...createUserDto,
      avatar: file ? file.path : undefined,
      password: hashedPassword, // Replace plain password with hashed password
    });

    // Save the user to the database
    try{
      const user = await createdUser.save();

      return {message : "account created successfully" , user}

    }catch(err)
    {
      throw new HttpException("Error while creating user" , HttpStatus.FORBIDDEN);
    }
  }

  async updateUser(updateUserDto: UpdateUserDto ,file: Express.Multer.File, id : ObjectId): Promise<object> {
    //const secretPassword = this.configService.get<string>('SECRET_PASSWORD');
    // Hash the password
    const emailIsTaken = await this.userModel.findOne({email: updateUserDto.email});
    if(emailIsTaken && id != emailIsTaken._id)
    {
      throw new HttpException('Email is already used', HttpStatus.FORBIDDEN);
    }
    // Create a new user instance with the hashed password
    const updateUser = {
      ...updateUserDto,
      avatar: file ? file.path : undefined,
    };
    try{
      await this.userModel.findByIdAndUpdate(id,updateUser)

    }catch(err)
    {
      throw new HttpException("Error while updating user" , HttpStatus.FORBIDDEN);
    }
    // Save the user to the database

    return {message : "account updated successfully"}
  }

  listUsers(limit: number, page: number, search:string,sortType:string,status:string = '',role:string = '', deleted: boolean = false): Promise<User[]> {

    const sort:any = {}
    if(sortType == "name_asc")
    {
      sort["name"] = 1; 
    }else
    {
      sort["createdAt"] = -1; 
    }
    const query = {
      name: { $regex: new RegExp(search, "i") },}

    status != '' ? query['status'] = status : null;
    role != '' ? query['role'] = role : null;
    deleted != false ? query['deleted'] = deleted : false;

    console.log(query)

    return this.userModel.find(query, "-password").limit(limit).skip(page*limit).sort(sort);
}
  displayUser(id: Schema.Types.ObjectId): Promise<User> {
    return this.userModel.findById(id);
  }
  findOne(email: string): Promise<User>{
    return this.userModel.findOne({email: email})
  }
  userCounters(): Promise<object> {
    return this.userModel.aggregate([
      {
        $group: {
          _id: "$role",
          count: { $sum: 1 },
        },
      },
    ]);
  }

  async deleteUser(id: ObjectId){
    try{
      await this.userModel.findByIdAndUpdate(id, {deleted: true});      
    }catch(err)
    {
      throw new HttpException("Error while deleting user" , HttpStatus.FORBIDDEN);
    }
    return  {message : "User deleted successfully"};
  }
}
