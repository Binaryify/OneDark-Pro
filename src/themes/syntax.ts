import Colors from '../interface/colors'
import { TokenColor } from '../interface'
import * as data from './themeData.json'
// import { cloneDeep } from '../utils/cloneDeep'

export default function (configuration) {

  let result: TokenColor[] = data.tokenColors.default

  function uniqBy(baseArray: TokenColor[], overrides: TokenColor[]): TokenColor[] {
    const obj = {}
    baseArray.concat(overrides).forEach(item => (obj[item.name + item.scope] = item))
    return Object.values(obj)
  }

  if (configuration.bold) {
    result = uniqBy(result, data.tokenColors.bold)
  }
  if (configuration.italic) {
    result = uniqBy(result, data.tokenColors.italic)
  }

  // Fill in color placeholders with concrete color values
  const colorObj: Colors = configuration.vivid ? data.textColors.vivid : data.textColors.classic
  result.forEach(token => {
    if (token.settings.foreground) {
      if (token.settings.foreground in colorObj) { token.settings.foreground = colorObj[token.settings.foreground] }
    }
  });

  return {
    semanticTokenColors: {
      enumMember: {
        foreground: colorObj.fountainBlue
      },
      'variable.constant': {
        foreground: colorObj.whiskey
      },
      'variable.defaultLibrary': {
        foreground: colorObj.chalky
      }
    },
    tokenColors: result
  }
}
