import { Decimal } from "@prisma/client/runtime"

export interface OrderCreateArgs {
  active: boolean
  orderDate: Date
  sales: string
  customer: string
  approver: string
  approvalStage: string
  confirmed: string
  remark:string
}

export interface OrderArrayCreateArgs {
    active: boolean
    orderDate: Date
    sales: string
    customer: string
    approver: string
    approvalStage: string
    confirmed: string
    remark:string
    items:{
      active: boolean
      lineNo: number
      product: string
      quantity: number
      unitprice: Decimal
      amount: Decimal
      remark: string
    }
  }

  export interface OrderDetailCreateArgs {
    active: boolean
    order: string
    lineNo: number
    product: string
    quantity: number
    unitprice: Decimal
    amount: Decimal
    remark: string
  }
  
  export class OrderArray {
    constructor(
      public readonly id: string,
      public readonly active: boolean,
      public readonly orderDate: Date,
      public readonly sales: string,
      public readonly customer: string,
      public readonly approver: string,
      public readonly approvalStage: string,
      public readonly confirmed: string,
      public readonly remark: string,
      public readonly createdAt: Date,
      public readonly updatedAt: Date,
      public readonly items: {
         id: string,
         active: boolean,
         order: string,
         lineNo: number,
         product: string,
         quantity: number,
         unitPrice: Decimal,
         amount: Decimal,
         remark: string,
         createdAt: Date,
         updatedAt: Date,
      }
    ) { }
  }

  export class Order {
    constructor(
      public readonly id: string,
      public readonly active: boolean,
      public readonly orderDate: Date,
      public readonly sales: string,
      public readonly customer: string,
      public readonly approver: string,
      public readonly approvalStage: string,
      public readonly confirmed: string,
      public readonly remark: string,
      public readonly createdAt: Date,
      public readonly updatedAt: Date,
    ) { }
  }
  
  export class OrderDetail {
    constructor(
      public readonly id: string,
      public readonly active: boolean,
      public readonly order: string,
      public readonly lineNo: number,
      public readonly product: string,
      public readonly quantity: number,
      public readonly unitPrice: Decimal,
      public readonly amount: Decimal,
      public readonly remark: string,
      public readonly createdAt: Date,
      public readonly updatedAt: Date,
    ) { }
  }