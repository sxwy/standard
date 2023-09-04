# 项目模板

为了让项目更加快速且规范，这边提供对应平台的项目模板，并且提供脚手架的使用方式

## 前台项目

[Vue2 + TypeScript + Vant2 项目模板](https://github.com/sxwy/vue2-h5-template)

[Vue3 + TypeScript + Vant4 项目模板](https://github.com/sxwy/vue3-h5-template)

## 后台项目

[Vue3 + TypeScript + ElementPlus 项目模板](https://github.com/sxwy/vue3-admin-template)

## 小程序项目

[uni-app + Vue2 + TypeScript + uView2 项目模板](https://github.com/sxwy/vue2-miniprogram-template)

## 脚手架

### 安装

- node >= 16

```js
npm i @sxwy/cli -g
```

### 使用

```js
Usage: sxwy <command> [options]

Options:
  -V, --version          output the version number
  -d, --debug            是否开启调试模式 (default: false)
  -h, --help             display help for command

Commands:
  init [options] [name]  init project
  help [command]         display help for command
```

### 示例

- 查看脚手架的使用方式

```
sxwy -h
```

- 查看脚手架的版本

```
sxwy -V
```

- 开启脚手架的 debug 模式

```
sxwy -d
```

- 查看 `init` 具体的使用方式

```
sxwy init -h
```

- 选择项目模板并自动下载

```
sxwy init
```

![cli.png](/standard/images/rules_project_template_cli.png)
