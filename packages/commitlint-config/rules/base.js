module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'chore', 'style', 'docs', 'refactor']
    ],
    'body-max-line-length': [0, 'never', 100]
  }
}
