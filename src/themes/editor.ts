import nord from './editorTheme/nord'
import solarized from './editorTheme/solarized'
import solarizedFlat from './editorTheme/solarizedFlat'
import panda from './editorTheme/panda'
import ayu from './editorTheme/ayu'
import vscode from './editorTheme/vscode'
import oneDarkPro from './editorTheme/oneDarkPro'
import { ThemeConfiguration } from '../interface'

export default (config: ThemeConfiguration) => {
  switch (config.editorTheme) {
    case 'vscode':
      return vscode
    case 'nord':
      return nord
    case 'solarized':
      return solarized
    case 'solarized flat':
      return solarizedFlat
    case 'panda':
      return panda
    case 'ayu':
      return ayu

    default:
      return oneDarkPro
  }
}
