import { Body, Controller, Get, HttpStatus, Param, Post } from "@nestjs/common"
import { v4 as uuid } from 'uuid'
import { UserService } from "./user.service"
import { User } from "src/domain/entities/user.entity"
import { UserCreateArgs } from "src/domain/entities/user.entity"

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService
  ) {}

  @Get()
  async findAll() {
    const users = await this.userService.findAll()
    return {
      statusCode: HttpStatus.OK,
      items: {
        users
      }
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.userService.findOne(id)
    return {
      statusCode: HttpStatus.OK,
      item: {
        user
      }
    }
  }

  @Post()
  async create(@Body() data: UserCreateArgs) {
    const user: User = {
      id: uuid(),
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      active: true,
      createdAt: new Date(),
      createdBy: data.createdBy,
      updatedAt: new Date(),
      updatedBy: data.updatedBy
    }

    const createdUser = await this.userService.create(user)
    return {
      statusCode: HttpStatus.CREATED,
      item: {
        createdUser
      }
    }

  }

}