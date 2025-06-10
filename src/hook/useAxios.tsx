// hooks/useAxios.ts
import { useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

type UseAxiosOptions<T> = {
  url: string;
  method?: AxiosRequestConfig['method'];
  onSuccess?: (data: T) => void;
  onError?: (error: any) => void;
};

type UseAxiosReturn = {
  loading: boolean;
  error: any;
  callback: (data?: any, configOverrides?: AxiosRequestConfig) => Promise<void>;
};

export function useAxios<T = any>({
                                    url,
                                    method = 'GET',
                                    onSuccess,
                                    onError,
                                  }: UseAxiosOptions<T>): UseAxiosReturn {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const callback = async (data?: any, configOverrides?: AxiosRequestConfig) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios({
        url,
        method,
        data,
        ...configOverrides,
      });

      onSuccess?.(response.data);
    } catch (err) {
      setError(err);
      onError?.(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, callback };
}
