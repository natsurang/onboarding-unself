import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserDL } from './user.dl';
import { userFactory } from './user.factory';

@Injectable()
export class UserDAL {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {
    for (let i = 0; i < 5; i++) {
      this.create(userFactory());
    }
  }

  async getById(id: string): Promise<UserDL> {
    const entity = await this.userRepository.findOneBy({ id });
    if (!entity) throw new NotFoundException('User not found');
    return this.toDataLayer(entity);
  }

  async create(userDL: UserDL): Promise<UserDL> {
    const entity = this.userRepository.create(userDL);
    const result = await this.userRepository.save(entity);
    return this.toDataLayer(result);
  }

  async update(id: string, userDL: UserDL): Promise<UserDL> {
    const entity = await this.userRepository.findOneBy({ id });
    if (!entity) throw new NotFoundException('User not found');
    this.userRepository.update(entity, userDL);
    return this.toDataLayer(entity);
  }

  async delete(id: string): Promise<UserDL> {
    const entity = await this.userRepository.findOneBy({ id });
    if (!entity) throw new NotFoundException('User not found');
    this.userRepository.remove(entity);
    return this.toDataLayer(entity);
  }

  toDataLayer(entity: UserEntity): UserDL {
    return {
      id: entity.id,
      firstName: entity.firstName,
      lastName: entity.lastName,
      email: entity.email,
      phoneNumber: entity.phoneNumber,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
