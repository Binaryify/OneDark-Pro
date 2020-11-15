# [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)

Atom's iconic One Dark theme, and one of the most installed [themes](https://marketplace.visualstudio.com/search?target=VSCode&category=Themes&sortBy=Installs) for VS Code!

![screenshot](https://user-images.githubusercontent.com/29161635/95036516-3476e400-0696-11eb-839a-7958f29d533d.png)

## CHANGELOG

[CHANGELOG.MD](https://github.com/Binaryify/OneDark-Pro/blob/master/CHANGELOG.md)

## SPONSORS

[![codestream](https://alt-images.codestream.com/codestream_logo_onedarkpro.png)](https://sponsorlink.codestream.com/?utm_source=vscmarket&utm_campaign=onedarkpro&utm_medium=banner)

Eliminate context switching and costly distractions. Create and merge PRs and perform code reviews from inside your IDE while using jump-to-definition, your keybindings, and other IDE favorites.
 [Learn more](https://sponsorlink.codestream.com/?utm_source=vscmarket&utm_campaign=onedarkpro&utm_medium=banner).

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

## SCREENSHOT
![ScreenShot](https://cdn-static.binaryify.com/normal.png)

### Italic
![ScreenShot](https://cdn-static.binaryify.com/italic.png)

### Default theme
![ScreenShot](https://cdn-static.binaryify.com/editor.png)

### Flat theme 
![ScreenShot](https://cdn-static.binaryify.com/editorflat.png)

### Terminal
![ScreenShot](https://cdn-static.binaryify.com/terminal.png)

### Setting
![ScreenShot](https://cdn-static.binaryify.com/setting.png)

### Built in themes
![ScreenShot](https://cdn-static.binaryify.com/built-in-themes.png)

## Markdown preview style

![Markdown](https://cdn-static.binaryify.com/markdown-2.png)
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

![custom](https://user-images.githubusercontent.com/29161635/95037202-2f1a9900-0698-11eb-89d7-674b872c068c.jpg)

[More info](https://code.visualstudio.com/updates/v1_15#_user-definable-syntax-highlighting-colors)

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
