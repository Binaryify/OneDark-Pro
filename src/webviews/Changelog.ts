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
    return Promise.resolve(workspace.fs.readFile(changelogPath))
      .then((data) => new TextDecoder().decode(data))
      .then((content) => marked.parse(content))
  }
}
