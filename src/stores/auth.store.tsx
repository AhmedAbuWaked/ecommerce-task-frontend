import { create } from "zustand";
import { persist } from "zustand/middleware";

import { LoadingKeys, RequestPayloadDto, User } from "@/models";
import { handleApiCallInStore } from "./utils";
import { API_ENDPOINTS } from "@/constants";
import { localStorageHelper } from "@/utils";

export interface IAuthStoreType {
  currentUser: User | null;
  login: (payload: RequestPayloadDto) => void;

  register: (payload: RequestPayloadDto) => void;

  logout: () => void;
}

export const useAuthStore = create(
  persist<IAuthStoreType>(
    (set) => ({
      currentUser: localStorageHelper.get("user"),

      login: handleApiCallInStore({
        ApiUrl: API_ENDPOINTS.POST.LOGIN,
        loadingKey: LoadingKeys.LOGIN,
        method: "POST",
        onSuccess: (response) => {
          localStorageHelper.set("user", response.data);
          set({ currentUser: response.data });
        },
      }),

      register: handleApiCallInStore({
        ApiUrl: API_ENDPOINTS.POST.REGISTER,
        loadingKey: LoadingKeys.REGISTER,
        method: "POST",
        onSuccess: (response) => {
          set({ currentUser: response.data });
        },
      }),

      logout: () => {
        set({ currentUser: null });
      },
    }),
    {
      name: "cart-storage",
      getStorage: () => sessionStorage,
    }
  )
);
