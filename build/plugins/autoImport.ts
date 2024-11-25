import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export const autoImport = () => {
  return [
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      imports: [
        'vue',
        'vue-router',
        {
          'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar']
        }
      ]
    }),
    //  自动导入组件
    Components({
      dirs: ['src/components'], // 自动导入项目的公共组件
      extensions: ['vue', 'tsx'], // 组件有效的文件扩展名
      resolvers: [NaiveUiResolver()]
    })
  ]
}
