import { join } from 'path'
import { writeFile } from '../src/utils/file'
import { Theme } from '../src/themes/Theme'
import * as defaultSettings from '../src/defaultConfig.json'
import * as flatConfig from '../src/flatConfig.json'
import * as darkerConfig from '../src/darkerConfig.json'

writeFile(
  join(__dirname, '..', 'themes', 'OneDark-Pro.json'),
  new Theme(defaultSettings)
)

writeFile(
  join(__dirname, '..', 'themes', 'OneDark-Pro-flat.json'),
  new Theme(flatConfig)
)

writeFile(
  join(__dirname, '..', 'themes', 'OneDark-Pro-darker.json'),
  new Theme(darkerConfig)
)