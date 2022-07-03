module.exports = {
  extends: ['./rules/standard', './rules/babel', './rules/prettier'].map(
    require.resolve
  )
}
