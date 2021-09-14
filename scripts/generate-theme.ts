import { join } from 'path'
import { writeFile } from '../src/utils/file'
import { Theme } from '../src/themes/Theme'
import * as defaultSettings from '../src/defaultConfig.json'
import * as flatConfig from '../src/flatConfig.json'
import * as darkerConfig from '../src/darkerConfig.json'

async function main(){
  writeFile(
    join(__dirname, '..', 'themes', 'OneDark-Pro.json'),
    await Theme.init(defaultSettings)
  )
  
  writeFile(
    join(__dirname, '..', 'themes', 'OneDark-Pro-flat.json'),
    await Theme.init(flatConfig)
  )
  
  writeFile(
    join(__dirname, '..', 'themes', 'OneDark-Pro-darker.json'),
    await Theme.init(darkerConfig)
  )
}
main()