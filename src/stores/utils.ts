import { LoadingKeys, RequestPayloadDto } from "@/models";
import { loadingStore } from "./loading.store";
import { Modal, notification } from "antd";
import { AxiosResponse } from "axios";
import axiosClient from "@/constants/axiosClient";

interface ApiCallInStoreProps {
  loadingKey: LoadingKeys;
  ApiUrl: string | ((id: string) => string);
  method: "GET" | "POST" | "PUT" | "DELETE";
  showSuccessMessage?: boolean;
  onSuccess?: (response: AxiosResponse) => void;
}

export const handleApiCallInStore =
  ({
    loadingKey,
    ApiUrl,
    method,
    showSuccessMessage = false,
    onSuccess,
  }: ApiCallInStoreProps) =>
  async (payload: RequestPayloadDto) => {
    try {
      loadingStore.getState().setLoading(loadingKey, true);

      let response = {} as AxiosResponse;
      let url = "";

      if (payload?.id && typeof ApiUrl === "function") {
        url = ApiUrl(payload.id);
      } else {
        url = ApiUrl as string;
      }

      if (method === "GET" || method === "DELETE") {
        response = await axiosClient[method.toLowerCase()](url);
      }

      if (method === "POST" || method === "PUT") {
        response = await axiosClient[method.toLowerCase()](url, payload?.data);
      }

      onSuccess?.(response);

      if (showSuccessMessage) {
        // show success message
        notification.success({
          message: "Success",
          description: "Operation completed successfully",
        });
      }

      payload?.callback?.();
    } catch (error) {
      Modal.error({
        title: "Something went wrong!",
        content: error.message,
      });
    } finally {
      loadingStore.getState().setLoading(loadingKey, false);
    }
  };
