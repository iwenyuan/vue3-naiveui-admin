export interface TreeMenu {
  path: string
  title: string
  visibility: boolean
  menuType: 0 | 1 | 2
  icon: string
  keepAlive: boolean
  enterLink: boolean
  sort: number

  id?: number
  pid?: number
  name?: string
  component?: string
  competence?: string
  link?: string
  isLeaf?: boolean
  children?: TreeMenu[]
}

export interface Tag {
  label: string
  key: string
  icon: string
  keepAlive: boolean
  name: string
}
