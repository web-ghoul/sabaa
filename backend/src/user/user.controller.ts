import { Body, Controller, Delete, FileTypeValidator, Get, MaxFileSizeValidator, Param, ParseFilePipe, Post, Put, Query, UploadedFile, UseGuards, UseInterceptors, ValidationPipe} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserService } from './user.service';
import { ObjectId } from 'mongoose';
import { AuthGuard } from 'src/auth/auth.guard';
import { Express } from 'express'
import { FileInterceptor } from '@nestjs/platform-express';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/enum/role.enum';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'schemas/user.schema';

// import { Request } from 'express';
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
   ) {
    // console.log(this.configService.get('EMAIL', { infer: true }));
  }

  
  @Get()
  listUsers(@Query('limit') limit: number, @Query('page') page: number, @Query('search') search: string, @Query('sort') sort: string, @Query('status') status: string, @Query('role') role: string, @Query('deleted') deleted: boolean): Promise<User[]> {
    return this.userService.listUsers(limit, page, search,sort,status,role,deleted);
  }

  @UseGuards(AuthGuard)
  @Post()
  @UseInterceptors(FileInterceptor('avatar'))
  async createUser(@Body(ValidationPipe) userData: CreateUserDto, @UploadedFile(new ParseFilePipe({validators: [new MaxFileSizeValidator({ maxSize: 10000000 }),
    new FileTypeValidator({ fileType: 'image' })],fileIsRequired: false})) file: Express.Multer.File){
    //DTO ==> data transfer object like schema for the 
    
    
    return this.userService.createUser(userData,file);
  }

  @UseGuards(AuthGuard)
  @Put(":id")
  @UseInterceptors(FileInterceptor('avatar'))
  updateUser(@Param("id") id: ObjectId, @Body(ValidationPipe) userData: UpdateUserDto, @UploadedFile(new ParseFilePipe({validators: [new MaxFileSizeValidator({ maxSize: 10000000 }),
    new FileTypeValidator({ fileType: 'image' })],fileIsRequired: false})) file: Express.Multer.File){
    return this.userService.updateUser(userData,file,id);
  }

  @UseGuards(AuthGuard)
  @Get("counters")
  userCounters(){
    return this.userService.userCounters();
  }

  @Roles(Role.Admin)
  @UseGuards(AuthGuard)
  @Get(":id")
  displayUser(@Param("id") id: ObjectId): Promise<User>{
    return this.userService.displayUser(id);
  }

  @UseGuards(AuthGuard)
  @Delete(":id")
  deleteUser(@Param("id") id : ObjectId){
    return this.userService.deleteUser(id);
  }

 

}
