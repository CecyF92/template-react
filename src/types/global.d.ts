/* eslint-disable no-undef */
export interface Rotta {
  key: number
  path: string
  component: () => JSX.Element
}

export interface Rotte {
  [key: string]: Rotta
}
