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
      await generateTheme.fromSettings('One Dark Pro Flat')
    ),
    writeFile(
      join(__dirname, '../../', 'themes', 'OneDark-Pro-darker.json'),
      await generateTheme.fromSettings('One Dark Pro Darker')
    ),
  ]
  await Promise.all(promiseArr)
  promptToReload()
}
