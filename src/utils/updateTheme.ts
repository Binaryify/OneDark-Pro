import { join } from 'path'
import { generateTheme } from '../themes'
import { promptToReload, writeFile } from './'

export async function updateTheme() {
  const THEME_PATH = join(__dirname, '../../', 'themes', 'OneDark-Pro.json')
  const theme = await generateTheme.fromSettings()
  writeFile(THEME_PATH, theme).then(promptToReload)

  writeFile(
    join(__dirname, '../../', 'themes', 'OneDark-Pro-flat.json'),
   await generateTheme.fromSettings('oneDarkProFlat')
  )
}
