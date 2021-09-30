import { Uri, workspace } from 'vscode'
import { TextEncoder } from "util";
import { join } from 'path'

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
      workspace.fs.writeFile(Uri.file(getCSSPath(file)), new TextEncoder().encode(''))
    })
  } else {
    files.forEach(async file => {
      const fileContents = await workspace.fs.readFile(Uri.file(getCSSPath(`./origin/${file}`)))
      workspace.fs.writeFile(
        Uri.file(getCSSPath(`./${file}`)), 
        fileContents)
    })
  }
}
