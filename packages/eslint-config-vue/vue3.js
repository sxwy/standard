module.exports = {
  extends: ['@sxwy/eslint-config-base', './rules/vue3'].map(require.resolve)
}
