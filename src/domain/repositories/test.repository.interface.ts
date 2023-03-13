import { Test,TestHead } from "../entities/test.entity"

export interface TestRepositoryInterface {
  create(test: Test): Promise<Test>
  findOne(Id: string): Promise<Test>
  findAll(): Promise<Test[]>
}

export interface TestHeadRepositoryInterface {
    create(test: TestHead): Promise<TestHead>
  }