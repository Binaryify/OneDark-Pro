type ThemeColors = Record<string, string>

function createModernUiTokens(colors: ThemeColors): ThemeColors {
  return {
    // Chat
    'chat.avatarBackground': colors['activityBarBadge.background'],
    'chat.avatarForeground': colors['activityBarBadge.foreground'],
    'chat.checkpointSeparator': colors['menu.separatorBackground'],
    'chat.editedFileForeground': colors['editorWarning.foreground'],
    'chat.linesAddedForeground': colors['terminal.ansiGreen'],
    'chat.linesRemovedForeground': colors['terminal.ansiRed'],
    'chat.requestBackground': colors['editor.lineHighlightBackground'],
    'chat.requestBorder': colors['editorHoverWidget.border'],
    'chat.requestBubbleBackground': '#6776961d',
    'chat.requestBubbleHoverBackground': '#6776963a',
    'chat.requestCodeBorder': colors['editor.selectionBackground'],
    'chat.slashCommandBackground': colors['editor.selectionBackground'],
    'chat.slashCommandForeground':
      colors['editorHoverWidget.highlightForeground'],
    'chat.thinkingShimmer': colors['activityBar.foreground'],
    'minimap.chatEditHighlight': colors['editor.selectionBackground'],

    // Inline Chat
    'inlineChat.background': colors['editorWidget.background'],
    'inlineChat.border': colors['editorHoverWidget.border'],
    'inlineChat.foreground': colors['editor.foreground'],
    'inlineChat.shadow': colors['scrollbar.shadow'],
    'inlineChatDiff.inserted': colors['diffEditor.insertedTextBackground'],
    'inlineChatDiff.removed': '#9A353D33',
    'editorMinimap.inlineChatInserted': colors['editorGutter.addedBackground'],
    'editorOverviewRuler.inlineChatInserted':
      colors['editorGutter.addedBackground'],
    'editorOverviewRuler.inlineChatRemoved':
      colors['editorGutter.deletedBackground'],
    'inlineChatInput.background': colors['input.background'],
    'inlineChatInput.border': colors['editorHoverWidget.border'],
    'inlineChatInput.focusBorder':
      colors['editorHoverWidget.highlightForeground'],
    'inlineChatInput.placeholderForeground':
      colors['titleBar.inactiveForeground'],

    // Agent sessions and the Agents window
    'agentSessionReadIndicator.foreground':
      colors['gitDecoration.ignoredResourceForeground'],
    'agentSessionSelectedBadge.border':
      colors['list.activeSelectionForeground'],
    'agentSessionSelectedUnfocusedBadge.border':
      colors['gitDecoration.ignoredResourceForeground'],
    'agentStatusIndicator.background': colors['list.hoverBackground'],
    'agents.background': colors['editor.background'],
    'agentsBadge.background': colors['activityBarBadge.background'],
    'agentsBadge.foreground': colors['activityBarBadge.foreground'],
    'agentsChatInput.background': colors['input.background'],
    'agentsChatInput.border': colors['editorGroup.border'],
    'agentsChatInput.focusBorder':
      colors['editorHoverWidget.highlightForeground'],
    'agentsChatInput.foreground': colors['input.foreground'],
    'agentsChatInput.placeholderForeground':
      colors['titleBar.inactiveForeground'],
    'agentsGradient.tintColor': colors['activityBarBadge.background'],
    'agentsNewSessionButton.background': colors['statusBar.debuggingBorder'],
    'agentsNewSessionButton.border': colors['editorGroup.border'],
    'agentsNewSessionButton.foreground': colors['editor.foreground'],
    'agentsNewSessionButton.hoverBackground': colors['list.hoverBackground'],
    'agentsPanel.background': colors['sideBar.background'],
    'agentsPanel.border': colors['panel.border'],
    'agentsPanel.foreground': colors['sideBar.foreground'],
    'agentsUnreadBadge.background': colors['activityBarBadge.background'],
    'agentsUnreadBadge.foreground': colors['activityBarBadge.foreground'],

    // Sticky Scroll
    'editorStickyScroll.background': colors['editor.background'],
    'editorStickyScroll.border': colors['editorGroup.border'],
    'editorStickyScroll.shadow': colors['scrollbar.shadow'],
    'editorStickyScrollGutter.background': colors['editor.background'],
    'editorStickyScrollHover.background':
      colors['editor.lineHighlightBackground'],
    'peekViewEditorStickyScroll.background':
      colors['peekViewEditor.background'],
    'peekViewEditorStickyScrollGutter.background':
      colors['peekViewEditor.background'],
    'sideBarStickyScroll.background': colors['sideBar.background'],
    'sideBarStickyScroll.border': colors['panel.border'],
    'sideBarStickyScroll.shadow': colors['scrollbar.shadow'],
    'terminalStickyScroll.background': colors['terminal.background'],
    'terminalStickyScroll.border': colors['terminal.border'],
    'terminalStickyScrollHover.background':
      colors['editor.lineHighlightBackground'],

    // Git and Source Control Graph
    'git.blame.editorDecorationForeground':
      colors['gitDecoration.ignoredResourceForeground'],
    'scmGraph.foreground1': colors['terminal.ansiYellow'],
    'scmGraph.foreground2': colors['terminal.ansiMagenta'],
    'scmGraph.foreground3': colors['terminal.ansiBlue'],
    'scmGraph.foreground4': colors['terminal.ansiCyan'],
    'scmGraph.foreground5': colors['terminal.ansiGreen'],
    'scmGraph.historyItemBaseRefColor': colors['terminal.ansiYellow'],
    'scmGraph.historyItemHoverAdditionsForeground':
      colors['terminal.ansiGreen'],
    'scmGraph.historyItemHoverDefaultLabelBackground':
      colors['list.focusBackground'],
    'scmGraph.historyItemHoverDefaultLabelForeground':
      colors['list.focusForeground'],
    'scmGraph.historyItemHoverDeletionsForeground': colors['terminal.ansiRed'],
    'scmGraph.historyItemHoverLabelForeground': colors['list.focusForeground'],
    'scmGraph.historyItemRefColor': colors['terminal.ansiBlue'],
    'scmGraph.historyItemRemoteRefColor': colors['terminal.ansiMagenta'],

    // Multi Diff Editor
    'multiDiffEditor.background': colors['editor.background'],
    'multiDiffEditor.border': colors['panel.border'],
    'multiDiffEditor.headerBackground': colors['panelSectionHeader.background'],
  }
}

export function withModernUiTokens<T extends ThemeColors>(colors: T) {
  const additions: ThemeColors = {}
  const modernUiTokens = createModernUiTokens(colors)

  for (const token in modernUiTokens) {
    if (!(token in colors)) {
      additions[token] = modernUiTokens[token]
    }
  }

  return {
    ...colors,
    ...additions,
  }
}
