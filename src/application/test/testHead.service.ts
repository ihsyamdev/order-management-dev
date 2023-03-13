import { Inject, Injectable } from "@nestjs/common"
import { Test, TestHead } from "src/domain/entities/test.entity"
import { TestHeadRepositoryInterface } from "src/domain/repositories/test.repository.interface"

@Injectable()
export class TestHeadService {
    constructor(
      @Inject('TestHeadRepositoryInterface')
      private readonly testHeadRepository: TestHeadRepositoryInterface
    ) {}
  
    async create(testHead: TestHead): Promise<TestHead> {
      return await this.testHeadRepository.create(testHead)
    }
  }