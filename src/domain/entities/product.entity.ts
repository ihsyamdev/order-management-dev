export interface ProductCreateArgs {
    productName: string
    useId: string
    createdBy: string
    updatedBy: string
  }
  
  export class Product {
    constructor(
      public readonly productId: string,
      public readonly productName: string,
      public readonly useId: string,
      public readonly createdAt: Date,
      public readonly createdBy: string,
      public readonly updatedAt: Date,
      public readonly updatedBy: string,
    ) { }
  }
  