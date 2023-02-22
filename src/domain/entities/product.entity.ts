export interface ProductCreateArgs {
    ProductName: string
    UseId: string
    created_by: string
    updated_by: string
  }
  
  export class Product {
    constructor(
      public readonly ProductId: string,
      public readonly ProductName: string,
      public readonly UseId: string,
      public readonly created_at: Date,
      public readonly created_by: string,
      public readonly updated_at: Date,
      public readonly updated_by: string,
    ) { }
  }
  