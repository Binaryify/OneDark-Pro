# [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)

Atom's iconic One Dark theme, and one of the most installed [themes](https://marketplace.visualstudio.com/search?target=VSCode&category=Themes&sortBy=Installs) for VS Code!

![screenshot](https://user-images.githubusercontent.com/29161635/95036516-3476e400-0696-11eb-839a-7958f29d533d.png)

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

![ScreenShot](https://user-images.githubusercontent.com/29161635/95036840-22e20c00-0697-11eb-9780-7a9f7055b08d.png)

![Screenshot](https://user-images.githubusercontent.com/29161635/95036900-4a38d900-0697-11eb-8771-ba2a25dca77a.jpg)

![Screenshot](https://user-images.githubusercontent.com/29161635/95036953-6dfc1f00-0697-11eb-97d4-9de6ad5db740.jpg)

![ScreenShot](https://user-images.githubusercontent.com/29161635/95036972-810eef00-0697-11eb-8a6a-4e064f551df4.png)

![ScreenShot](https://user-images.githubusercontent.com/29161635/95036992-9421bf00-0697-11eb-9c4b-350d632523e6.png)

![ScreenShot](https://user-images.githubusercontent.com/29161635/95037013-a4d23500-0697-11eb-912a-4cd90e83d11b.png)

![ScreenShot](https://user-images.githubusercontent.com/29161635/95037040-b9aec880-0697-11eb-8138-af089fc16379.png)

![ScreenShot](https://user-images.githubusercontent.com/29161635/95037059-c7644e00-0697-11eb-8624-60a17d42b431.png)

## Markdown preview style

![Markdown](https://user-images.githubusercontent.com/29161635/95037095-e4008600-0697-11eb-9259-54451604eb85.png)
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

[more info](https://binaryify.github.io/OneDark-Pro)

Please check the official documentation,
[Theme Color Reference](https://code.visualstudio.com/docs/getstarted/theme-color-reference) and
[Theme Color](https://code.visualstudio.com/docs/getstarted/themes), for more helpful information.

![setting.json](https://user-images.githubusercontent.com/29161635/95037178-1ad69c00-0698-11eb-8c9d-2221fb7e4ed4.jpg)

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
