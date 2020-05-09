import { commands, window } from 'vscode'

export function promptToReload() {
  const action = 'Reload'

  window
    .showInformationMessage(
      'Please reload to apply the theme configuration changes.',
      action
    )
    .then(selectedAction => {
      if (selectedAction === action) {
        commands.executeCommand('workbench.action.reloadWindow')
      }
    })
}
