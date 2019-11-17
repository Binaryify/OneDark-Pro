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
}
