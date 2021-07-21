import { join } from 'path'
import { Theme } from '../src/themes/Theme'
import * as defaultSettings from '../src/defaultConfig.json'
import * as flatConfig from '../src/flatConfig.json'
import { promises as fs } from 'fs'

export function writeFile(path: string, data: unknown): Promise<void> {
   return fs.writeFile(path, JSON.stringify(data, null, 2))
}

writeFile(
  join(__dirname, '..', 'themes', 'OneDark-Pro.json'),
  new Theme(defaultSettings)
)

writeFile(
  join(__dirname, '..', 'themes', 'OneDark-Pro-flat.json'),
  new Theme(flatConfig)
)
