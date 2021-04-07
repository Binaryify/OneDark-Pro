import { Colors, ThemeConfiguration, TokenColor } from '../interface'
import * as data from './themeData.json'

function createEditorTokens(config: ThemeConfiguration) {
  return config.editorTheme in data.editorThemes
    ? data.editorThemes[config.editorTheme]
    : data.editorThemes.oneDarkPro
}

function configFactory(configuration) {
  let result: TokenColor[] = data.tokenColors.default

  function uniqBy(
    baseArray: TokenColor[],
    overrides: TokenColor[]
  ): TokenColor[] {
    const obj = {}
    baseArray
      .concat(overrides)
      .forEach(item => (obj[item.name + item.scope] = item))
    return Object.values(obj)
  }

  if (configuration.bold) {
    result = uniqBy(result, data.tokenColors.bold)
  }
  if (configuration.italic) {
    result = uniqBy(result, data.tokenColors.italic)
  }

  // Fill in color placeholders with concrete color values
  const colorObj: Colors = configuration.vivid
    ? data.textColors.vivid
    : data.textColors.classic
  result.forEach(token => {
    if (token.settings.foreground) {
      if (token.settings.foreground in colorObj) {
        token.settings.foreground = colorObj[token.settings.foreground]
      }
    }
  })

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
      },
      "variable:dart":{
        foreground: colorObj.whiskey
      },
      "property:dart":{
        foreground: colorObj.whiskey
      },
      "annotation:dart":{
        foreground: colorObj.whiskey
      },
      "parameter.label:dart":{
        "foreground": colorObj.lightWhite
      },
    },
    tokenColors: result
  }
}
export class Theme {
  name = 'One Dark Pro'
  type = 'dark'
  semanticHighlighting = true
  semanticTokenColors
  tokenColors
  colors

  constructor(configuration: ThemeConfiguration) {
    const themeTokens = configFactory(configuration)
    this.semanticTokenColors = themeTokens.semanticTokenColors
    this.tokenColors = themeTokens.tokenColors
    this.colors = createEditorTokens(configuration)
  }
}
