import { join } from 'path'
import * as fs from 'fs'
import { workspace, commands as Commands, ConfigurationTarget } from 'vscode'
import { generateTheme } from './themes'
import { detectConfigChanges, promptToReload, writeFile } from './utils'
import { ChangelogWebview } from './webviews/Changelog'
import { changelogMessage } from './helpers/message'
const THEME_PATH = join(__dirname, '..', 'themes', 'OneDark-Pro.json')

export async function regenerateTheme() {
  const configuration = workspace.getConfiguration('oneDarkPro')

  const theme = generateTheme({
    bold: configuration.get<boolean>('bold'),
    editorTheme: configuration.get<string>('editorTheme'),
    italic: configuration.get<boolean>('italic'),
    vivid: configuration.get<boolean>('vivid')
  })
  return writeFile(THEME_PATH, theme)
}

/**
 * This method is called when the extension is activated.
 * It initializes the core functionality of the extension.
 */
export async function activate() {
  const flagPath = join(__dirname, '../temp', 'flag.txt')
  const changelogView = new ChangelogWebview()
  if (!fs.existsSync(flagPath)) {
    if (await changelogMessage()) {
      changelogView.show()
    }
    writeFile(flagPath, '')
    regenerateTheme().then(promptToReload)
  }
  // Observe changes in the config
  workspace.onDidChangeConfiguration(event => {
    detectConfigChanges(event, () => {
      // update theme json file with new options
      regenerateTheme().then(promptToReload)
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
