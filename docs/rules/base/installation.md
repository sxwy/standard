# 安装

本章将带大家安装一些项目中的依赖

> 运行环境：Node >= 16

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
    "@sxwy/commitlint-config": "^1.4.0",
    "@sxwy/eslint-config-vue": "^1.6.0",
    "@sxwy/prettier-config": "^1.5.0",
    "@sxwy/stylelint-config": "^1.7.0",
    "commitlint": "^19.2.1",
    "eslint": "^8.57.0",
    "prettier": "^3.2.5",
    "stylelint": "^16.3.1"
  }
}
```
