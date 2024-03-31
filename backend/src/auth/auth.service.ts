import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'schemas/user.schema';
import { LoginUserDto } from './dtos/login.dto';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class AuthService {
    constructor(@InjectModel (User.name) private userModel: Model<User>, private jwtService: JwtService) {}

    async signIn(loginData: LoginUserDto): Promise<any> {
        const user: User = await this.userModel.findOne({email:loginData.email});
    
        if (user) {
          // Compare hashed passwords
          const isPasswordValid = await bcrypt.compare(loginData.password, user.password);
          if (isPasswordValid) {
            // Passwords match, return user without password
            const payload = { userId: user._id, userEmail: user.email, role: user.role };
            return {
                message : "login successfully",
                token: await this.jwtService.signAsync(payload),
                userId: user._id,
                image: user.avatar
            };
          }
        }
        throw new HttpException("invalid email or password" , HttpStatus.CONFLICT );
      }
}
