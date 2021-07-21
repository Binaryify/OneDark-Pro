import { join } from 'path'
import { Uri, workspace } from 'vscode'
import { TextEncoder } from "util";
import { generateTheme } from '../themes'
import { promptToReload } from './'

export function updateTheme() {
  const THEME_PATH = Uri.file(join(__dirname, '../../', 'themes', 'OneDark-Pro.json'))
  const theme = generateTheme.fromSettings()
  workspace.fs.writeFile(THEME_PATH, new TextEncoder().encode(JSON.stringify(theme))).then(promptToReload)
}
