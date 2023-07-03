import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from "@nestjs/common"
import { v4 as uuid } from 'uuid'
import { UserService } from "../user.service"
import { User } from "src/modules/user/entities/user.entity"
import { UserCreateArgs } from "src/modules/user/entities/user.entity"
import { customAlphabet } from 'nanoid'

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService
  ) {}

  @Post()
  async create(@Body() data: UserCreateArgs) {
    var wkid = uuid();
    var wkshortId = customAlphabet(wkid,10)();
    const user: User = {
      id: wkid,
      shortId: wkshortId,
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

  @Patch()
  async update(@Body() data: User) {
    const user: User = {
      id: data.id,
      shortId: data.shortId,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      active: data.active,
      createdAt: data.createdAt,
      createdBy: data.createdBy,
      updatedAt: new Date(),
      updatedBy: data.updatedBy
    }
    const updateUser = await this.userService.update(user)
    return {
      statusCode: HttpStatus.OK,
      item: {
        updateUser
      }
    }
  }

  @Delete()
  async deleteOne(@Body() data: User) {
    const user: User = {
      id: data.id,
      shortId: data.shortId,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      active: false,
      createdAt: data.createdAt,
      createdBy: data.createdBy,
      updatedAt: new Date(),
      updatedBy: data.updatedBy
    }
    const updateUser = await this.userService.update(user)
    return {
      statusCode: HttpStatus.OK,
      item: {
        updateUser
      }
    }
  }

}