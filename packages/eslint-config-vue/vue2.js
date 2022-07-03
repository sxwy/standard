module.exports = {
  extends: ['@sxwy/eslint-config-base', './rules/vue2'].map(require.resolve)
}
