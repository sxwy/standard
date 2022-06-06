module.exports = {
  extends: ['./rules/standard', './rules/prettier'].map(require.resolve)
}
