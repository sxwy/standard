module.exports = {
  extends: ['@sxwy/eslint-config-base/typescript', './rules/vue3'].map(
    require.resolve
  )
}
