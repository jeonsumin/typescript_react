import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

type Callback<T> = (data: T, response: AxiosResponse<T>) => void;

export class ApiService {
  private client: AxiosInstance;

  constructor(baseURL?: string) {
    this.client = axios.create({
      baseURL:
        baseURL || import.meta.env.VITE_APP_API_URL || 'http://localhost:8080',
    });
    // this.interceptors();
  }

  async request<T = any>(
    config: AxiosRequestConfig,
    onSuccess?: Callback<T>,
    onError?: (error: any) => void
  ): Promise<void> {
    try {
      const response = await this.client.request<T>(config);
      onSuccess?.(response.data, response);
    } catch (error) {
      onError?.(error);
    }
  }

  async get<T = any>(url: string): Promise<T> {
    const res = await this.client.get<T>(url);
    return res.data;
  }

  async post<T = any>(url: string, data: any): Promise<T> {
    const res = await this.client.post<T>(url, data);
    return res.data;
  }
}