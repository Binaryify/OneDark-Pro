import Colors from '../interface/colors'
import * as data from './themeData.json'
// import { cloneDeep } from '../utils/cloneDeep'
import { uniqBy } from '../utils/uniqBy'

const configFactory = configuration => {
  const colorObj: Colors = configuration.vivid ? data.textColors.vivid : data.textColors.classic
  let tokenColorsBold
  let tokenColorsItalic
  /**
   * Overwrites for theme type "bold"
   */
  if (configuration.bold) {
    tokenColorsBold = data.tokenColors.bold
  }
  if (configuration.italic) {
    tokenColorsItalic = data.tokenColors.italic
  }
  /**
   * Default theme settings
   */
  const tokenColorsDefault = data.tokenColors.default
  let result: any = tokenColorsDefault
  //   add ability to generate custom syntax settings per layout type
  if (configuration.bold) {
    result = uniqBy([...tokenColorsBold, ...result], setting => {
      return setting.name + setting.scope
    })
  }
  if (configuration.italic) {
    result = uniqBy([...tokenColorsItalic, ...result], setting => {
      return setting.name + setting.scope
    })
  }
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
export default configFactory
