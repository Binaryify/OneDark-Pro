import { ThemeConfiguration } from '../interface'
import * as data from './themeData.json'
import configFactory from './syntax'

export class Theme {
  name: string = 'One Dark Pro'
  type: string = 'dark'
  semanticHighlighting: boolean = true
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

function createEditorTokens  (config: ThemeConfiguration) {
  return (config.editorTheme in data.editorThemes) ? data.editorThemes[config.editorTheme] : data.editorThemes.oneDarkPro
}
