import { join } from 'path'
import * as fs from 'fs'
import { workspace } from 'vscode'
import { generateTheme } from './themes'
import { detectConfigChanges, promptToReload, writeFile } from './utils'
import { ReleaseNotesWebview } from './webviews/releasenotes'

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
export function activate(): void {
  const flagPath = join(__dirname, '../temp', 'flag.txt')

  if (!fs.existsSync(flagPath)) {
    const releaseNotesView = new ReleaseNotesWebview()
    releaseNotesView.show()
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
}
