module.exports = {
  extends: ['@sxwy/eslint-config-base/typescript', './rules/vue2'].map(
    require.resolve
  )
}
