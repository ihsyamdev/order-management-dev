import { Module } from "@nestjs/common"
import { PrismaModule } from "src/infrastructure/prisma/prisma.module"
import { TestService } from "./test.service"
import { TestHeadService } from "./testHead.service"
import { TestPrismaRepository } from "src/infrastructure/prisma/test.prisma.repository"
import { TestHeadPrismaRepository } from "src/infrastructure/prisma/testHead.prisma.repository"
import { TestController } from "./test.controller"

@Module({
  imports: [PrismaModule],
  providers: [
    TestService,
    {
      provide: 'TestRepositoryInterface',
      useClass: TestPrismaRepository
    },
    TestHeadService,
    {
      provide: 'TestHeadRepositoryInterface',
      useClass: TestHeadPrismaRepository
    }
  ],
  controllers: [TestController],
})

export class TestModule { }
