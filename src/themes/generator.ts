import { workspace } from 'vscode'
import { Theme } from './Theme'
import * as defaultSettings from '../defaultConfig.json'

export const generateTheme = {
  default: async function () {
    return await Theme.init(defaultSettings)
  },
  fromSettings: async function (themeName?: string) {
    const configuration = workspace.getConfiguration('oneDarkPro')
    return await Theme.init({
      bold: configuration.get<boolean>('bold', defaultSettings.bold),
      editorTheme:
        themeName ||
        configuration.get<string>('editorTheme', defaultSettings.editorTheme),
      italic: configuration.get<boolean>('italic', defaultSettings.italic),
      vivid: configuration.get<boolean>('vivid', defaultSettings.vivid),
    })
  },
}
