export interface OrderCreateArgs {
    active: boolean
    orderDate: Date,
    userId: string,
    customerId: string,
    approver: string,
    draftFlag: boolean,
    approvalStage: string,
    confirmed: string,
    createdBy: string
    updatedBy: string
}

export class Order {
    constructor(
      public readonly id: string,
      public readonly active: boolean,
      public readonly orderDate: Date,
      public readonly userId: string,
      public readonly customerId: string,      
      public readonly approver: string,          
      public readonly draftFlag: boolean,
      public readonly approvalStage: string,
      public readonly confirmed: string,
      public readonly createdAt: Date,
      public readonly createdBy: string,
      public readonly updatedAt: Date,
      public readonly updatedBy: string
    ) { }
}

export interface OrderItemCreateArgs {
    active: boolean
    lineNumber: string
    //productId: string
    quantity: string
    unitPrice: string
    amount: string
    remark: string
    createdBy: string
    updatedBy: string
}

export class OrderItem {
    constructor(
      public readonly id: string,
      public readonly active: boolean,
      public readonly parentId: string,
      public readonly lineNumber: string,
      public readonly productId: string,
      public readonly quantity: string,
      public readonly unitPrice: string,
      public readonly amount: string,
      public readonly remark: string,
      public readonly createdAt: Date,
      public readonly createdBy: string,
      public readonly updatedAt: Date,
      public readonly updatedBy: string
    ) { }
}

export interface OrderItemArraryCreateArgs {
  id: string,
  active: boolean,
  orderDate: Date,
  userId: string,
  customerId: string,
  approver: string,
  draftFlag: boolean,
  approvalStage: string,
  confirmed: string,
  createdBy:string,
  updatedBy: string
  items: [
    {
      id: string,
      active: boolean,
      //parentId: string,
      lineNumber: string,
      productId: string,
      quantity: string,
      unitPrice: string,
      amount: string,
      remark: string,
      createdBy:string,
      updatedBy: string
    }
  ]
}