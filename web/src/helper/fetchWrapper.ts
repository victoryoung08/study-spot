import axios from "axios";

interface FetchWrapperParams {
  endpoint: string;
  options: {
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    data?: any;
    headers?: any;
  };
  local?: boolean;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT;

/**
 * The fetchWrapper function is an async function that wraps the axios library to make HTTP
 * requests and returns the response data or an error.
 */

type FetchWrapperResponse<T> = {
  error?: any;
  data?: T;
};

async function fetchWrapper<T>(
  params: FetchWrapperParams
): Promise<FetchWrapperResponse<T>> {
  const url = `${API_BASE_URL}/${params.endpoint}`;

  try {
    const response = await axios({ ...params.options, url });
    const data = response.data;

    if (response.status !== 200 && response.status !== 201) {
      return { error: data };
    }

    if (data.error) {
      return { error: data.error };
    }

    return { data };
  } catch (error: any) {
    return { error: error?.response?.data };
  }
}
export default fetchWrapper;
