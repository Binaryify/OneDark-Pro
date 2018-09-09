const fs = require('fs')
const editorConfig = require('./src/editor.json')
const classicSyntax = require('./src/classic.json')
const vividSyntax = require('./src/vivid.json')
const classicThemeJson = {
  ...editorConfig,
  ...classicSyntax
}
const vividThemeJson = {
  ...editorConfig,
  ...vividSyntax
}
fs.writeFileSync(
  './themes/OneDark-Pro.json',
  JSON.stringify(classicThemeJson, '', 2)
)
fs.writeFileSync(
  './themes/OneDark-Pro-vivid.json',
  JSON.stringify(vividThemeJson, '', 2)
)
