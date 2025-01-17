import { Injectable } from '@nestjs/common';
import { CreatUserDTO, UpdateUserDTO, UserResDTO } from '../usecases/user.dto';
import { UserDAL } from 'src/module/data-access-layer/user/user.dal';

@Injectable()
export class UserService {
  constructor(private readonly userDAL: UserDAL) {}

  public async getUser(id: string): Promise<UserResDTO> {
    return this.userDAL.getById(id);
  }

  public async createUser(user: CreatUserDTO): Promise<UserResDTO> {
    return this.userDAL.create(user);
  }

  public async updateUser(
    id: string,
    user: UpdateUserDTO,
  ): Promise<UserResDTO> {
    return this.userDAL.update(id, user);
  }

  public async deleteUser(id: string): Promise<UserResDTO> {
    return this.userDAL.delete(id);
  }
}