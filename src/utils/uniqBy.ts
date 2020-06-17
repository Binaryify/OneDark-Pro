import { TokenColor } from '../interface'

export function uniqBy(baseArray: TokenColor[], overrides: TokenColor[]): TokenColor[] {
  const obj = {}
  baseArray.concat(overrides).forEach(item => (obj[item.name + item.scope] = item))
  return Object.values(obj)
}
