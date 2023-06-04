export interface ProductCreateArgs {
  name: string
  active: boolean
  createdBy: string
  updatedBy: string
}

export class Product {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly active: boolean,
    public readonly createdAt: Date,
    public readonly createdBy: string,
    public readonly updatedAt: Date,
    public readonly updatedBy: string,
  ) { }
}
  