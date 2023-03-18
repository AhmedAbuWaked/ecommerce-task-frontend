import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LoadingKeys } from "@/models";
import { handleApiCallInStore } from "./utils";
import { IProductItem } from "@/models";
import { API_ENDPOINTS } from "@/constants";

export interface IProductsStoreType {
  products: IProductItem[];
  getProducts: (payload: any) => void;
}

export const useProductsStore = create(
  persist<IProductsStoreType>(
    (set) => ({
      products: [],
      getProducts: handleApiCallInStore({
        ApiUrl: API_ENDPOINTS.GET.PRODUCTS,
        loadingKey: LoadingKeys.GET_PRODUCTS,
        method: "GET",
        onSuccess: (response) => {
          set({ products: response.data });
        },
      }),
    }),
    {
      name: "products-storage",
      getStorage: () => sessionStorage,
    }
  )
);
