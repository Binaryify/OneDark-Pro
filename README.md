# [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)

Atom's iconic One Dark theme, and one of the most downloaded [themes](https://marketplace.visualstudio.com/search?target=VSCode&category=Themes&sortBy=Downloads) for VS Code!

[GitHub repository](https://github.com/Binaryify/OneDark-Pro)


![screenshot](https://i.imgur.com/4xrtS6m.png)


# CHANGELOG

[CHANGELOG.MD](CHANGELOG.md)

# Sponsors
[![codestream](https://alt-images.codestream.com/codestream_logo_onedarkpro.png)](https://codestream.com/?utm_source=vscmarket&utm_medium=banner&utm_campaign=onedarkpro)  

Discuss, review, and share code with your team in the VS Code. Links discussions about code to your code. Integrates w/ Slack, Jira, Trello, and Live Share.  [Try it free](https://codestream.com/?utm_source=vscmarket&utm_medium=banner&utm_campaign=onedarkpro).

# Docs & Contribute

This document
([https://binaryify.github.io/OneDark-Pro/](https://binaryify.github.io/OneDark-Pro/))
includes instructions on how to install and edit the theme.

To help with documentation, first fork and clone this repository.

`cd` to the `OneDark-Pro` folder

Run `npm install`

Then run
`npm run docs` to serve the documentation
locally at `localhost:3000`.

# ScreenShot

![Screenshot](https://camo.githubusercontent.com/48f39d862900e54913410490e566a9e761bc5ad5/68747470733a2f2f7773332e73696e61696d672e636e2f6c617267652f303036744e6252776779316676776b7236693139396a33316b7731366f7461742e6a7067)

![Screenshot](https://camo.githubusercontent.com/fde179ff0b0b0f1c87059726a29fcb9115a1f199/68747470733a2f2f7773322e73696e61696d672e636e2f6c617267652f303036744e6252776779316676776b727632726f726a33316b7731366f6468772e6a7067)

![ScreenShot](https://raw.githubusercontent.com/Binaryify/OneDark-Pro/master/static/screenshot1.png)

![ScreenShot](https://raw.githubusercontent.com/Binaryify/OneDark-Pro/master/static/php.png)

![ScreenShot](https://raw.githubusercontent.com/Binaryify/OneDark-Pro/master/static/screenshot2.png)

![ScreenShot](https://raw.githubusercontent.com/Binaryify/OneDark-Pro/master/static/js.png)

![ScreenShot](https://raw.githubusercontent.com/Binaryify/OneDark-Pro/master/static/cpp.png)

## Tweaks &  theming

If you want to play around with new colors, use the setting
`workbench.colorCustomizations` to customize the currently selected theme. For
example, you can add this snippet in your "settings.json" file:

```json
"workbench.colorCustomizations":{
    "tab.activeBackground": "#282c34",
    "activityBar.background": "#282c34",
    "sideBar.background": "#282c34"
}
```

or use the setting `editor.tokenColorCustomizations`

```json
"editor.tokenColorCustomizations":{
    "[One Dark Pro]": {
      "textMateRules": [
        {
          "scope":["source.python"],
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


![setting.json](https://camo.githubusercontent.com/e3931303eec6fbfb79c424cd30ca2d50f49c8416/68747470733a2f2f7773342e73696e61696d672e636e2f6c617267652f303036744e6252776779316676776a6f716e6274676a33316b773130317768762e6a7067)

![custom](https://camo.githubusercontent.com/179963baf6ded2934ec5dba08a65f61ca8d0b34f/68747470733a2f2f7773332e73696e61696d672e636e2f6c617267652f303036744e6252776779316676776a70776e7137626a33307175313477337a722e6a7067)

[More info](https://code.visualstudio.com/updates/v1_15#_user-definable-syntax-highlighting-colors)

## Contributors
This project exists thanks to all the people who contribute. 
[![Contributors](https://opencollective.com/OneDark-Pro/contributors.svg?width=890)](https://github.com/Binaryify/OneDark-Pro/graphs/contributors)


## Backers

<a href="https://opencollective.com/onedark-pro#backers" target="_blank"><img src="https://opencollective.com/onedark-pro/backers.svg?width=890"></a>


## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. 
<a href="https://opencollective.com/onedark-pro#sponsor" target="_blank">
<img src="https://opencollective.com/onedark-pro/sponsor.svg?width=890">
</a>
