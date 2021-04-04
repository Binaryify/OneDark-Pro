import { workspace } from 'vscode'
import { join } from 'path'
import * as fs from 'fs'
import { promptToReload } from './'

const getCSSPath = file => join(__dirname, '../../', 'styles', file)

export function updateCSS() {
  const configuration = workspace.getConfiguration('oneDarkPro')
  const files = [
    'atom-one-dark-inside.css',
    'base-inside.css',
    'markdown-inside.css'
  ]
  if (!configuration.get<boolean>('markdownStyle')) {
    files.forEach(file => {
      fs.writeFileSync(getCSSPath(file), '')
    })
  } else {
    files.forEach(file => {
      fs.writeFileSync(
        getCSSPath(`./${file}`),
        fs.readFileSync(getCSSPath(`./origin/${file}`))
      )
    })
  }
  // promptToReload()
}
