# 安装

本章将带大家安装一些项目中的依赖

> 1.x 的版本 Node.js 需要 ^16

> 2.x 的版本 Node.js 需要 ^18 || ^20

## 删除依赖

首先删除项目中原有的 `eslint`、`stylelint`、`commitlint` 相关的依赖，因为 `@sxwy/standard` 中已经包含了这些配置，如果不删除可能会导致依赖冲突

> 如 `eslint-plugin-import`、`stylelint-config-standard`、`@commitlint/cli` 等

## 安装依赖

- `Vue` 项目安装 `@sxwy/eslint-config-vue`

- `JS/TS` 项目安装 `@sxwy/eslint-config-base`

安装以下依赖

```json
{
  "devDependencies": {
    "@sxwy/commitlint-config": "^2.0.0",
    "@sxwy/eslint-config-vue": "^2.0.0",
    "@sxwy/prettier-config": "^2.0.0",
    "@sxwy/stylelint-config": "^2.0.0",
    "commitlint": "^19.2.1",
    "eslint": "^8.57.0",
    "prettier": "^3.2.5",
    "stylelint": "^16.3.1"
  }
}
```
