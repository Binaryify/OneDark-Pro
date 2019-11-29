import { workspace, ConfigurationTarget } from 'vscode'
import { generateTheme } from '../themes'

function getDiffConfig() {
  const configuration = workspace.getConfiguration('oneDarkPro')
  const defaultTheme = generateTheme({ italic: true })
  const newTheme = generateTheme({
    bold: configuration.get<boolean>('bold'),
    editorTheme: configuration.get<string>('editorTheme'),
    italic: configuration.get<boolean>('italic'),
    vivid: configuration.get<boolean>('vivid')
  })
  const colorsDiffObj = {}
  const tokenDiffArr = []
  for (const key in defaultTheme.colors) {
    if (defaultTheme.colors[key] !== newTheme.colors[key]) {
      colorsDiffObj[key] = newTheme.colors[key]
    }
  }

  defaultTheme.tokenColors.forEach(item => {
    newTheme.tokenColors.forEach(cell => {
      if (item.scope === cell.scope) {
        if (JSON.stringify(item.settings) !== JSON.stringify(cell.settings)) {
          tokenDiffArr.push(cell)
        }
      }
    })
  })
  return {
    colorsDiffObj,
    tokenDiffArr
  }
}
function rewriteUserConfig() {
  workspace
    .getConfiguration()
    .update(
      `workbench.colorCustomizations`,
      getDiffConfig().colorsDiffObj,
      ConfigurationTarget.Global
    )
  workspace.getConfiguration().update(
    `editor.tokenColorCustomizations`,
    {
      '[One Dark Pro]': {
        textMateRules: getDiffConfig().tokenDiffArr
      }
    },
    ConfigurationTarget.Global
  )
}
export default rewriteUserConfig
