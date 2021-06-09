import axios, { AxiosInstance, AxiosRequestConfig, CancelTokenSource } from 'axios';
import { useAppGlobalState } from '@/composables';

const { setApiDisabled } = useAppGlobalState();

const API_CONFIG: AxiosRequestConfig = {
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 5000,
};

const API: AxiosInstance = axios.create(API_CONFIG);

export default abstract class Repository<TItem> {
  private api: AxiosInstance = API;

  private cancelTokenSource: CancelTokenSource | null = null;

  public endpoint = '';

  private cancelLastRequest(): void {
    // i don't known why, but eslint show error that .cancel is a property not a method
    // eslint-disable-next-line no-unused-expressions
    this.cancelTokenSource?.cancel();
  }

  private createCancelSource(): void {
    this.cancelTokenSource = axios.CancelToken.source();
  }

  public async get<TParams>(params?: TParams): Promise<TItem[]> {
    this.cancelLastRequest();
    this.createCancelSource();
    try {
      const response = (await this.api.get(this.endpoint, {
        params,
        cancelToken: this.cancelTokenSource?.token,
      })).data;
      return response;
    } catch (err) {
      if (err.code === 'ECONNABORTED') setApiDisabled();
      return [];
    }
  }
}
