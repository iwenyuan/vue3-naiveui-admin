import { type ResultData } from '@/types/request'

export const getTreeMenu = (): Promise<ResultData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 200,
        message: 'success',
        timestamp: 10000,
        path: '',
        data: [
          {
            id: 1,
            name: '系统管理',
            icon: 'el-icon-setting',
            children: [
              {
                id: 11,
                name: '用户管理',
                icon: 'el-icon-user',
                path: '/user/list'
              }
            ]
          }
        ]
      })
    })
  })
}
