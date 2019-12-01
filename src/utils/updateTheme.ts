import { workspace, ConfigurationTarget } from 'vscode'
import { join } from 'path'
import { generateTheme } from '../themes'
import { writeFile, promptToReload } from './index'
const THEME_PATH = join(__dirname, '../../', 'themes', 'OneDark-Pro.json')
async function regenerateTheme() {
  const configuration = workspace.getConfiguration('oneDarkPro')

  const theme = generateTheme({
    bold: configuration.get<boolean>('bold'),
    editorTheme: configuration.get<string>('editorTheme'),
    italic: configuration.get<boolean>('italic'),
    vivid: configuration.get<boolean>('vivid')
  })
  return writeFile(THEME_PATH, theme)
}

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
      `workbench.colorCustomizations.[One Dark Pro]`,
      getDiffConfig().colorsDiffObj,
      ConfigurationTarget.Global
    )
  workspace.getConfiguration().update(
    `editor.tokenColorCustomizations.[One Dark Pro]`,
    {
      textMateRules: getDiffConfig().tokenDiffArr
    },
    ConfigurationTarget.Global
  )
}
function cleanUserConfig() {
  workspace
    .getConfiguration()
    .update(
      `workbench.colorCustomizations.[One Dark Pro]`,
      {},
      ConfigurationTarget.Global
    )
  workspace
    .getConfiguration()
    .update(
      `editor.tokenColorCustomizations.[One Dark Pro]`,
      {},
      ConfigurationTarget.Global
    )
}
function updateTheme() {
  // const configuration = workspace.getConfiguration('oneDarkPro')
  // cleanUserConfig()
  // if (configuration.get<boolean>('workbenchMode')) {
  //   rewriteUserConfig()
  // } else {
  //   regenerateTheme().then(promptToReload)
  // }
  regenerateTheme().then(promptToReload)
}
export { rewriteUserConfig, cleanUserConfig, updateTheme }
