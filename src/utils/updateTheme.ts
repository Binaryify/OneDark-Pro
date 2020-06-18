import { join } from 'path'
import { generateTheme } from '../themes'
import { promptToReload, writeFile } from './'

export function updateTheme() {
  const THEME_PATH = join(__dirname, '../../', 'themes', 'OneDark-Pro.json')
  const theme = generateTheme.fromSettings()
  writeFile(THEME_PATH, theme).then(promptToReload)
}
