export type User = {
  id: number
  name: string
}

export type searchItem = {
  id?: number
  name: string
  category?: string
}

export type navItem = {
  title: string
  to: string
  component: any
  children?: any[]
}
