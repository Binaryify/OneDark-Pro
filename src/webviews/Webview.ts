import * as path from 'path'

import {
  workspace as Workspace,
  Disposable,
  ExtensionContext,
  WebviewPanel,
  ViewColumn,
  window
} from 'vscode'

export abstract class WebviewController<TBootstrap> extends Disposable {
  private panel: WebviewPanel | undefined
  private disposablePanel: Disposable | undefined
  private context: ExtensionContext

  constructor(context: ExtensionContext) {
    // Applying dispose callback for our disposable function
    super(() => this.dispose())

    this.context = context
  }

  abstract get filename(): string
  abstract get id(): string
  abstract get title(): string

  abstract getBootstrap(): TBootstrap

  dispose() {
    if (this.disposablePanel) {
      this.disposablePanel.dispose()
    }
  }

  private async getHtml(): Promise<string> {
    const doc = await Workspace.openTextDocument(
      this.context.asAbsolutePath(
        path.join('src/webviews/ui/release-notes', this.filename)
      )
    )
    return doc.getText()
  }

  async show(): Promise<void> {
    const html = await this.getHtml()

    // Replace placeholders in html content for assets and adding configurations as `window.bootstrap`
    const fullHtml = html

    // If panel already opened just reveal
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
