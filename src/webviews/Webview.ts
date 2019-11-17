import * as path from 'path'
import * as fs from 'fs'
import * as marked from 'marked'

import { Disposable, WebviewPanel, ViewColumn, window } from 'vscode'

export abstract class WebviewController<TBootstrap> extends Disposable {
  private panel: WebviewPanel | undefined
  private disposablePanel: Disposable | undefined

  constructor() {
    super(() => this.dispose())
  }

  abstract get id(): string
  abstract get title(): string

  abstract getBootstrap(): TBootstrap

  dispose() {
    if (this.disposablePanel) {
      this.disposablePanel.dispose()
    }
  }

  private getContent() {
    const content = fs.readFileSync(
      path.join(__dirname, '../../', 'ReleaseNote.md'),
      'utf-8'
    )
    return content
  }

  async show(): Promise<void> {
    const content = this.getContent()

    const fullHtml = marked(content)

    if (this.panel !== undefined) {
      this.panel.webview.html = fullHtml
      return this.panel.reveal(ViewColumn.Active)
    }

    this.panel = window.createWebviewPanel(
      this.id,
      this.title,
      ViewColumn.Active,
      {
        enableCommandUris: true,
        enableFindWidget: true,
        enableScripts: true,
        retainContextWhenHidden: true
      }
    )

    this.panel.webview.html = fullHtml
  }
}
