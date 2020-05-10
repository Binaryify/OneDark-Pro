import { Disposable, ViewColumn, WebviewPanel, window } from 'vscode'

export abstract class WebviewController<TBootstrap> extends Disposable {
  private panel: WebviewPanel | undefined
  private disposablePanel: Disposable | undefined

  constructor() {
    super(() => this.dispose())
  }

  abstract get id(): string
  abstract get title(): string
  abstract get content(): string

  dispose() {
    if (this.disposablePanel) {
      this.disposablePanel.dispose()
    }
  }

  async show(): Promise<void> {
    const fullHtml = this.content

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
