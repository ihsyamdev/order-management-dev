export interface UserCreateArgs {
  firstName: string
  lastName: string
  email: string
  active: boolean
  createdBy: string
  updatedBy: string
}

export class User {
  constructor(
    public readonly id: string,
    public readonly shortId: string,    
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly email: string,
    public readonly active: boolean,
    public readonly createdAt: Date,
    public readonly createdBy: string,
    public readonly updatedAt: Date,
    public readonly updatedBy: string,
  ) {}
}
