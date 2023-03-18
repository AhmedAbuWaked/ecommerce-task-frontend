export const API_ENDPOINTS = {
  BASE: process.env.REACT_APP_BASE_URL,
  GET: {
    PRODUCTS: "/products",
    SINGLE_PRODUCT: (id: string) => `/products/${id}`,
    GET_CART: "/cart",
    GET_ORDERS: "/orders",
    SINGLE_ORDER: (id: string) => `/orders/${id}`,
  },
  POST: {
    CREATE_PRODUCT: "/products",
    ADD_TO_CART: "/cart",
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    CREATE_CASH_ORDER: (id: string) => `/orders/${id}`,
  },
  PUT: {
    UPDATE_PRODUCTS: (id: string) => `/products/${id}`,
    UPDATE_ITEM_QUANTITY: (id: string) => `/cart/${id}`,
  },
  DELETE: {
    DELETE_PRODUCTS: (id: string) => `/products/${id}`,
    DELETE_CART_ITEM: (id: string) => `/cart/${id}`,
    CLEAR_CART: "/cart",
  },
};
