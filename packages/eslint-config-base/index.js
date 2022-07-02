module.exports = {
  extends: ['./rules/babel', './rules/standard', './rules/prettier'].map(
    require.resolve
  )
}
