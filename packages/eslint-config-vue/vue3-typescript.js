module.exports = {
  extends: [
    './rules/vue3',
    '@sxwy/eslint-config-base/typescript',
    './rules/vue3-parser'
  ].map(require.resolve)
}
