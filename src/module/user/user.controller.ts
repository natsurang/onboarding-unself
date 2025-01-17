import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserUsecase } from './usecases/user.usecase';
import { UserResDTO } from './usecases/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly UserUsecase: UserUsecase) {}

  @Get(':id')
  public async getUser(@Param('id') id: string): Promise<UserResDTO> {
    return this.UserUsecase.getUser(id);
  }

  @Post()
  public async createUser(@Body() user: UserResDTO): Promise<UserResDTO> {
    return this.UserUsecase.createUser(user);
  }
  @Put(':id')
  public async updateUser(
    @Param('id') id: string,
    @Body() user: UserResDTO,
  ): Promise<UserResDTO> {
    return this.UserUsecase.updateUser(id, user);
  }
  @Delete(':id')
  public async deleteUser(@Param('id') id: string): Promise<UserResDTO> {
    return this.UserUsecase.deleteUser(id);
  }
}
