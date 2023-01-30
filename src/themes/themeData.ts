enum colorType {
  chalky = 'chalky',
  coral = 'coral',
  dark = 'dark',
  error = 'error',
  fountainBlue = 'fountainBlue',
  green = 'green',
  invalid = 'invalid',
  lightDark = 'lightDark',
  lightWhite = 'lightWhite',
  malibu = 'malibu',
  purple = 'purple',
  whiskey = 'whiskey',
  deepRed = 'deepRed',
}

export default {
  textColors: {
    classic: {
      chalky: '#e5c07b',
      coral: '#e06c75',
      dark: '#5c6370',
      error: '#f44747',
      fountainBlue: '#56b6c2',
      green: '#98c379',
      invalid: '#ffffff',
      lightDark: '#7f848e',
      lightWhite: '#abb2bf',
      malibu: '#61afef',
      purple: '#c678dd',
      whiskey: '#d19a66',
      deepRed: '#BE5046',
    },
    vivid: {
      chalky: '#e5c07b',
      coral: '#ef596f',
      dark: '#5c6370',
      error: '#f44747',
      fountainBlue: '#2bbac5',
      green: '#89ca78',
      invalid: '#ffffff',
      lightDark: '#7f848e',
      lightWhite: '#abb2bf',
      malibu: '#61afef',
      purple: '#d55fde',
      whiskey: '#d19a66',
      deepRed: '#BE5046',
    },
  },
  editorThemes: {
    Ayu: () => import('./data/ayu'),
    Nord: () => import('./data/nord'),
    'One Dark Pro': () => import('./data/oneDarkPro'),
    'One Dark Pro Flat': () => import('./data/oneDarkProFlat'),
    'One Dark Pro Darker': () => import('./data/oneDarkProDarker'),
    'One Dark Pro Mix': () => import('./data/oneDarkProMix'),
    Panda: () => import('./data/panda'),
    Solarized: () => import('./data/solarized'),
    'Solarized Flat': () => import('./data/solarizedFlat'),
    Shadow: () => import('./data/shadow'),
    'VS Code': () => import('./data/vscode'),
    'Just Black': () => import('./data/justBlack'),
    Ocean: () => import('./data/ocean'),
    Tokyo: () => import('./data/tokyo'),
    Retro: () => import('./data/retro'),
    Gnome: () => import('./data/gnome'),
  },
  tokenColors: {
    default: [
      {
        scope: 'meta.embedded',
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        name: 'unison punctuation',
        scope:
          'punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison',
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'haskell variable generic-type',
        scope: 'variable.other.generic-type.haskell',
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'haskell storage type',
        scope: 'storage.type.haskell',
        settings: {
          foreground: colorType.whiskey,
        },
      },
      {
        name: 'support.variable.magic.python',
        scope: 'support.variable.magic.python',
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'punctuation.separator.parameters.python',
        scope:
          'punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python',
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        name: 'variable.parameter.function.language.special.self.python',
        scope: 'variable.parameter.function.language.special.self.python',
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'variable.parameter.function.language.special.cls.python',
        scope: 'variable.parameter.function.language.special.cls.python',
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'storage.modifier.lifetime.rust',
        scope: 'storage.modifier.lifetime.rust',
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        name: 'support.function.std.rust',
        scope: 'support.function.std.rust',
        settings: {
          foreground: colorType.malibu,
        },
      },
      {
        name: 'entity.name.lifetime.rust',
        scope: 'entity.name.lifetime.rust',
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'variable.language.rust',
        scope: 'variable.language.rust',
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'support.constant.edge',
        scope: 'support.constant.edge',
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'regexp constant character-class',
        scope: 'constant.other.character-class.regexp',
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'keyword.operator',
        scope: ['keyword.operator.word'],
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'regexp operator.quantifier',
        scope: 'keyword.operator.quantifier.regexp',
        settings: {
          foreground: colorType.whiskey,
        },
      },
      {
        name: 'Text',
        scope: 'variable.parameter.function',
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        name: 'Comment Markup Link',
        scope: 'comment markup.link',
        settings: {
          foreground: colorType.dark,
        },
      },
      {
        name: 'markup diff',
        scope: 'markup.changed.diff',
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'diff',
        scope:
          'meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff',
        settings: {
          foreground: colorType.malibu,
        },
      },
      {
        name: 'inserted.diff',
        scope: 'markup.inserted.diff',
        settings: {
          foreground: colorType.green,
        },
      },
      {
        name: 'deleted.diff',
        scope: 'markup.deleted.diff',
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'c++ function',
        scope: 'meta.function.c,meta.function.cpp',
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'c++ block',
        scope:
          'punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c',
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        name: 'js/ts punctuation separator key-value',
        scope: 'punctuation.separator.key-value',
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        name: 'js/ts import keyword',
        scope: 'keyword.operator.expression.import',
        settings: {
          foreground: colorType.malibu,
        },
      },
      {
        name: 'math js/ts',
        scope: 'support.constant.math',
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'math property js/ts',
        scope: 'support.constant.property.math',
        settings: {
          foreground: colorType.whiskey,
        },
      },
      {
        name: 'js/ts variable.other.constant',
        scope: 'variable.other.constant',
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'java type',
        scope: [
          'storage.type.annotation.java',
          'storage.type.object.array.java',
        ],
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'java source',
        scope: 'source.java',
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'java modifier.import',
        scope:
          'punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java',
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        name: 'java modifier.import',
        scope: 'meta.method.java',
        settings: {
          foreground: colorType.malibu,
        },
      },
      {
        name: 'java modifier.import',
        scope:
          'storage.modifier.import.java,storage.type.java,storage.type.generic.java',
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'java instanceof',
        scope: 'keyword.operator.instanceof.java',
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'java variable.name',
        scope: 'meta.definition.variable.name.java',
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'operator logical',
        scope: 'keyword.operator.logical',
        settings: {
          foreground: colorType.fountainBlue,
        },
      },
      {
        name: 'operator bitwise',
        scope: 'keyword.operator.bitwise',
        settings: {
          foreground: colorType.fountainBlue,
        },
      },
      {
        name: 'operator channel',
        scope: 'keyword.operator.channel',
        settings: {
          foreground: colorType.fountainBlue,
        },
      },
      {
        name: 'support.constant.property-value.scss',
        scope:
          'support.constant.property-value.scss,support.constant.property-value.css',
        settings: {
          foreground: colorType.whiskey,
        },
      },
      {
        name: 'CSS/SCSS/LESS Operators',
        scope:
          'keyword.operator.css,keyword.operator.scss,keyword.operator.less',
        settings: {
          foreground: colorType.fountainBlue,
        },
      },
      {
        name: 'css color standard name',
        scope:
          'support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss',
        settings: {
          foreground: colorType.whiskey,
        },
      },
      {
        name: 'css comma',
        scope: 'punctuation.separator.list.comma.css',
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        name: 'css attribute-name.id',
        scope: 'support.constant.color.w3c-standard-color-name.css',
        settings: {
          foreground: colorType.whiskey,
        },
      },
      {
        name: 'css property-name',
        scope: 'support.type.vendored.property-name.css',
        settings: {
          foreground: colorType.fountainBlue,
        },
      },
      {
        name: 'js/ts module',
        scope:
          'support.module.node,support.type.object.module,support.module.node',
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'entity.name.type.module',
        scope: 'entity.name.type.module',
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'js variable readwrite',
        scope:
          'variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node',
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'js/ts json',
        scope: 'support.constant.json',
        settings: {
          foreground: colorType.whiskey,
        },
      },
      {
        name: 'js/ts Keyword',
        scope: [
          'keyword.operator.expression.instanceof',
          'keyword.operator.new',
          'keyword.operator.ternary',
          'keyword.operator.optional',
          'keyword.operator.expression.keyof',
        ],
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'js/ts console',
        scope: 'support.type.object.console',
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'js/ts support.variable.property.process',
        scope: 'support.variable.property.process',
        settings: {
          foreground: colorType.whiskey,
        },
      },
      {
        name: 'js console function',
        scope: 'entity.name.function,support.function.console',
        settings: {
          foreground: colorType.malibu,
        },
      },
      {
        name: 'keyword.operator.misc.rust',
        scope: 'keyword.operator.misc.rust',
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        name: 'keyword.operator.sigil.rust',
        scope: 'keyword.operator.sigil.rust',
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'operator',
        scope: 'keyword.operator.delete',
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'js dom',
        scope: 'support.type.object.dom',
        settings: {
          foreground: colorType.fountainBlue,
        },
      },
      {
        name: 'js dom variable',
        scope: 'support.variable.dom,support.variable.property.dom',
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'keyword.operator',
        scope:
          'keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational',
        settings: {
          foreground: colorType.fountainBlue,
        },
      },
      {
        name: 'C operator assignment',
        scope:
          'keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp',
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'Punctuation',
        scope: 'punctuation.separator.delimiter',
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        name: 'Other punctuation .c',
        scope: 'punctuation.separator.c,punctuation.separator.cpp',
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'C type posix-reserved',
        scope: 'support.type.posix-reserved.c,support.type.posix-reserved.cpp',
        settings: {
          foreground: colorType.fountainBlue,
        },
      },
      {
        name: 'keyword.operator.sizeof.c',
        scope: 'keyword.operator.sizeof.c,keyword.operator.sizeof.cpp',
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'python parameter',
        scope: 'variable.parameter.function.language.python',
        settings: {
          foreground: colorType.whiskey,
        },
      },
      {
        name: 'python type',
        scope: 'support.type.python',
        settings: {
          foreground: colorType.fountainBlue,
        },
      },
      {
        name: 'python logical',
        scope: 'keyword.operator.logical.python',
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'pyCs',
        scope: 'variable.parameter.function.python',
        settings: {
          foreground: colorType.whiskey,
        },
      },
      {
        name: 'python block',
        scope:
          'punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python',
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        name: 'python function-call.generic',
        scope: 'meta.function-call.generic.python',
        settings: {
          foreground: colorType.malibu,
        },
      },
      {
        name: 'python placeholder reset to normal string',
        scope: 'constant.character.format.placeholder.other.python',
        settings: {
          foreground: colorType.whiskey,
        },
      },
      {
        name: 'Operators',
        scope: 'keyword.operator',
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        name: 'Compound Assignment Operators',
        scope: 'keyword.operator.assignment.compound',
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'Compound Assignment Operators js/ts',
        scope:
          'keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts',
        settings: {
          foreground: colorType.fountainBlue,
        },
      },
      {
        name: 'Keywords',
        scope: 'keyword',
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'Namespaces',
        scope: 'entity.name.namespace',
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'Variables',
        scope: 'variable',
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'Variables',
        scope: 'variable.c',
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        name: 'Language variables',
        scope: 'variable.language',
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'Java Variables',
        scope: 'token.variable.parameter.java',
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        name: 'Java Imports',
        scope: 'import.storage.java',
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'Packages',
        scope: 'token.package.keyword',
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'Packages',
        scope: 'token.package',
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        name: 'Functions',
        scope: [
          'entity.name.function',
          'meta.require',
          'support.function.any-method',
          'variable.function',
        ],
        settings: {
          foreground: colorType.malibu,
        },
      },
      {
        name: 'Classes',
        scope: 'entity.name.type.namespace',
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'Classes',
        scope: 'support.class, entity.name.type.class',
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'Class name',
        scope: 'entity.name.class.identifier.namespace.type',
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'Class name',
        scope: [
          'entity.name.class',
          'variable.other.class.js',
          'variable.other.class.ts',
        ],
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'Class name php',
        scope: 'variable.other.class.php',
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'Type Name',
        scope: 'entity.name.type',
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'Keyword Control',
        scope: 'keyword.control',
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'Control Elements',
        scope: 'control.elements, keyword.operator.less',
        settings: {
          foreground: colorType.whiskey,
        },
      },
      {
        name: 'Methods',
        scope: 'keyword.other.special-method',
        settings: {
          foreground: colorType.malibu,
        },
      },
      {
        name: 'Storage',
        scope: 'storage',
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'Storage JS TS',
        scope: 'token.storage',
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void',
        scope:
          'keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void',
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'Java Storage',
        scope: 'token.storage.type.java',
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'Support',
        scope: 'support.function',
        settings: {
          foreground: colorType.fountainBlue,
        },
      },
      {
        name: 'Support type',
        scope: 'support.type.property-name',
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        name: '[VSCODE-CUSTOM] toml support',
        scope:
          'support.type.property-name.toml, support.type.property-name.table.toml, support.type.property-name.array.toml',
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'Support type',
        scope: 'support.constant.property-value',
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        name: 'Support type',
        scope: 'support.constant.font-name',
        settings: {
          foreground: colorType.whiskey,
        },
      },
      {
        name: 'Meta tag',
        scope: 'meta.tag',
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        name: 'Strings',
        scope: 'string',
        settings: {
          foreground: colorType.green,
        },
      },
      {
        name: 'Constant other symbol',
        scope: 'constant.other.symbol',
        settings: {
          foreground: colorType.fountainBlue,
        },
      },
      {
        name: 'Integers',
        scope: 'constant.numeric',
        settings: {
          foreground: colorType.whiskey,
        },
      },
      {
        name: 'Constants',
        scope: 'constant',
        settings: {
          foreground: colorType.whiskey,
        },
      },
      {
        name: 'Constants',
        scope: 'punctuation.definition.constant',
        settings: {
          foreground: colorType.whiskey,
        },
      },
      {
        name: 'Tags',
        scope: 'entity.name.tag',
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'Attributes',
        scope: 'entity.other.attribute-name',
        settings: {
          foreground: colorType.whiskey,
        },
      },
      {
        name: 'Attribute IDs',
        scope: 'entity.other.attribute-name.id',
        settings: {
          foreground: colorType.malibu,
        },
      },
      {
        name: 'Attribute class',
        scope: 'entity.other.attribute-name.class.css',
        settings: {
          foreground: colorType.whiskey,
        },
      },
      {
        name: 'Selector',
        scope: 'meta.selector',
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'Headings',
        scope: 'markup.heading',
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'Headings',
        scope:
          'markup.heading punctuation.definition.heading, entity.name.section',
        settings: {
          foreground: colorType.malibu,
        },
      },
      {
        name: 'Units',
        scope: 'keyword.other.unit',
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'Bold',
        scope: 'markup.bold,todo.bold',
        settings: {
          foreground: colorType.whiskey,
        },
      },
      {
        name: 'Bold',
        scope: 'punctuation.definition.bold',
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'markup Italic',
        scope: 'markup.italic, punctuation.definition.italic,todo.emphasis',
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'emphasis md',
        scope: 'emphasis md',
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown headings',
        scope: 'entity.name.section.markdown',
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown heading Punctuation Definition',
        scope: 'punctuation.definition.heading.markdown',
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'punctuation.definition.list.begin.markdown',
        scope: 'punctuation.definition.list.begin.markdown',
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown heading setext',
        scope: 'markup.heading.setext',
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown Punctuation Definition Bold',
        scope: 'punctuation.definition.bold.markdown',
        settings: {
          foreground: colorType.whiskey,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown Inline Raw',
        scope: 'markup.inline.raw.markdown',
        settings: {
          foreground: colorType.green,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown Inline Raw',
        scope: 'markup.inline.raw.string.markdown',
        settings: {
          foreground: colorType.green,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown Inline Raw punctuation',
        scope: 'punctuation.definition.raw.markdown',
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown List Punctuation Definition',
        scope: 'punctuation.definition.list.markdown',
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown Punctuation Definition String',
        scope: [
          'punctuation.definition.string.begin.markdown',
          'punctuation.definition.string.end.markdown',
          'punctuation.definition.metadata.markdown',
        ],
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'beginning.punctuation.definition.list.markdown',
        scope: ['beginning.punctuation.definition.list.markdown'],
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown Punctuation Definition Link',
        scope: 'punctuation.definition.metadata.markdown',
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown Underline Link/Image',
        scope:
          'markup.underline.link.markdown,markup.underline.link.image.markdown',
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown Link Title/Description',
        scope:
          'string.other.link.title.markdown,string.other.link.description.markdown',
        settings: {
          foreground: colorType.malibu,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Asciidoc Inline Raw',
        scope: 'markup.raw.monospace.asciidoc',
        settings: {
          foreground: colorType.green,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Asciidoc Inline Raw Punctuation Definition',
        scope: 'punctuation.definition.asciidoc',
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Asciidoc List Punctuation Definition',
        scope: 'markup.list.asciidoc',
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Asciidoc underline link',
        scope: 'markup.link.asciidoc,markup.other.url.asciidoc',
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Asciidoc link name',
        scope: 'string.unquoted.asciidoc,markup.other.url.asciidoc',
        settings: {
          foreground: colorType.malibu,
        },
      },
      {
        name: 'Regular Expressions',
        scope: 'string.regexp',
        settings: {
          foreground: colorType.fountainBlue,
        },
      },
      {
        name: 'Embedded',
        scope: 'punctuation.section.embedded, variable.interpolation',
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'Embedded',
        scope:
          'punctuation.section.embedded.begin,punctuation.section.embedded.end',
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'illegal',
        scope: 'invalid.illegal',
        settings: {
          foreground: colorType.invalid,
        },
      },
      {
        name: 'illegal',
        scope: 'invalid.illegal.bad-ampersand.html',
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        scope: 'invalid.illegal.unrecognized-tag.html',
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'Broken',
        scope: 'invalid.broken',
        settings: {
          foreground: colorType.invalid,
        },
      },
      {
        name: 'Deprecated',
        scope: 'invalid.deprecated',
        settings: {
          foreground: colorType.invalid,
        },
      },
      {
        name: 'html Deprecated',
        scope: 'invalid.deprecated.entity.other.attribute-name.html',
        settings: {
          foreground: colorType.whiskey,
        },
      },
      {
        name: 'Unimplemented',
        scope: 'invalid.unimplemented',
        settings: {
          foreground: colorType.invalid,
        },
      },
      {
        name: 'Source Json Meta Structure Dictionary Json > String Quoted Json',
        scope:
          'source.json meta.structure.dictionary.json > string.quoted.json',
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String',
        scope:
          'source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string',
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation',
        scope:
          'source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation',
        settings: {
          foreground: colorType.green,
        },
      },
      {
        name: 'Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json',
        scope:
          'source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json',
        settings: {
          foreground: colorType.fountainBlue,
        },
      },
      {
        name: '[VSCODE-CUSTOM] JSON Property Name',
        scope: 'support.type.property-name.json',
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: '[VSCODE-CUSTOM] JSON Punctuation for Property Name',
        scope: 'support.type.property-name.json punctuation',
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'laravel blade tag',
        scope:
          'text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade',
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'laravel blade @',
        scope:
          'text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade',
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'use statement for other classes',
        scope:
          'support.other.namespace.use.php,support.other.namespace.use-as.php,entity.other.alias.php,meta.interface.php',
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'error suppression',
        scope: 'keyword.operator.error-control.php',
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'php instanceof',
        scope: 'keyword.operator.type.php',
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'style double quoted array index normal begin',
        scope: 'punctuation.section.array.begin.php',
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        name: 'style double quoted array index normal end',
        scope: 'punctuation.section.array.end.php',
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        name: 'php illegal.non-null-typehinted',
        scope: 'invalid.illegal.non-null-typehinted.php',
        settings: {
          foreground: colorType.error,
        },
      },
      {
        name: 'php types',
        scope:
          'storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php',
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'php call-function',
        scope:
          'meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php',
        settings: {
          foreground: colorType.malibu,
        },
      },
      {
        name: 'php function-resets',
        scope:
          'punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php',
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        name: 'support php constants',
        scope: 'support.constant.core.rust',
        settings: {
          foreground: colorType.whiskey,
        },
      },
      {
        name: 'support php constants',
        scope:
          'support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php',
        settings: {
          foreground: colorType.whiskey,
        },
      },
      {
        name: 'php goto',
        scope: 'entity.name.goto-label.php,support.other.php',
        settings: {
          foreground: colorType.malibu,
        },
      },
      {
        name: 'php logical/bitwise operator',
        scope:
          'keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php',
        settings: {
          foreground: colorType.fountainBlue,
        },
      },
      {
        name: 'php regexp operator',
        scope: 'keyword.operator.regexp.php',
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'php comparison',
        scope: 'keyword.operator.comparison.php',
        settings: {
          foreground: colorType.fountainBlue,
        },
      },
      {
        name: 'php heredoc/nowdoc',
        scope: 'keyword.operator.heredoc.php,keyword.operator.nowdoc.php',
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'python function decorator @',
        scope: 'meta.function.decorator.python',
        settings: {
          foreground: colorType.malibu,
        },
      },
      {
        name: 'python function support',
        scope:
          'support.token.decorator.python,meta.function.decorator.identifier.python',
        settings: {
          foreground: colorType.fountainBlue,
        },
      },
      {
        name: 'parameter function js/ts',
        scope: 'function.parameter',
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        name: 'brace function',
        scope: 'function.brace',
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        name: 'parameter function ruby cs',
        scope: 'function.parameter.ruby, function.parameter.cs',
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        name: 'constant.language.symbol.ruby',
        scope: 'constant.language.symbol.ruby',
        settings: {
          foreground: colorType.fountainBlue,
        },
      },
      {
        name: 'constant.language.symbol.hashkey.ruby',
        scope: 'constant.language.symbol.hashkey.ruby',
        settings: {
          foreground: colorType.fountainBlue,
        },
      },
      {
        name: 'rgb-value',
        scope: 'rgb-value',
        settings: {
          foreground: colorType.fountainBlue,
        },
      },
      {
        name: 'rgb value',
        scope: 'inline-color-decoration rgb-value',
        settings: {
          foreground: colorType.whiskey,
        },
      },
      {
        name: 'rgb value less',
        scope: 'less rgb-value',
        settings: {
          foreground: colorType.whiskey,
        },
      },
      {
        name: 'sass selector',
        scope: 'selector.sass',
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'ts primitive/builtin types',
        scope:
          'support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx',
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'block scope',
        scope: 'block.scope.end,block.scope.begin',
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        name: 'cs storage type',
        scope: 'storage.type.cs',
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'cs local variable',
        scope: 'entity.name.variable.local.cs',
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        scope: 'token.info-token',
        settings: {
          foreground: colorType.malibu,
        },
      },
      {
        scope: 'token.warn-token',
        settings: {
          foreground: colorType.whiskey,
        },
      },
      {
        scope: 'token.error-token',
        settings: {
          foreground: colorType.error,
        },
      },
      {
        scope: 'token.debug-token',
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'String interpolation',
        scope: [
          'punctuation.definition.template-expression.begin',
          'punctuation.definition.template-expression.end',
          'punctuation.section.embedded',
        ],
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'Reset JavaScript string interpolation expression',
        scope: ['meta.template.expression'],
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        name: 'Import module JS',
        scope: ['keyword.operator.module'],
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'js Flowtype',
        scope: ['support.type.type.flowtype'],
        settings: {
          foreground: colorType.malibu,
        },
      },
      {
        name: 'js Flow',
        scope: ['support.type.primitive'],
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'js class prop',
        scope: ['meta.property.object'],
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'js func parameter',
        scope: ['variable.parameter.function.js'],
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'js template literals begin',
        scope: ['keyword.other.template.begin'],
        settings: {
          foreground: colorType.green,
        },
      },
      {
        name: 'js template literals end',
        scope: ['keyword.other.template.end'],
        settings: {
          foreground: colorType.green,
        },
      },
      {
        name: 'js template literals variable braces begin',
        scope: ['keyword.other.substitution.begin'],
        settings: {
          foreground: colorType.green,
        },
      },
      {
        name: 'js template literals variable braces end',
        scope: ['keyword.other.substitution.end'],
        settings: {
          foreground: colorType.green,
        },
      },
      {
        name: 'js operator.assignment',
        scope: ['keyword.operator.assignment'],
        settings: {
          foreground: colorType.fountainBlue,
        },
      },
      {
        name: 'go operator',
        scope: ['keyword.operator.assignment.go'],
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'go operator',
        scope: [
          'keyword.operator.arithmetic.go',
          'keyword.operator.address.go',
        ],
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'Go package name',
        scope: ['entity.name.package.go'],
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'elm prelude',
        scope: ['support.type.prelude.elm'],
        settings: {
          foreground: colorType.fountainBlue,
        },
      },
      {
        name: 'elm constant',
        scope: ['support.constant.elm'],
        settings: {
          foreground: colorType.whiskey,
        },
      },
      {
        name: 'template literal',
        scope: ['punctuation.quasi.element'],
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'html/pug (jade) escaped characters and entities',
        scope: ['constant.character.entity'],
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour',
        scope: [
          'entity.other.attribute-name.pseudo-element',
          'entity.other.attribute-name.pseudo-class',
        ],
        settings: {
          foreground: colorType.fountainBlue,
        },
      },
      {
        name: 'Clojure globals',
        scope: ['entity.global.clojure'],
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'Clojure symbols',
        scope: ['meta.symbol.clojure'],
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'Clojure constants',
        scope: ['constant.keyword.clojure'],
        settings: {
          foreground: colorType.fountainBlue,
        },
      },
      {
        name: 'CoffeeScript Function Argument',
        scope: ['meta.arguments.coffee', 'variable.parameter.function.coffee'],
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'Ini Default Text',
        scope: ['source.ini'],
        settings: {
          foreground: colorType.green,
        },
      },
      {
        name: 'Makefile prerequisities',
        scope: ['meta.scope.prerequisites.makefile'],
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'Makefile text colour',
        scope: ['source.makefile'],
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'Groovy import names',
        scope: ['storage.modifier.import.groovy'],
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'Groovy Methods',
        scope: ['meta.method.groovy'],
        settings: {
          foreground: colorType.malibu,
        },
      },
      {
        name: 'Groovy Variables',
        scope: ['meta.definition.variable.name.groovy'],
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'Groovy Inheritance',
        scope: ['meta.definition.class.inherited.classes.groovy'],
        settings: {
          foreground: colorType.green,
        },
      },
      {
        name: 'HLSL Semantic',
        scope: ['support.variable.semantic.hlsl'],
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'HLSL Types',
        scope: [
          'support.type.texture.hlsl',
          'support.type.sampler.hlsl',
          'support.type.object.hlsl',
          'support.type.object.rw.hlsl',
          'support.type.fx.hlsl',
          'support.type.object.hlsl',
        ],
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'SQL Variables',
        scope: ['text.variable', 'text.bracketed'],
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'types',
        scope: ['support.type.swift', 'support.type.vb.asp'],
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'heading 1, keyword',
        scope: ['entity.name.function.xi'],
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'heading 2, callable',
        scope: ['entity.name.class.xi'],
        settings: {
          foreground: colorType.fountainBlue,
        },
      },
      {
        name: 'heading 3, property',
        scope: ['constant.character.character-class.regexp.xi'],
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'heading 4, type, class, interface',
        scope: ['constant.regexp.xi'],
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        name: 'heading 5, enums, preprocessor, constant, decorator',
        scope: ['keyword.control.xi'],
        settings: {
          foreground: colorType.fountainBlue,
        },
      },
      {
        name: 'heading 6, number',
        scope: ['invalid.xi'],
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        name: 'string',
        scope: ['beginning.punctuation.definition.quote.markdown.xi'],
        settings: {
          foreground: colorType.green,
        },
      },
      {
        name: 'comments',
        scope: ['beginning.punctuation.definition.list.markdown.xi'],
        settings: {
          foreground: colorType.lightDark,
        },
      },
      {
        name: 'link',
        scope: ['constant.character.xi'],
        settings: {
          foreground: colorType.malibu,
        },
      },
      {
        name: 'accent',
        scope: ['accent.xi'],
        settings: {
          foreground: colorType.malibu,
        },
      },
      {
        name: 'wikiword',
        scope: ['wikiword.xi'],
        settings: {
          foreground: colorType.whiskey,
        },
      },
      {
        name: "language operators like '+', '-' etc",
        scope: ['constant.other.color.rgb-value.xi'],
        settings: {
          foreground: colorType.invalid,
        },
      },
      {
        name: 'elements to dim',
        scope: ['punctuation.definition.tag.xi'],
        settings: {
          foreground: colorType.dark,
        },
      },
      {
        name: 'C++/C#',
        scope: [
          'entity.name.label.cs',
          'entity.name.scope-resolution.function.call',
          'entity.name.scope-resolution.function.definition',
        ],
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'Markdown underscore-style headers',
        scope: [
          'entity.name.label.cs',
          'markup.heading.setext.1.markdown',
          'markup.heading.setext.2.markdown',
        ],
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'meta.brace.square',
        scope: [' meta.brace.square'],
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        name: 'Comments',
        scope: 'comment, punctuation.definition.comment',
        settings: {
          foreground: colorType.lightDark,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown Quote',
        scope: 'markup.quote.markdown',
        settings: {
          foreground: colorType.dark,
        },
      },
      {
        name: 'punctuation.definition.block.sequence.item.yaml',
        scope: 'punctuation.definition.block.sequence.item.yaml',
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        scope: [
          'constant.language.symbol.elixir',
          'constant.language.symbol.double-quoted.elixir',
        ],
        settings: {
          foreground: colorType.fountainBlue,
        },
      },
      {
        scope: ['entity.name.variable.parameter.cs'],
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        scope: ['entity.name.variable.field.cs'],
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'Deleted',
        scope: 'markup.deleted',
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'Inserted',
        scope: 'markup.inserted',
        settings: {
          foreground: colorType.green,
        },
      },
      {
        name: 'Underline',
        scope: 'markup.underline',
        settings: {
          fontStyle: 'underline',
        },
      },
      {
        name: 'punctuation.section.embedded.begin.php',
        scope: [
          'punctuation.section.embedded.begin.php',
          'punctuation.section.embedded.end.php',
        ],
        settings: {
          foreground: colorType.deepRed,
        },
      },
      {
        name: 'support.other.namespace.php',
        scope: ['support.other.namespace.php'],
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        name: 'variable.other.object',
        scope: ['variable.other.object'],
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'variable.other.constant.property',
        scope: ['variable.other.constant.property'],
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'entity.other.inherited-class',
        scope: ['entity.other.inherited-class'],
        settings: {
          foreground: colorType.chalky,
        },
      },
      {
        name: 'c variable readwrite',
        scope: 'variable.other.readwrite.c',
        settings: {
          foreground: colorType.coral,
        },
      },
      {
        name: 'php scope',
        scope:
          'entity.name.variable.parameter.php,punctuation.separator.colon.php,constant.other.php',
        settings: {
          foreground: colorType.lightWhite,
        },
      },
      {
        name: 'Assembly',
        scope: ['constant.numeric.decimal.asm.x86_64'],
        settings: {
          foreground: colorType.purple,
        },
      },
      {
        scope: ['support.other.parenthesis.regexp'],
        settings: {
          foreground: colorType.whiskey,
        },
      },
      {
        scope: ['constant.character.escape'],
        settings: {
          foreground: colorType.fountainBlue,
        },
      },
      {
        scope: ['string.regexp'],
        settings: {
          foreground: colorType.coral,
        },
      },
    ],
    bold: [
      {
        name: 'Markup: Heading',
        scope: 'markup.heading',
        settings: {
          fontStyle: 'bold',
        },
      },
      {
        name: 'Markup: Strong',
        scope: 'markup.bold',
        settings: {
          fontStyle: 'bold',
        },
      },
      {
        name: 'Sections',
        scope: 'entity.name.section',
        settings: {
          fontStyle: 'bold',
        },
      },
      {
        name: 'CSS: Important Keyword',
        scope: 'keyword.other.important',
        settings: {
          fontStyle: 'bold',
        },
      },
      {
        name: 'Functions',
        scope: [
          'entity.name.function',
          'meta.require',
          'support.function.any-method',
          'variable.function',
        ],
        settings: {
          fontStyle: 'bold',
        },
      },
      {
        name: 'Classes',
        scope: 'entity.name.type.namespace',
        settings: {
          fontStyle: 'bold',
        },
      },
      {
        name: 'Headings',
        scope: 'markup.heading',
        settings: {
          fontStyle: 'bold',
        },
      },
      {
        name: 'Bold',
        scope: 'markup.bold,todo.bold',
        settings: {
          fontStyle: 'bold',
        },
      },
      {
        name: 'markup.bold.markdown',
        scope: 'markup.bold.markdown',
        settings: {
          fontStyle: 'bold',
        },
      },
    ],
    italic: [
      {
        name: 'Comments',
        scope: 'comment, punctuation.definition.comment',
        settings: {
          fontStyle: 'italic',
        },
      },
      {
        name: 'js/ts italic',
        scope:
          'entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super',
        settings: {
          fontStyle: 'italic',
        },
      },
      {
        name: 'comment',
        scope: 'comment.line.double-slash,comment.block.documentation',
        settings: {
          fontStyle: 'italic',
        },
      },
      {
        name: 'Python Keyword Control',
        scope:
          'keyword.control.import.python,keyword.control.flow.python,keyword.operator.logical.python',
        settings: {
          fontStyle: 'italic',
        },
      },
      {
        name: 'markup.italic.markdown',
        scope: 'markup.italic.markdown',
        settings: {
          fontStyle: 'italic',
        },
      },
    ],
  },
}
