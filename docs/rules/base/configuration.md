# 配置

当你阅读到本章时，相信你已经安装好了 `@sxwy/standard` 相关的依赖，下面会再进行一些项目配置

## 配置脚本

在 `package.json` 文件中配置以下脚本

```json
{
  "script": {
    "prepare": "husky install",
    "pre-commit": "lint-staged"
  }
}
```

执行以下命令生成 Git 钩子

```jsx
npx husky install
npx husky add .husky/pre-commit "npm run pre-commit"
```

## 配置项目

新建以下文件，并在对应文件中配置对应的内容

- `.eslintrc.js`

  ```js
  module.exports = {
    root: true,
    extends: ['@sxwy/eslint-config-vue/typescript'] // js or ts
  }
  ```

- `.stylelintrc.js`

  ```js
  module.exports = {
    extends: ['@sxwy/stylelint-config']
  }
  ```

- `.prettierrc.js`

  ```js
  module.exports = require('@sxwy/prettier-config')
  ```

- `.lintstagedrc.js`

  ```js
  module.exports = {
    '!(example|docs)/**/*.{vue,js,jsx,ts,tsx}': 'eslint --fix',
    '!(example|docs)/**/*.{vue,css,less,sass,scss}': 'stylelint --fix'
  }
  ```

至此，就完成了对应的项目配置，可以愉快的进行开发啦
