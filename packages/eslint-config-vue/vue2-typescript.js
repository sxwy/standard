module.exports = {
  extends: ['./rules/vue2', '@sxwy/eslint-config-base/typescript'].map(
    require.resolve
  )
}
