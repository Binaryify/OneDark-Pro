import { ThemeConfiguration } from '../interface'
import createEditorTokens from './editor'
import configFactory from './syntax'

export function generateTheme(configuration: ThemeConfiguration) {
  return {
    colors: createEditorTokens(configuration),
    name: 'One Dark Pro',
    tokenColors: configFactory(configuration),
    type: 'dark'
  }
}
