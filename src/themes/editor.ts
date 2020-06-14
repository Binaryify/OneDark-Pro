import { ThemeConfiguration } from '../interface'
import * as data from './themeData.json'

export default (config: ThemeConfiguration) => {
  return (config.editorTheme in data.editorThemes) ? data.editorThemes[config.editorTheme] : data.editorThemes.oneDarkPro
}
