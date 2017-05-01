# OneDark Pro 

## About
[OneDark-Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme) is one of the most famous theme for VS Code, this document will tell you how to install and apply this theme on VS Code, and even how to design this theme by yourself! 

## Install
Launch VS Code Quick Open `ctrl(⌘) + P`, then paste the following command, and press enter.
```
ext install OneDark Pro
```

![ScreenShot](https://raw.githubusercontent.com/Binaryify/OneDark-Pro/master/static/screenshot3.png)

## Apply
First, you should press `ctrl(⌘) + k`, then press `ctrl(⌘) + t`, and you will see a theme selection interface, choose **'OneDark-Pro'**, and press enter, you will find your VS Code color has change, that mean you apply this theme successfuly!

![ScreenShot](https://raw.githubusercontent.com/Binaryify/OneDark-Pro/master/static/screenshot4.png)

## Design 
If you have more better idea about this theme, you can change it by youselft!  
### Find the VS Code extends path 
First you should find the VS Code extends path  
- Windows:
`C:\Users\yourUserName\.vscode\extensions`  

- Mac/linux:
`~/.vscode/extensions/`

Then you should cd to this theme path and use VS Code open it

![ScreenShot](https://raw.githubusercontent.com/Binaryify/OneDark-Pro/master/static/screenshot5.png)

Then you should open the 'themes/OneDark-Pro.tmTheme' path

![ScreenShot](https://raw.githubusercontent.com/Binaryify/OneDark-Pro/master/static/screenshot6.png)

You will find the .tmTheme file is a XML file, and you will find it include scope and color value  

### Code snippet tmTheme file format 
The following is a code snippet tmTheme file format:
![ScreenShot](https://raw.githubusercontent.com/Binaryify/OneDark-Pro/master/static/screenshot7.png)

### Principle
Editor after parsing, the code will specify a scope for each element, the scope which suggest that this element is a keyword or a constant, or is a punctuation, through tmTheme format file to define the scope of the text style accordingly.

### Common scope list

The following are the common scope list

```
comment
constant
constant.character.escape
constant.language
constant.numeric
declaration.section entity.name.section
declaration.tag
deco.folding
entity.name.function
entity.name.tag
entity.name.type
entity.other.attribute-name
entity.other.inherited-class
invalid
invalid.deprecated.trailing-whitespace
keyword
keyword.control.import
keyword.operator.js
markup.heading
markup.list
markup.quote
meta.embedded
meta.preprocessor
meta.section entity.name.section
meta.tag
storage
storage.type.method
string
string source
string.unquoted
support.class
support.constant
support.function
support.type
support.variable
text source
variable
variable.language
variable.other
variable.parameter
```

Can be seen from the above code, actually this tmTheme format file seems to also pretty simple, beginners, however, the hard part is don't know how to write the scope, will it step by step instructions below.


### Get code scope
The following is the function to know the code scope:  
First,we should a tools to help inspect the scopes of a token and the matching theme rule  

Press `ctrl(⌘) + shift + P`, then press `dev`, choose **"Developer:Inspect TM Scopes"** option  

This will show you the token you are on and three sections:

- metadata used for rendering and operations such as comment line, etc.  

- the theme rule that matches and gives the foreground color to the token  

- the list of scopes the grammar produces for the token  

![ScreenShot](https://raw.githubusercontent.com/Binaryify/OneDark-Pro/master/static/screenshot8.png)
![ScreenShot](https://raw.githubusercontent.com/Binaryify/OneDark-Pro/master/static/screenshot9.png)

### Add/Change code color
Now you know the rules for the theme, you just need the code scope and the hex color you want, then edit the tmTheme file, add/change code snippet like this:

```xml
<dict>
  <key>name</key>
  <string>c++ function</string>
  <key>scope</key>
  <string>meta.function.c</string>
  <key>settings</key>
  <dict>
    <key>foreground</key>
    <string>#e06c75ff</string>
  </dict>
</dict>
```
### Reload
Then press `ctrl(⌘) + shift + P`, input **'reload'** and press `enter`, you will find the color of the code had change after the window reload

![screenshot](https://raw.githubusercontent.com/Binaryify/OneDark-Pro/master/static/screenshot13.png)

### Commonly used color
The following are my commonly used color:
- Whiskey : `#D19A66` (constant)
- Fountain Blue : `#56B6C2` (console)
- Chalky : `#E5C07B` (constant)
- Soft Purple : `#C678DD` (url,keyword)
- Malibu : `#61AFEF` (function)
- Pistachio : `#98C379` (string)
- Cadet Blue : `#ABB2BF` (text)
- Froly : `#E06C75` (variable)

![screenshot](https://raw.githubusercontent.com/Binaryify/OneDark-Pro/master/static/screenshot10.png)

## Workbench theming
If you want to play around with new colors, use the setting workbench.experimental.colorCustomizations to customize the currently selected theme.
Your can add this snippet in your "settings.json" file   
```json
"workbench.experimental.colorCustomizations":{
  "activeTabBackground": "#282c34",
  "activityBarBackground":"#282c34",
  "editorGroupBackground": "#282c34",
  "sideBarBackground": "#282c34"
}
```

## Contribute
Now you know how to design the theme
You can fork my theme, and send a pull request with you version to me, I will review it and merge it or design your theme and publish the VS Code market, here the official docs to publish your theme [https://code.visualstudio.com/docs/extensions/themes-snippets-colorizers](https://code.visualstudio.com/docs/extensions/themes-snippets-colorizers)  





Try it ~