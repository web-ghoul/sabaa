import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  Put,
  Query,
  Res,
  UploadedFile,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserService } from './user.service';
import { ObjectId } from 'mongoose';

import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/enum/role.enum';
import { ApiTags } from '@nestjs/swagger';
import { User } from '../schemas/user.schema';
import { Response } from 'express';
import { LogInterceptor } from 'src/utils/interceptors/logActivities.interceptor';
import { ActivityLog } from 'src/utils/interceptors/logAcitivities.decorator';
import { User as UserDecorator } from 'src/utils/decorators/User.decorator';

// import { Request } from 'express';
@ApiTags('User')
@Controller(['user', 'users'])
export class UserController {
  constructor(private readonly userService: UserService) {
    // console.log(this.configService.get('EMAIL', { infer: true }));
  }

  @Get()
  listUsers(
    @Query('limit') limit: number,
    @Query('page') page: number,
    @Query('search') search: string,
    @Query('sort') sort: string,
    @Query('status') status: string,
    @Query('role') role: string,
    @Query('deleted') deleted: boolean,
  ): Promise<User[]> {
    return this.userService.listUsers(
      limit,
      page,
      search,
      sort,
      status,
      role,
      deleted,
    );
  }

  @Post()
  @UseInterceptors(LogInterceptor)
  @ActivityLog({ action: 'create' })
  @UseInterceptors(FileInterceptor('avatar'))
  async createUser(
    @UserDecorator('id') user,
    @Body(ValidationPipe) userData: CreateUserDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 10000000 }),
          new FileTypeValidator({ fileType: 'image' }),
        ],
        fileIsRequired: false,
      }),
    )
    file: Express.Multer.File,
  ) {
    //DTO ==> data transfer object like schema for the

    return this.userService.createUser(userData, file, user);
  }

  @Put(':id')
  @UseInterceptors(LogInterceptor)
  @ActivityLog({ action: 'update' })
  @UseInterceptors(FileInterceptor('avatar'))
  updateUser(
    @Param('id') id: ObjectId,
    @Body(ValidationPipe) userData: UpdateUserDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 10000000 }),
          new FileTypeValidator({ fileType: 'image' }),
        ],
        fileIsRequired: false,
      }),
    )
    file: Express.Multer.File,
  ) {
    return this.userService.updateUser(userData, file, id);
  }

  @Get('counters')
  userCounters() {
    return this.userService.userCounters();
  }

  @Get('export')
  export(@Res() res: Response, @Query('fileName') fileName: string) {
    return this.userService.export(res, fileName);
  }

  @Roles(Role.Admin)
  @Get(':id')
  displayUser(@Param('id') id: ObjectId) {
    return this.userService.displayUser(id);
  }

  @Delete(':id')
  // @UseInterceptors(LogInterceptor)
  // @ActivityLog({action: "delete"})
  deleteUser(@Param('id') id: ObjectId) {
    return this.userService.deleteUser(id);
  }
}
