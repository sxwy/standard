module.exports = {
  '*': 'prettier --write --cache --ignore-unknown',
  'packages/**.{vue,js,jsx,ts,tsx}': 'eslint --fix',
  'packages/**.{vue,css,less,sass,scss}': 'stylelint --fix --allow-empty-input'
}
