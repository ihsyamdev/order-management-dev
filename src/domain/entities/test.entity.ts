export interface TestCreateArgs {
    active: boolean
    order: string
    lineNo: string
    product: string
    quantity: string
    unitPrice: string
    amount: string
    remark: string
}

export class Test {
    constructor(
      public readonly id: string,
      public readonly active: boolean,
      public readonly order: string,
      public readonly lineNo: string,
      public readonly product: string,
      public readonly quantity: string,
      public readonly unitPrice: string,
      public readonly amount: string,
      public readonly remark: string,
      public readonly createdAt: Date,
      public readonly updatedAt: Date,
    ) { }
}

export interface TestHeadCreateArgs {
    active: boolean
    orderDate: Date
    sales: string
    customer: string
    approver: string
    approvalStage: string
    confirmed: string
    remark:string
}

export class TestHead {
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

  export interface TestArrayCreateArgs {
    active: boolean
    orderDate: Date
    sales: string
    customer: string
    approver: string
    approvalStage: string
    confirmed: string
    remark:string
    items:[{
      active: boolean
      order: string
      lineNo: string
      product: string
      quantity: string
      unitPrice: string
      amount: string
      remark: string
    }]
  }

  export class TestArray {
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
      public readonly items: [{
         id: string,
         active: boolean,
         order: string,
         lineNo: string,
         product: string,
         quantity: string,
         unitPrice: string,
         amount: string,
         remark: string,
         createdAt: Date,
         updatedAt: Date,
      }]
    ) { }
  }