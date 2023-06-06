import { Inject, Injectable } from "@nestjs/common"
import { User } from "src/domain/entities/user.entity"
import { UserRepositoryInterface } from "src/domain/repositories/user.repository.interface"

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepositoryInterface')
    private readonly userRepository: UserRepositoryInterface
  ) {}

  async create(user: User): Promise<User> {
    return await this.userRepository.create(user)
  }

  async findOne(userId: string): Promise<User> {
    return await this.userRepository.findOne(userId)
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll()
  }

  async update(user: User): Promise<User> {
    return await this.userRepository.update(user)
  }
  
  async deleteOne(user: User): Promise<User> {
    return await this.userRepository.deleteOne(user)
  }  
}
