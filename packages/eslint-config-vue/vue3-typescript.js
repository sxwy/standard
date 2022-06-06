module.exports = {
  extends: ['./rules/vue3', '@cj1997/eslint-config-base/typescript'].map(
    require.resolve
  )
}
