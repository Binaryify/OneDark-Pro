import { window as Window } from 'vscode'

const MESSAGES = {
  CHANGELOG: {
    message:
      'One Dark Pro Theme was updated. Check the changelog for more details.',
    options: { cancel: 'Maybe later', ok: 'Show me' }
  },
  INSTALLATION: {
    message: 'Thank you for using One Dark Pro!'
  }
}

export const changelogMessage = async () =>
  (await Window.showInformationMessage(
    MESSAGES.CHANGELOG.message,
    MESSAGES.CHANGELOG.options.ok,
    MESSAGES.CHANGELOG.options.cancel
  )) === MESSAGES.CHANGELOG.options.ok
