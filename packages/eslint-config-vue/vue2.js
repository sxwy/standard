module.exports = {
  extends: [
    './rules/vue2-base',
    '@sxwy/eslint-config-base',
    './rules/vue2-parser'
  ].map(require.resolve)
}
