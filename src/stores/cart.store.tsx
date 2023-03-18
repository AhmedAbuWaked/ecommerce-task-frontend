import { create } from "zustand";
import { persist } from "zustand/middleware";

import { LoadingKeys, RequestPayloadDto } from "@/models";
import { handleApiCallInStore } from "./utils";
import { API_ENDPOINTS } from "@/constants";

export interface ICartItem {
  id: string;
  user: string;
  products: {
    id: string;
    title: string;
    price: string;
    imageCover: string;
    quantity: number;
    description: string;
  }[];
}

export interface ICartStoreType {
  cart: ICartItem;
  addToCart: (payload: RequestPayloadDto) => void;

  getCart: (payload: RequestPayloadDto) => void;

  updateQuantity: (payload: RequestPayloadDto) => void;

  deleteItem: (payload: RequestPayloadDto) => void;

  clearCart: (payload: RequestPayloadDto) => void;

  createCashOrder: (payload: RequestPayloadDto) => void;
}

export const useCartStore = create(
  persist<ICartStoreType>(
    (set, get) => ({
      cart: undefined,
      addToCart: handleApiCallInStore({
        ApiUrl: API_ENDPOINTS.POST.ADD_TO_CART,
        loadingKey: LoadingKeys.ADD_TO_CART,
        method: "POST",
        showSuccessMessage: true,
      }),

      getCart: handleApiCallInStore({
        ApiUrl: API_ENDPOINTS.GET.GET_CART,
        loadingKey: LoadingKeys.GET_CART,
        method: "GET",
        onSuccess: (response) => {
          set({ cart: response.data });
        },
      }),

      updateQuantity: handleApiCallInStore({
        ApiUrl: API_ENDPOINTS.PUT.UPDATE_ITEM_QUANTITY,
        loadingKey: LoadingKeys.UPDATE_ITEM_QUANTITY,
        method: "PUT",
        showSuccessMessage: true,
        onSuccess: (response) => {
          get().getCart({});
        },
      }),

      deleteItem: handleApiCallInStore({
        ApiUrl: API_ENDPOINTS.DELETE.DELETE_CART_ITEM,
        loadingKey: LoadingKeys.DELETE_CART_ITEM,
        method: "DELETE",
        showSuccessMessage: true,
        onSuccess: (response) => {
          get().getCart({});

          set({ cart: response.data });
        },
      }),

      clearCart: handleApiCallInStore({
        ApiUrl: API_ENDPOINTS.DELETE.CLEAR_CART,
        loadingKey: LoadingKeys.CLEAR_CART,
        method: "DELETE",
        showSuccessMessage: true,
        onSuccess: (response) => {
          get().getCart({});
        },
      }),

      createCashOrder: handleApiCallInStore({
        ApiUrl: API_ENDPOINTS.POST.CREATE_CASH_ORDER,
        loadingKey: LoadingKeys.CREATE_CASH_ORDER,
        method: "POST",
        showSuccessMessage: true,
        onSuccess: (response) => {
          get().getCart({});
        },
      }),
    }),
    {
      name: "cart-storage",
      getStorage: () => sessionStorage,
    }
  )
);
