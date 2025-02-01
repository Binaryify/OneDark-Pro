import { workspace } from 'vscode'
import { Theme } from './Theme'
import * as defaultSettings from '../defaultConfig.json'
import colorObjArr from '../utils/colorObjArr'
export const generateTheme = {
  async default () {
    return await Theme.init(defaultSettings)
  },
  async fromSettings (themeName?: string) {
    const configuration = workspace.getConfiguration('oneDarkPro')
    const colorObj = {}
    colorObjArr.forEach((item) => {
      const value = configuration.get<object>('color')[item]
      if (value) {
        colorObj[item] = value
      }
    })
    const buildConfig={
      bold: configuration.get<boolean>('bold', defaultSettings.bold),
      editorTheme:
        themeName ||
        configuration.get<string>('editorTheme', defaultSettings.editorTheme),
      italic: configuration.get<boolean>('italic', defaultSettings.italic),
      vivid: configuration.get<boolean>('vivid', defaultSettings.vivid),
      ...colorObj,
    }
    return await Theme.init(buildConfig)
  },
}
