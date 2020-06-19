import { workspace } from 'vscode'
import { Theme } from './Theme'
import * as defaultSettings from '../defaultConfig.json'

export const generateTheme = {
  default: function(): Theme {
    return new Theme(defaultSettings)
  },
  fromSettings: function(): Theme {
    const configuration = workspace.getConfiguration('oneDarkPro')
    return new Theme({
      bold: configuration.get<boolean>('bold', defaultSettings.bold),
      editorTheme: configuration.get<string>('editorTheme', defaultSettings.editorTheme),
      italic: configuration.get<boolean>('italic', defaultSettings.italic),
      vivid: configuration.get<boolean>('vivid', defaultSettings.vivid)
    })
  }
}
