import { Injectable } from '@nestjs/common';
import { UserResDTO } from './user.dto';
import { UserService } from '../services/user.service';

@Injectable()
export class UserUsecase {
  constructor(private readonly userService: UserService) {}

  public async getUser(id: string): Promise<UserResDTO> {
    return this.userService.getUser(id);
  }

  public async createUser(user: UserResDTO): Promise<UserResDTO> {
    return this.userService.createUser(user);
  }

  public async updateUser(id: string, user: UserResDTO): Promise<UserResDTO> {
    return this.userService.updateUser(id, user);
  }

  public async deleteUser(id: string): Promise<UserResDTO> {
    return this.userService.deleteUser(id);
  }
}