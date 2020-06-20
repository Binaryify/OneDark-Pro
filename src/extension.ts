import { join } from 'path'
import * as fs from 'fs'
import { commands as Commands, ConfigurationTarget, workspace } from 'vscode'
import { ChangelogWebview } from './webviews/Changelog'
import { updateCSS, updateTheme, writeFile } from './utils'

/**
 * This method is called when the extension is activated.
 * It initializes the core functionality of the extension.
 */
export async function activate() {
  const flagPath = join(__dirname, '../temp', 'flag.txt')
  if (!fs.existsSync(flagPath)) {

    writeFile(flagPath, '')

    const configArr = [
      { defaultVal: false, type: 'bold' },
      { defaultVal: true, type: 'italic' },
      { defaultVal: false, type: 'vivid' }
    ]
    const configuration = workspace.getConfiguration('oneDarkPro')
    const isDefaultConfig = configArr.every(item => {
      return configuration.get<boolean>(item.type) === item.defaultVal
    })

    if (!isDefaultConfig) {
      updateTheme()
    }
    if (!configuration.get<boolean>('markdownStyle')) {
      updateCSS()
    }
  }
  // Observe changes in the config
  workspace.onDidChangeConfiguration(event => {
    if (event.affectsConfiguration('oneDarkPro')) {
      updateTheme()
      updateCSS()
    }
  })
  Commands.registerCommand('oneDarkPro.showChangelog', () => {
    new ChangelogWebview().show()
  })

  const settingArr = ['Vivid', 'Italic', 'Bold']
  settingArr.forEach(settingItem => {
    Commands.registerCommand(`oneDarkPro.set${settingItem}`, () => {
      workspace
        .getConfiguration()
        .update(
          `oneDarkPro.${settingItem.toLowerCase()}`,
          true,
          ConfigurationTarget.Global
        )
    })
    Commands.registerCommand(`oneDarkPro.cancel${settingItem}`, () => {
      workspace
        .getConfiguration()
        .update(
          `oneDarkPro.${settingItem.toLowerCase()}`,
          false,
          ConfigurationTarget.Global
        )
    })
  })
}
