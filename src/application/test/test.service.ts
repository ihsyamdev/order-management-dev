import { Inject, Injectable } from "@nestjs/common"
import { Test } from "src/domain/entities/test.entity"
import { TestRepositoryInterface } from "src/domain/repositories/test.repository.interface"

@Injectable()
export class TestService {
  constructor(
    @Inject('TestRepositoryInterface')
    private readonly testRepository: TestRepositoryInterface
  ) {}

  async create(test: Test): Promise<Test> {
    return await this.testRepository.create(test)
  }

  async findOne(id: string): Promise<Test> {
    return await this.testRepository.findOne(id)
  }

  async findAll(): Promise<Test[]> {
    return await this.testRepository.findAll()
  }
}