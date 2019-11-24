import { WebviewController } from './Webview'
import * as fs from 'fs'
import * as path from 'path'
import * as marked from 'marked'

export class ChangelogWebview extends WebviewController<{}> {
  get id(): string {
    return 'Onedark Pro.Changelog'
  }

  get title(): string {
    return 'Onedark Pro theme Changelog'
  }

  get content(): string {
    const content = fs.readFileSync(
      path.join(__dirname, '../../', 'CHANGELOG.md'),
      'utf-8'
    )
    return marked(content)
  }
}
