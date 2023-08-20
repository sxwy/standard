(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{311:function(e,t,a){"use strict";a.r(t);var v=a(14),_=Object(v.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"版本管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本管理"}},[e._v("#")]),e._v(" 版本管理")]),e._v(" "),t("h2",{attrs:{id:"约定式提交"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#约定式提交"}},[e._v("#")]),e._v(" 约定式提交")]),e._v(" "),t("blockquote",[t("p",[e._v("约定式提交规范是一种基于提交信息的轻量级约定，它提供了一组简单规则来创建清晰的提交历史，这更有利于编写自动化工具。通过在提交信息中描述功能、修复和破坏性变更，使这种惯例与"),t("a",{attrs:{href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("语义化版本"),t("OutboundLink")],1),e._v("相互对应。 —— "),t("a",{attrs:{href:"https://www.conventionalcommits.org/zh-hans/v1.0.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.conventionalcommits.org/zh-hans/v1.0.0/"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("提交信息结构如下所示：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<type>[scope]: <description>\n\n[body]\n\n[footer(s)]\n")])])]),t("ul",[t("li",[t("p",[t("code",[e._v("type")]),e._v("：类型，主要使用 "),t("code",[e._v("fix")]),e._v(" 和 "),t("code",[e._v("feat")]),e._v(" 这两种类型，除了 "),t("code",[e._v("fix")]),e._v(" 和 "),t("code",[e._v("feat")]),e._v(" 外，我们主要遵循 "),t("a",{attrs:{href:"https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines",target:"_blank",rel:"noopener noreferrer"}},[e._v("Angular 约定"),t("OutboundLink")],1)]),e._v(" "),t("ul",[t("li",[t("code",[e._v("fix")]),e._v("：类型 为 fix 的提交表示在代码库中修复了一个 bug（这和语义化版本中的 PATCH 相对应）；")]),e._v(" "),t("li",[t("code",[e._v("feat")]),e._v("：类型 为 feat 的提交表示在代码库中新增了一个功能（这和语义化版本中的 MINOR 相对应）；")]),e._v(" "),t("li",[t("code",[e._v("docs")]),e._v("：只修改了文档")]),e._v(" "),t("li",[t("code",[e._v("style")]),e._v("：只修改了文档格式")]),e._v(" "),t("li",[t("code",[e._v("perf")]),e._v("：优化性能")]),e._v(" "),t("li",[t("code",[e._v("refactor")]),e._v("：重构代码")]),e._v(" "),t("li",[t("code",[e._v("test")]),e._v("：测试代码")]),e._v(" "),t("li",[t("code",[e._v("build")]),e._v("：构建或依赖相关的变更")]),e._v(" "),t("li",[t("code",[e._v("ci")]),e._v("：修改了 CI 配置")]),e._v(" "),t("li",[t("code",[e._v("revert:")]),e._v("：回滚代码")])])]),e._v(" "),t("li",[t("p",[t("code",[e._v("scope")]),e._v("：范围（可选），表示本次提交改动的范围（根据具体项目的模块划分而定）")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("description")]),e._v("：描述，一句简洁的改动说明")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("body")]),e._v("：正文（可选），通常用于解释说明改动的原因")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("footer")]),e._v("：脚注（可选），一些额外的备注说明")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("BREAKING CHANGE:")]),e._v("：在脚注中包含 "),t("code",[e._v("BREAKING CHANGE:")]),e._v(" 的提交，表示引入了破坏性 API 变更，这和语义化版本中的 MAJOR 相对应。破坏性的变更可能是 fix 或者 feat 类型的提交引起的，所以通过脚注的方式来表明。")]),e._v(" "),t("li",[t("code",[e._v("Reviewed-by:")]),e._v("：注明由谁 review")]),e._v(" "),t("li",[t("code",[e._v("Refs:")]),e._v("：注明关联的需求或者问题地址")])])])]),e._v(" "),t("p",[e._v("范例：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("修复")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("fix: prevent racing of requests\n")])])])]),e._v(" "),t("li",[t("p",[e._v("功能")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("feat(lang): add polish language\n")])])])]),e._v(" "),t("li",[t("p",[e._v("破坏性变更")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("feat: allow provided config object to extend other configs\n\nBREAKING CHANGE: `extends` key in config file is now used for extending other config files\n")])])])])]),e._v(" "),t("h2",{attrs:{id:"分支工作流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分支工作流"}},[e._v("#")]),e._v(" 分支工作流")]),e._v(" "),t("p",[e._v("Git 版本管理需要一个清晰的流程及规范，避免团队成员提交各式风格的 commit，使项目更容易维护。根据项目的业务属性可以划分为两种项目")]),e._v(" "),t("ul",[t("li",[e._v("业务项目")]),e._v(" "),t("li",[e._v("技术项目")])]),e._v(" "),t("h3",{attrs:{id:"业务项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#业务项目"}},[e._v("#")]),e._v(" 业务项目")]),e._v(" "),t("p",[t("img",{attrs:{src:"/standard/images/rules_project_version_auto.svg",alt:"auto.svg"}})]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("- master：主分支，只能从其他分支合并，不能直接修改\n- cicd_debug：联调分支\n- cicd_test：测试分支\n- cicd_rc：预发分支\n- cicd_prod：生产分支\n- feature/xxx：功能分支\n- hotfix/xxx：线上问题修复分支\n")])])]),t("ul",[t("li",[t("p",[e._v("新功能处理")]),e._v(" "),t("ol",[t("li",[e._v("从 master 分支切一个新的功能分支 feature/xxx；")]),e._v(" "),t("li",[e._v("在 feature/xxx 提交功能变更 "),t("code",[e._v("feat: ...")]),e._v("；")])])]),e._v(" "),t("li",[t("p",[e._v("部署测试环境：")]),e._v(" "),t("ol",[t("li",[e._v("将功能分支 feature/xxx 合并到测试分支 cicd_test；")]),e._v(" "),t("li",[e._v("等待自动化部署（Gitlab CI 或 Jenkins）。")])])]),e._v(" "),t("li",[t("p",[e._v("部署预发环境")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("基于 master 建立 release/x.y.z 分支；")])]),e._v(" "),t("li",[t("p",[e._v("将功能分支 feature/xxx 合并到 release/x.y.z；")])]),e._v(" "),t("li",[t("p",[e._v("修改版本说明文件（通常是 "),t("code",[e._v("./CHANGELOG.md")]),e._v("），增加新的版本修改说明；")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Vx.y.z\nYYYY-MM-DD\n1、增加功能 xxx（修改者 A）\n2、修复功能 yyy（修改者 B）\n")])])]),t("p",[e._v("ps：新版本号可以根据改动范围和大小来决定，详情参照上文的”约定式提交“规范。")])]),e._v(" "),t("li",[t("p",[e._v("将 release/x.y.z 合并到 cicd_rc 分支；")])]),e._v(" "),t("li",[t("p",[e._v("等待自动化部署（Gitlab CI 或 Jenkins）。")])])])]),e._v(" "),t("li",[t("p",[e._v("部署生产环境")]),e._v(" "),t("p",[e._v("将 release/x.y.z 合并到 cicd_prod，等待自动化部署（Gitlab CI 或 Jenkins），然后通知运维部署容器服务即可。")])])]),e._v(" "),t("p",[e._v("ps：通过统一的 release 分支去处理发布，会然发布流程更加严谨且避免了重复的冲突处理操作（大多冲突在 release 分支处理掉了）。此外，在遇到多版本并行时，可以根据实际情况创建多个 release 分支。")]),e._v(" "),t("h3",{attrs:{id:"技术项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#技术项目"}},[e._v("#")]),e._v(" 技术项目")]),e._v(" "),t("p",[t("img",{attrs:{src:"/standard/images/rules_project_version_basic.svg",alt:"basic.svg"}})]),e._v(" "),t("h3",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[e._v("#")]),e._v(" 参考文献")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2015/12/git-workflow.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git 工作流程"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=_.exports}}]);