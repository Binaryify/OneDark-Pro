import { join } from 'path'
import { generateTheme } from '../themes'
import { promptToReload, writeFile } from './'

export async function updateTheme() {
  let promiseArr = []
  promiseArr = [
    writeFile(
      join(__dirname, '../../', 'themes', 'OneDark-Pro.json'),
      await generateTheme.fromSettings()
    ),
    writeFile(
      join(__dirname, '../../', 'themes', 'OneDark-Pro-flat.json'),
      await generateTheme.fromSettings('oneDarkProFlat')
    ),
    writeFile(
      join(__dirname, '../../', 'themes', 'OneDark-Pro-darker.json'),
      await generateTheme.fromSettings('oneDarkProDarker')
    ),
  ]
  await Promise.all(promiseArr)
  promptToReload()
}
