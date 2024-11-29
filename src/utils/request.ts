import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'
import { type ResultData } from '@/types/request'

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 60000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (request) => {
    return request.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

const http = {
  get<T = any, P = any>(
    url: string,
    params?: P,
    config?: AxiosRequestConfig
  ): Promise<ResultData<T>> {
    return service.get(url, { params, ...config })
  },
  post<T = any, P = any>(
    url: string,
    data?: P,
    config?: AxiosRequestConfig
  ): Promise<ResultData<T>> {
    return service.post(url, data, config)
  }
}

export default http
