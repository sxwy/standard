module.exports = {
  extends: [
    './rules/vue2',
    '@sxwy/eslint-config-base',
    './rules/vue2-parser'
  ].map(require.resolve)
}
