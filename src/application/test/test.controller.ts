import { Body, Controller, Get, HttpStatus, Param, Post } from "@nestjs/common"
import { v4 as uuid } from 'uuid'
import { TestService } from "./test.service"
import { TestHeadService } from "./testHead.service"
import { Test, TestArray, TestHead } from "src/domain/entities/test.entity"
import { TestCreateArgs, TestArrayCreateArgs} from "src/domain/entities/test.entity"
//import { PrismaService } from "../../infrastructure/prisma/prisma.service"
import { Prisma, PrismaClient } from "@prisma/client"


@Controller('Test')
export class TestController {
  constructor(
    private testService: TestService,
    private testHeadService: TestHeadService,
    //private prisma: PrismaService
  ) {}

  @Get()
  async findAll() {
    const tests = await this.testService.findAll()
    return {
      statusCode: HttpStatus.OK,
      items: {
        tests
      }
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const test = await this.testService.findOne(id)
    return {
      statusCode: HttpStatus.OK,
      item: {
        test
      }
    }
  }

  @Post()
  async create(@Body() data: TestArrayCreateArgs) {
    const prisma = new PrismaClient()
    await prisma.$transaction(async function check(prisma) {
    //}(prisma) => {
    var wkid = uuid();
    const testHead = {
        id: wkid,
        active: true,
        orderDate: data.orderDate,
        sales: data.sales,
        customer: data.customer,
        approver: data.approver,
        approvalStage: data.approvalStage,
        confirmed: data.confirmed,
        remark:data.remark,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    await this.testHeadService.create(testHead)

    const testcount = data.items
    //wkid = null;
    for (let i =0; i < testcount.length; i++ ){
        let test = {
          id: uuid(),
          active: true,
          order: wkid,
          lineNo: data.items[i].lineNo,
          product: data.items[i].product,
          quantity: data.items[i].quantity,
          unitPrice: data.items[i].unitPrice,
          amount: data.items[i].amount, 
          remark: data.items[i].remark,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
          //明細テーブルへの登録
        await this.testService.create(test)
    }

    // return await this.prisma.$transaction(async (test) => {
    //   this.testHeadService.create(testHead);

    // },

    //   let createdTest = await this.testService.create(test)
    //   return {
    //     statusCode: HttpStatus.CREATED,
    //     item: {
    //       createdTest
    //     }
    //    }
 }
    )
//   async create(@Body() data: TestArrayCreateArgs) {

//     var wkid = uuid();
//     const testHead = {
//       id: wkid,
//       active: true,
//       orderDate: data.orderDate,
//       sales: data.sales,
//       customer: data.customer,
//       approver: data.approver,
//       approvalStage: data.approvalStage,
//       confirmed: data.confirmed,
//       remark:data.remark,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     };

//     this.testHeadService.create(testHead);
//     const testcount = data.items
//     for (let i =0; i < testcount.length; i++ ){
//     let test = {
//       id: uuid(),
//       active: true,
//       order: wkid,
//       lineNo: data.items[i].lineNo,
//       product: data.items[i].product,
//       quantity: data.items[i].quantity,
//       unitPrice: data.items[i].unitPrice,
//       amount: data.items[i].amount, 
//       remark: data.items[i].remark,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     }
//       //明細テーブルへの登録
//     this.testService.create(test)
//     //   let createdTest = await this.testService.create(test)
//     //   return {
//     //     statusCode: HttpStatus.CREATED,
//     //     item: {
//     //       createdTest
//     //     }
//     //    }
//       }
//  }
}}