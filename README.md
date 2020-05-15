# [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)

Atom's iconic One Dark theme, and one of the most installed [themes](https://marketplace.visualstudio.com/search?target=VSCode&category=Themes&sortBy=Installs) for VS Code!

[GitHub repository](https://github.com/Binaryify/OneDark-Pro)

![screenshot](https://i.imgur.com/4xrtS6m.png)

## CHANGELOG

[CHANGELOG.MD](https://github.com/Binaryify/OneDark-Pro/blob/master/CHANGELOG.md)

## SPONSORS

[![codestream](https://alt-images.codestream.com/codestream_logo_onedarkpro.png)](https://sponsorlink.codestream.com/?utm_source=vscmarket&utm_campaign=onedarkpro&utm_medium=banner)

Discussing code is now as easy as highlighting a block and typing a comment right from your IDE. Take the pain out of code reviews and improve code quality.
 [Try it free](https://sponsorlink.codestream.com/?utm_source=vscmarket&utm_campaign=onedarkpro&utm_medium=banner).

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
![ScreenShot](/static/code.png)
![Screenshot](/static/006tNbRwgy1fvwk4ach5bj31kw16o0uw.jpg)

![Screenshot](/static/006tNbRwgy1fvwk6c9egej31kw16odhv.jpg)

![ScreenShot](/static/screenshot1.png)

![ScreenShot](/static/php.png)

![ScreenShot](/static/screenshot2.png)

![ScreenShot](/static/js.png)

![ScreenShot](/static/cpp.png)

## Custom markdown preview style
If you want to make your markdown preview become atom's style, you could add this snippet in your "setting.json" file:
```json
"markdown.styles": [
    "https://cdn.jsdelivr.net/gh/Binaryify/OneDark-Pro/styles/base.css",
    "https://cdn.jsdelivr.net/gh/Binaryify/OneDark-Pro/styles/markdown.css",
    "https://cdn.jsdelivr.net/gh/Binaryify/OneDark-Pro/styles/atom-one-dark.css"
]
```

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

[more info](https://binaryify.github.io/OneDark-Pro)

Please check the official documentation,
[Theme Color Reference](https://code.visualstudio.com/docs/getstarted/theme-color-reference) and
[Theme Color](https://code.visualstudio.com/docs/getstarted/themes), for more helpful information.

![setting.json](/static/006tNbRwgy1fvwjoqnbtgj31kw101whv.jpg)

![custom](/static/006tNbRwgy1fvwjpwnq7bj30qu14w3zr.jpg)

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
