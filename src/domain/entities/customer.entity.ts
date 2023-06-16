export interface CustomerCreateArgs {
  name: string
  billingPostalCode: string
  billingState: string
  billingCity: string
  billingStreet: string
  shippingPostalCode: string
  shippingState: string
  shippingCity: string
  shippingStreet: string
  phone: string
  createdBy: string
  updatedBy: string
}

export class Customer {
  constructor(
    public readonly id: string,
    public readonly shortId: string,
    public readonly name: string,
    public readonly billingPostalCode: string,
    public readonly billingState: string,
    public readonly billingCity: string,
    public readonly billingStreet: string,
    public readonly shippingPostalCode: string,
    public readonly shippingState: string,
    public readonly shippingCity: string,
    public readonly shippingStreet: string,
    public readonly phone: string,
    public readonly active: boolean,
    public readonly createdAt: Date,
    public readonly createdBy: string,
    public readonly updatedAt: Date,
    public readonly updatedBy: string,
  ) { }
}
