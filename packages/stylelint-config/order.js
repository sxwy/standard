module.exports = {
  extends: ['./rules/standard', './rules/order', './rules/prettier'].map(
    require.resolve
  )
}
