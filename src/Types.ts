export interface ProductsType {
  id: number,
  name: string,
  amount: string
}

export interface GetProducts extends ProductsType{
  orderId: null | number
}

export interface UsersType {
  username: string,
  classe: string,
  level: number,
  password: string
}

export interface OrderType {
  id: number,
  userId: number
  productsIds: Array<number>
}
