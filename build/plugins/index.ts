import { autoImport } from './autoImport'

export const setupPlugins = () => {
  const plugins = [...autoImport()]
  return plugins
}
