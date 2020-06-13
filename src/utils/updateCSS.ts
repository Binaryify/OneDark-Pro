import { workspace } from 'vscode'
import { join } from 'path'
import * as fs from 'fs'
import { promptToReload } from './index'
const getCSSPath = file => join(__dirname, '../../', 'styles', file)
function updateCSS() {
  const configuration = workspace.getConfiguration('oneDarkPro')
  if (!configuration.get<boolean>('markdownStyle')) {
    fs.writeFileSync(getCSSPath('atom-one-dark-inside.css'), '')
    fs.writeFileSync(getCSSPath('base-inside.css'), '')
    fs.writeFileSync(getCSSPath('markdown-inside.css'), '')
  } else {
    fs.writeFileSync(
      getCSSPath('./atom-one-dark-inside.css'),
      fs.readFileSync(getCSSPath('./origin/atom-one-dark-inside.css'))
    )
    fs.writeFileSync(
      getCSSPath('./base-inside.css'),
      fs.readFileSync(getCSSPath('./origin/base-inside.css'))
    )
    fs.writeFileSync(
      getCSSPath('./markdown-inside.css'),
      fs.readFileSync(getCSSPath('./origin/markdown-inside.css'))
    )
  }
  promptToReload()
}
export default updateCSS
