import { join } from 'path'
import * as fs from 'fs'
import { workspace, commands as Commands, ConfigurationTarget } from 'vscode'
import { detectConfigChanges, writeFile } from './utils'
import { ChangelogWebview } from './webviews/Changelog'
// import { changelogMessage } from './helpers/message'
import { updateTheme } from './utils/updateTheme'

/**
 * This method is called when the extension is activated.
 * It initializes the core functionality of the extension.
 */
export async function activate() {
  const flagPath = join(__dirname, '../temp', 'flag.txt')
  const changelogView = new ChangelogWebview()
  if (!fs.existsSync(flagPath)) {
    // if (await changelogMessage()) {
    //   changelogView.show()
    // }
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
  }
  // Observe changes in the config
  workspace.onDidChangeConfiguration(event => {
    detectConfigChanges(event, () => {
      // update theme json file with new options
      updateTheme()
    })
  })
  Commands.registerCommand('oneDarkPro.showChangelog', () => {
    changelogView.show()
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
