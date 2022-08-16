module.exports = {
  extends: ['stylelint-config-standard'],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html'
    },
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less'
    },
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss'
    }
  ]
}
