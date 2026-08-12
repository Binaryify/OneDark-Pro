import mskelton from '@mskelton/eslint-config'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      'out/**',
      'styles/**',
      'docs/**',
      'themes/**',
      'node_modules/**',
      '**/*.vsix',
      'build/**',
    ],
  },
  ...mskelton.recommended,
  eslintPluginPrettier,
  {
    rules: {
      'sort/imports': 'off',
      'sort/string-enums': 'off',
      'prettier/prettier': 'error',
    },
  },
]
