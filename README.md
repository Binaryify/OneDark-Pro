# OneDark-Pro

Atom's iconic One Dark theme, and one of the most downloaded themes for VS Code.

[GitHub repository](https://github.com/Binaryify/OneDark-Pro)

# CHANGELOG

[CHANGELOG.MD](CHANGELOG.md)

# Docs & Contribute

This document
([https://binaryify.github.io/OneDark-Pro/](https://binaryify.github.io/OneDark-Pro/))
includes instructions on how to install and edit the theme.

To help with documentation, first fork and clone this repository. `cd` to the
OneDark-Pro folder, `npm install` and then run
`./node_modules/docsify-cli/bin/docsify serve docs` to serve the documentation
locally.

# ScreenShot

![ScreenShot](https://raw.githubusercontent.com/Binaryify/OneDark-Pro/master/static/screenshot1.png)

![ScreenShot](https://raw.githubusercontent.com/Binaryify/OneDark-Pro/master/static/php.png)

![ScreenShot](https://raw.githubusercontent.com/Binaryify/OneDark-Pro/master/static/screenshot2.png)

![ScreenShot](https://raw.githubusercontent.com/Binaryify/OneDark-Pro/master/static/js.png)

![ScreenShot](https://raw.githubusercontent.com/Binaryify/OneDark-Pro/master/static/cpp.png)

## Tweaks & Workbench theming

If you want to play around with new colors, use the setting
`workbench.colorCustomizations` to customize the currently selected theme. For
example, you can add this snippet in your "settings.json" file:

```json
"workbench.colorCustomizations":{
  "tab.activeBackground": "#282c34",
  "activityBar.background": "#282c34",
  "editorGroup.background": "#282c34",
  "sideBar.background": "#282c34"
}
```

Please check the official documentation,
[Theme Color Reference](https://code.visualstudio.com/docs/getstarted/theme-color-reference),
for more helpful information.

## User definable syntax highlighting colors

You also can custom your syntax highlighting in "setting.json"

![custom](https://raw.githubusercontent.com/Binaryify/OneDark-Pro/master/static/customA.png)
![custom](https://raw.githubusercontent.com/Binaryify/OneDark-Pro/master/static/customB.png)

[More info](https://code.visualstudio.com/updates/v1_15#_user-definable-syntax-highlighting-colors)
