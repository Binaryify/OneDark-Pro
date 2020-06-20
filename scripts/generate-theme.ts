import { join } from 'path'
import { writeFile } from '../src/utils/file'
import { Theme } from '../src/themes/Theme'
import * as defaultSettings from '../src/defaultConfig.json'

writeFile(
  join(__dirname, '..', 'themes', 'OneDark-Pro.json'),
  new Theme(defaultSettings)
)
