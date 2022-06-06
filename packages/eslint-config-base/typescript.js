module.exports = {
  extends: ['./rules/standard', './rules/typescript', './rules/prettier'].map(
    require.resolve
  )
}
