import { Injectable } from "@nestjs/common"
import { v4 as uuid } from "uuid"
import { UserRepositoryInterface } from "src/domain/repositories/user.repository.interface"
import { PrismaService } from "./prisma.service"
import { User } from "src/domain/entities/user.entity"

@Injectable()
export class UserPrismaRepository implements UserRepositoryInterface {
  constructor(private prisma: PrismaService) {}

  async create(user: User): Promise<User> {
    const createdUser = await this.prisma.user.create({
      data: {
        id: uuid(),
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        active: true,
        createdAt: new Date(),
        createdBy: user.createdBy,
        updatedAt: new Date(),
        updatedBy: user.updatedBy
      }
    })
    return new User(
      createdUser.id,
      createdUser.firstName,
      createdUser.lastName,
      createdUser.email,
      createdUser.active,
      createdUser.createdAt,
      createdUser.createdBy,
      createdUser.updatedAt,
      createdUser.updatedBy
    )
  }

  async findOne(userId: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        id: userId
      }
    })

    if (!user) return null

    return new User(
      user.id,
      user.firstName,
      user.lastName,
      user.email,
      user.active,
      user.createdAt,
      user.createdBy,
      user.updatedAt,
      user.updatedBy
    )
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany({})
  }
}
