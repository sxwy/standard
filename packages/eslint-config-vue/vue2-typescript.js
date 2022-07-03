module.exports = {
  extends: [
    './rules/vue2-base',
    '@sxwy/eslint-config-base/typescript',
    './rules/vue2-parser'
  ].map(require.resolve)
}
