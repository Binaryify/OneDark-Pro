import { WebviewController } from './Webview'
import { Uri, workspace } from 'vscode'
import { TextDecoder } from 'util'
import * as path from 'path'
import { marked } from 'marked'

export class ChangelogWebview extends WebviewController {
  get id(): string {
    return 'Onedark Pro.Changelog'
  }

  get title(): string {
    return 'Onedark Pro theme Changelog'
  }

  get content(): Promise<string> {
    const changelogPath = Uri.file(
      path.join(__dirname, '../../', 'CHANGELOG.md')
    )

    return new Promise(async (resolve) => {
      const content = workspace.fs.readFile(changelogPath).then((data) => {
        return new TextDecoder().decode(data)
      })

      resolve(marked.parse(await content))
    })
  }
}
