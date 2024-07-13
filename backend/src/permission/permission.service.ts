import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Permission } from 'schemas/permissions.schema';
import { Model } from 'mongoose';

@Injectable()
export class PermissionService {
  constructor(@InjectModel(Permission.name) private permissionModel: Model<Permission>,){

  }
  create(createPermissionDto: CreatePermissionDto) {
    return this.permissionModel.create(createPermissionDto);
  }

  findAll() {
    return this.permissionModel.find().select('name _id');
  }

  findOne(id: string) {
    return this.permissionModel.findById(id);
  }

  findOneByName(name: string) {
    return this.permissionModel.findOne({name});
  }

  update(id: string, updatePermissionDto: UpdatePermissionDto) {
    return this.permissionModel.findByIdAndUpdate(id, updatePermissionDto, { new: true });
  }

  remove(id: string) {
    return this.permissionModel.deleteOne({ _id: id });
  }
}
