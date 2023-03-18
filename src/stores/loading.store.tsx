import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LoadingKeys } from "@/models";

export interface ILoadingStoreType {
  loadingObj: Record<LoadingKeys, boolean>;
  setLoading: (key: LoadingKeys, isLoading: boolean) => void;
  getLoading: (key: LoadingKeys) => boolean;
}

export const loadingStore = create(
  persist<ILoadingStoreType>(
    (set, get) => ({
      loadingObj: {} as Record<LoadingKeys, boolean>,
      setLoading: async (key: LoadingKeys, isLoading: boolean) => {
        set(({ loadingObj }) => ({
          loadingObj: { ...loadingObj, [key]: isLoading },
        }));
      },
      getLoading: (key: LoadingKeys) => get().loadingObj[key] ?? false,
    }),
    {
      name: "loading-storage",
      getStorage: () => sessionStorage,
    }
  )
);
