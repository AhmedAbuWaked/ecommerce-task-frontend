export enum LoadingKeys {
  GET_PRODUCTS = "GET_PRODUCTS",
  ADD_TO_CART = "ADD_TO_CART",
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  GET_CART = "GET_CART",
  UPDATE_ITEM_QUANTITY = "UPDATE_ITEM_QUANTITY",
  DELETE_CART_ITEM = "DELETE_CART_ITEM",
  CLEAR_CART = "CLEAR_CART",
  CREATE_CASH_ORDER = "CREATE_CASH_ORDER",
}

export enum ROUTES {
  LOGIN = "/login",
  REGISTER = "/register",
  HOME = "/",
  CART_ITEMS = "/cart-items",
  ORDERS = "/orders",
  UN_AUTHORIZED = "/un-authorized",
  NOT_FOUND = "*",
}

export interface MenuList {
  title: string;
  path: string;
}

export interface ListResponse<T> {
  products: T[];
  total: number;
  skip: number;
  limit: number;
}

export interface RequestPayloadDto {
  data?: FormData | Record<string, any>;
  callback?: any;
  id?: string;
  params?: object;
}
