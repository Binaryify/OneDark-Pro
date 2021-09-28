import { join } from 'path'
import { Uri, workspace } from 'vscode'
import { TextEncoder } from "util";
import { generateTheme } from '../themes'
import { promptToReload } from './'

export async function updateTheme() {
  const writeTheme = (fileName: string, themeName?: string) => {
    const THEME_PATH = Uri.file(join(__dirname, '../../', 'themes', fileName))
    const theme = generateTheme.fromSettings(themeName)
    return workspace.fs.writeFile(THEME_PATH, new TextEncoder().encode(JSON.stringify(theme)))
  };

  let promiseArr = []
  promiseArr = [
    writeTheme('OneDark-Pro.json'),
    writeTheme('OneDark-Pro-flat.json', 'One Dark Pro Flat'),
    writeTheme('OneDark-Pro-darker.json', 'One Dark Pro Darker')
  ]
  await Promise.all(promiseArr)
  promptToReload()
}
