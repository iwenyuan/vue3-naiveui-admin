// import http from '@/utils/request'
export const login = (params: Record<string, string>) => {
  // return http.post('/api/login', params)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 200,
        data: {
          token: '123456789'
        }
      })
    }, 500)
  })
}
