module.exports = {
  extends: [
    './rules/vue3-base',
    '@sxwy/eslint-config-base',
    './rules/vue3-parser'
  ].map(require.resolve)
}
