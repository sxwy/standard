module.exports = {
  extends: ['./rules/vue2', '@cj1997/eslint-config-base/typescript'].map(
    require.resolve
  )
}
