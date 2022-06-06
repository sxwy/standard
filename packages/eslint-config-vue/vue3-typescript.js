module.exports = {
  extends: ['./rules/vue3', '@sxwy/eslint-config-base/typescript'].map(
    require.resolve
  )
}
