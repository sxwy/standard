# 安装

本章将带大家安装一些项目中的依赖

> Node.js: 14 || 16

## 删除依赖

首先删除项目中原有的 `eslint`、`stylelint`、`prettier`、`husky`、`lint-staged` 相关的依赖，因为 `@sxwy/standard` 中已经包含了这些配置，如果不删除可能会导致依赖冲突

> 如 `eslint-plugin-import`、`stylelint-config-standard`、`@commitlint/cli` 等

## 安装依赖

安装以下依赖

```json
{
  "devDependencies": {
    "@sxwy/commitlint-config": "^1.4.0",
    "@sxwy/eslint-config-vue": "^1.6.0",
    "@sxwy/prettier-config": "^1.5.0",
    "@sxwy/stylelint-config": "^1.7.0",
    "eslint": "^8.0.0",
    "husky": "^7.0.1",
    "lint-staged": "^12.0.0",
    "prettier": "^2.0.0",
    "stylelint": "^14.0.0"
  }
}
```

`@sxwy/eslint-config-vue` 是基于 `@sxwy/eslint-config-base` 衍生出的关于 `Vue` 的相关配置，两个不需要同时进行安装，大家可根据需要选择对应的配置，如果是 `Vue` 项目只要安装 `@sxwy/eslint-config-vue` 即可，如果是 `JavaScript` 或 `TypeScript` 项目可以选择 `@sxwy/eslint-config-base`
