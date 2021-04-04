# [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)

Atom's iconic One Dark theme, and one of the most installed [themes](https://marketplace.visualstudio.com/search?target=VSCode&category=Themes&sortBy=Installs) for VS Code!

## SPONSORS

[![codestream](https://alt-images.codestream.com/codestream_logo_onedarkpro.png)](https://sponsorlink.codestream.com/?utm_source=vscmarket&utm_campaign=onedarkpro&utm_medium=banner)

Eliminate context switching and costly distractions. Create and merge PRs and perform code reviews from inside your IDE while using jump-to-definition, your keybindings, and other IDE favorites.
 [Learn more](https://sponsorlink.codestream.com/?utm_source=vscmarket&utm_campaign=onedarkpro&utm_medium=banner).

## SCREENSHOT
![ScreenShot](https://cdn.jsdelivr.net/gh/binaryify/onedark-pro/screenshots/normal.png)

### Italic
![ScreenShot](https://cdn.jsdelivr.net/gh/binaryify/onedark-pro/screenshots/italic.png)

### Default theme
![ScreenShot](https://cdn.jsdelivr.net/gh/binaryify/onedark-pro/screenshots/editor1.png)

### Flat theme 
![ScreenShot](https://cdn.jsdelivr.net/gh/binaryify/onedark-pro/screenshots/editorflat.png)

### Terminal
![ScreenShot](https://cdn.jsdelivr.net/gh/binaryify/onedark-pro/screenshots/terminal.png)

### Setting
![ScreenShot](https://cdn.jsdelivr.net/gh/binaryify/onedark-pro/screenshots/setting.png)

### Built in themes
![built-in themes](https://cdn.jsdelivr.net/gh/binaryify/onedark-pro/screenshots/built-in-themes.png)

## Markdown preview style

![Markdown](https://cdn.jsdelivr.net/gh/binaryify/onedark-pro/screenshots/markdown.png)
You can toggle whether to use markdown style in vscode setting (default use)

### Tweaks & theming

If you want to play around with new colors, use the setting
`workbench.colorCustomizations` to customize the currently selected theme. For
example, you can add this snippet in your "settings.json" file:

```json
"workbench.colorCustomizations": {
  "tab.activeBackground": "#282c34",
  "activityBar.background": "#282c34",
  "sideBar.background": "#282c34"
}
```

or use the setting `editor.tokenColorCustomizations`

```json
"editor.tokenColorCustomizations": {
  "[One Dark Pro]": {
    "textMateRules": [
      {
        "scope": ["source.python"],
        "settings": {
          "foreground": "#e06c75"
        }
      }
    ]
  }
}
```
#### Italic 
You could set this in your setting.json to make code be italic
```json
"editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "name": "italic font",
        "scope": [
          "comment",
          "keyword",
          "storage",
          "keyword.control",
          "keyword.control.from",
          "keyword.control.flow",
          "keyword.operator.new",
          "keyword.control.import",
          "keyword.control.export",
          "keyword.control.default",
          "keyword.control.trycatch",
          "keyword.control.conditional",
          "storage.type",
          "storage.type.class",
          "storage.modifier.tsx",
          "storage.type.function",
          "storage.modifier.async",
          "variable.language",
          "variable.language.this",
          "variable.language.super",
          "meta.class",
          "meta.var.expr",
          "constant.language.null",
          "support.type.primitive",
          "entity.name.method.js",
          "entity.other.attribute-name",
          "punctuation.definition.comment",
          "text.html.basic entity.other.attribute-name",
          "tag.decorator.js entity.name.tag.js",
          "tag.decorator.js punctuation.definition.tag.js",
          "source.js constant.other.object.key.js string.unquoted.label.js",
        ],
        "settings": {
          "fontStyle": "italic",
        }
      },
    ]
  }
```


[more info](https://binaryify.github.io/OneDark-Pro)

Please check the official documentation,
[Theme Color Reference](https://code.visualstudio.com/docs/getstarted/theme-color-reference) and
[Theme Color](https://code.visualstudio.com/docs/getstarted/themes), for more helpful information.



[More info](https://code.visualstudio.com/updates/v1_15#_user-definable-syntax-highlighting-colors)

## CHANGELOG

[CHANGELOG.MD](https://github.com/Binaryify/OneDark-Pro/blob/master/CHANGELOG.md)
## DOCS & CONTRIBUTE

This document
([https://binaryify.github.io/OneDark-Pro/](https://binaryify.github.io/OneDark-Pro/))
includes instructions on how to install and edit the theme.

To help with documentation, first fork and clone this repository.

`cd` to the `OneDark-Pro` folder

Run `yarn`

Then run
`npm run docs` to serve the documentation
locally at `localhost:3000`.

### Contributors

This project exists thanks to all the people who contribute.
[![Contributors](https://opencollective.com/OneDark-Pro/contributors.svg?width=890)](https://github.com/Binaryify/OneDark-Pro/graphs/contributors)

### Backers

<a href="https://opencollective.com/onedark-pro#backers" target="_blank"><img src="https://opencollective.com/onedark-pro/backers.svg?width=890"></a>

### Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website.
<a href="https://opencollective.com/onedark-pro#sponsor" target="_blank">
<img src="https://opencollective.com/onedark-pro/sponsor.svg?width=890">
</a>
