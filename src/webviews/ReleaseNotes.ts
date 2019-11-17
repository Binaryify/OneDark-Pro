import { WebviewController } from './Webview'

export class ReleaseNotesWebview extends WebviewController<{}> {
  get filename(): string {
    return 'release-notes.html'
  }

  get id(): string {
    return 'Onedark Pro.releaseNotes'
  }

  get title(): string {
    return 'Onedark Pro theme Release Notes'
  }

  /**
   * This will be called by the WebviewController when init the view
   * passing as `window.bootstrap` to the view.
   */
  getBootstrap() {
    return {}
  }
}
