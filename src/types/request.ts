export interface Result {
  code: number
  message: string
  path: string
  timestamp: number
}

export interface ResultData<T = any> extends Result {
  data: T
}
