import { commands, window } from 'vscode'

export function promptToReload() {
  const action = 'Reload'
  const msg = {
    en: {
      reload: 'Please reload to apply the theme configuration changes.',
    },
    'zh-cn': {
      reload: '请重新加载以让主题配置更改生效',
    },
  }
  const config = JSON.parse(process.env.VSCODE_NLS_CONFIG)
  const locale = config.locale
  let msgReload = msg.en.reload
  if (locale === 'zh-cn') {
    msgReload = msg['zh-cn'].reload
  }

  window.showInformationMessage(msgReload, action).then((selectedAction) => {
    if (selectedAction === action) {
      commands.executeCommand('workbench.action.reloadWindow')
    }
  })
}
