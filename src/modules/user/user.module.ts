import { Module } from "@nestjs/common"
import { PrismaModule } from "src/infrastructure/prisma/prisma.module"
import { UserService } from "./user.service"
import { UserPrismaRepository } from "src/modules/user/repositories/user.prisma.repository"
import { UserController } from "./controllers/user.controller"

@Module({
  imports: [PrismaModule],
  providers: [
    UserService,
    {
      provide: 'UserRepositoryInterface',
      useClass: UserPrismaRepository
    }
  ],
  controllers: [UserController],
})

export class UserModule { }
