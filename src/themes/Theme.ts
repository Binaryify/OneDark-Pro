import { ThemeConfiguration } from '../interface'
import createEditorTokens from './editor'
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
