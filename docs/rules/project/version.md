# 版本管理

## 约定式提交

> 约定式提交规范是一种基于提交信息的轻量级约定，它提供了一组简单规则来创建清晰的提交历史，这更有利于编写自动化工具。通过在提交信息中描述功能、修复和破坏性变更，使这种惯例与[语义化版本](https://semver.org/)相互对应。 —— [https://www.conventionalcommits.org/zh-hans/v1.0.0/](https://www.conventionalcommits.org/zh-hans/v1.0.0/)

提交信息结构如下所示：

```
<type>[scope]: <description>

[body]

[footer(s)]
```

- `type`：类型，主要使用 `fix` 和 `feat` 这两种类型，除了 `fix` 和 `feat` 外，我们主要遵循 [Angular 约定](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)

  - `fix`：类型 为 fix 的提交表示在代码库中修复了一个 bug（这和语义化版本中的 PATCH 相对应）；
  - `feat`：类型 为 feat 的提交表示在代码库中新增了一个功能（这和语义化版本中的 MINOR 相对应）；
  - `docs`：只修改了文档
  - `style`：只修改了文档格式
  - `perf`：优化性能
  - `refactor`：重构代码
  - `test`：测试代码
  - `build`：构建或依赖相关的变更
  - `ci`：修改了 CI 配置
  - `revert:`：回滚代码

- `scope`：范围（可选），表示本次提交改动的范围（根据具体项目的模块划分而定）
- `description`：描述，一句简洁的改动说明
- `body`：正文（可选），通常用于解释说明改动的原因
- `footer`：脚注（可选），一些额外的备注说明

  - `BREAKING CHANGE:`：在脚注中包含 `BREAKING CHANGE:` 的提交，表示引入了破坏性 API 变更，这和语义化版本中的 MAJOR 相对应。破坏性的变更可能是 fix 或者 feat 类型的提交引起的，所以通过脚注的方式来表明。
  - `Reviewed-by:`：注明由谁 review
  - `Refs:`：注明关联的需求或者问题地址

范例：

- 修复

  ```
  fix: prevent racing of requests
  ```

- 功能

  ```
  feat(lang): add polish language
  ```

- 破坏性变更

  ```
  feat: allow provided config object to extend other configs

  BREAKING CHANGE: `extends` key in config file is now used for extending other config files
  ```

## 分支工作流

Git 版本管理需要一个清晰的流程及规范，避免团队成员提交各式风格的 commit，使项目更容易维护。根据项目的业务属性可以划分为两种项目

- 业务项目
- 技术项目

### 业务项目

![auto.svg](/standard/images/rules_project_version_auto.svg)

```
- master：主分支，只能从其他分支合并，不能直接修改
- cicd_debug：联调分支
- cicd_test：测试分支
- cicd_rc：预发分支
- cicd_prod：生产分支
- feature/xxx：功能分支
- hotfix/xxx：线上问题修复分支
```

- 新功能处理

  1. 从 master 分支切一个新的功能分支 feature/xxx；
  2. 在 feature/xxx 提交功能变更 `feat: ...`；

- 部署测试环境：

  1. 将功能分支 feature/xxx 合并到测试分支 cicd_test；
  2. 等待自动化部署（Gitlab CI 或 Jenkins）。

- 部署预发环境

  1. 基于 master 建立 release/x.y.z 分支；
  2. 将功能分支 feature/xxx 合并到 release/x.y.z；
  3. 修改版本说明文件（通常是 `./CHANGELOG.md`），增加新的版本修改说明；

     ```
     Vx.y.z
     YYYY-MM-DD
     1、增加功能 xxx（修改者 A）
     2、修复功能 yyy（修改者 B）
     ```

     ps：新版本号可以根据改动范围和大小来决定，详情参照上文的”约定式提交“规范。

  4. 将 release/x.y.z 合并到 cicd_rc 分支；
  5. 等待自动化部署（Gitlab CI 或 Jenkins）。

- 部署生产环境

  将 release/x.y.z 合并到 cicd_prod，等待自动化部署（Gitlab CI 或 Jenkins），然后通知运维部署容器服务即可。

ps：通过统一的 release 分支去处理发布，会然发布流程更加严谨且避免了重复的冲突处理操作（大多冲突在 release 分支处理掉了）。此外，在遇到多版本并行时，可以根据实际情况创建多个 release 分支。

### 技术项目

![basic.svg](/standard/images/rules_project_version_basic.svg)

### 参考文献

- [Git 工作流程](https://www.ruanyifeng.com/blog/2015/12/git-workflow.html)
