"use strict";(self.webpackChunk_sxwy_standard_docs=self.webpackChunk_sxwy_standard_docs||[]).push([[962],{829:(e,l,i)=>{i.r(l),i.d(l,{comp:()=>k,data:()=>L});var a=i(149);const n=(0,a.Lk)("h1",{id:"版本管理",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#版本管理"},[(0,a.Lk)("span",null,"版本管理")])],-1),d=(0,a.Lk)("h2",{id:"约定式提交",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#约定式提交"},[(0,a.Lk)("span",null,"约定式提交")])],-1),t={href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"},s={href:"https://www.conventionalcommits.org/zh-hans/v1.0.0/",target:"_blank",rel:"noopener noreferrer"},r=(0,a.Fv)('<p>提交信息结构如下所示：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;type&gt;[scope]: &lt;description&gt;\n\n[body]\n\n[footer(s)]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',2),c=(0,a.Lk)("code",null,"type",-1),o=(0,a.Lk)("code",null,"fix",-1),u=(0,a.Lk)("code",null,"feat",-1),p=(0,a.Lk)("code",null,"fix",-1),v=(0,a.Lk)("code",null,"feat",-1),x={href:"https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines",target:"_blank",rel:"noopener noreferrer"},m=(0,a.Fv)("<ul><li><code>fix</code>：类型 为 fix 的提交表示在代码库中修复了一个 bug（这和语义化版本中的 PATCH 相对应）；</li><li><code>feat</code>：类型 为 feat 的提交表示在代码库中新增了一个功能（这和语义化版本中的 MINOR 相对应）；</li><li><code>docs</code>：只修改了文档</li><li><code>style</code>：只修改了文档格式</li><li><code>perf</code>：优化性能</li><li><code>refactor</code>：重构代码</li><li><code>test</code>：测试代码</li><li><code>build</code>：构建或依赖相关的变更</li><li><code>ci</code>：修改了 CI 配置</li><li><code>revert:</code>：回滚代码</li></ul>",1),b=(0,a.Fv)("<li><p><code>scope</code>：范围（可选），表示本次提交改动的范围（根据具体项目的模块划分而定）</p></li><li><p><code>description</code>：描述，一句简洁的改动说明</p></li><li><p><code>body</code>：正文（可选），通常用于解释说明改动的原因</p></li><li><p><code>footer</code>：脚注（可选），一些额外的备注说明</p><ul><li><code>BREAKING CHANGE:</code>：在脚注中包含 <code>BREAKING CHANGE:</code> 的提交，表示引入了破坏性 API 变更，这和语义化版本中的 MAJOR 相对应。破坏性的变更可能是 fix 或者 feat 类型的提交引起的，所以通过脚注的方式来表明。</li><li><code>Reviewed-by:</code>：注明由谁 review</li><li><code>Refs:</code>：注明关联的需求或者问题地址</li></ul></li>",4),g=(0,a.Fv)('<p>范例：</p><ul><li><p>修复</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>fix: prevent racing of requests\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>功能</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>feat(lang): add polish language\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>破坏性变更</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>feat: allow provided config object to extend other configs\n\nBREAKING CHANGE: `extends` key in config file is now used for extending other config files\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="分支工作流" tabindex="-1"><a class="header-anchor" href="#分支工作流"><span>分支工作流</span></a></h2><p>Git 版本管理需要一个清晰的流程及规范，避免团队成员提交各式风格的 commit，使项目更容易维护。根据项目的业务属性可以划分为两种项目</p><ul><li>业务项目</li><li>技术项目</li></ul><h3 id="业务项目" tabindex="-1"><a class="header-anchor" href="#业务项目"><span>业务项目</span></a></h3><p><img src="/standard/images/rules_project_version_auto.svg" alt="auto.svg"></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- master：主分支，只能从其他分支合并，不能直接修改\n- cicd_debug：联调分支\n- cicd_test：测试分支\n- cicd_rc：预发分支\n- cicd_prod：生产分支\n- feature/xxx：功能分支\n- hotfix/xxx：线上问题修复分支\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>新功能处理</p><ol><li>从 master 分支切一个新的功能分支 feature/xxx；</li><li>在 feature/xxx 提交功能变更 <code>feat: ...</code>；</li></ol></li><li><p>部署测试环境：</p><ol><li>将功能分支 feature/xxx 合并到测试分支 cicd_test；</li><li>等待自动化部署（Gitlab CI 或 Jenkins）。</li></ol></li><li><p>部署预发环境</p><ol><li><p>基于 master 建立 release/x.y.z 分支；</p></li><li><p>将功能分支 feature/xxx 合并到 release/x.y.z；</p></li><li><p>修改版本说明文件（通常是 <code>./CHANGELOG.md</code>），增加新的版本修改说明；</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Vx.y.z\nYYYY-MM-DD\n1、增加功能 xxx（修改者 A）\n2、修复功能 yyy（修改者 B）\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ps：新版本号可以根据改动范围和大小来决定，详情参照上文的”约定式提交“规范。</p></li><li><p>将 release/x.y.z 合并到 cicd_rc 分支；</p></li><li><p>等待自动化部署（Gitlab CI 或 Jenkins）。</p></li></ol></li><li><p>部署生产环境</p><p>将 release/x.y.z 合并到 cicd_prod，等待自动化部署（Gitlab CI 或 Jenkins），然后通知运维部署容器服务即可。</p></li></ul><p>ps：通过统一的 release 分支去处理发布，会然发布流程更加严谨且避免了重复的冲突处理操作（大多冲突在 release 分支处理掉了）。此外，在遇到多版本并行时，可以根据实际情况创建多个 release 分支。</p><h3 id="技术项目" tabindex="-1"><a class="header-anchor" href="#技术项目"><span>技术项目</span></a></h3><p><img src="/standard/images/rules_project_version_basic.svg" alt="basic.svg"></p><h3 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h3>',13),h={href:"https://www.ruanyifeng.com/blog/2015/12/git-workflow.html",target:"_blank",rel:"noopener noreferrer"},f={},k=(0,i(890).A)(f,[["render",function(e,l){const i=(0,a.g2)("ExternalLinkIcon");return(0,a.uX)(),(0,a.CE)("div",null,[n,d,(0,a.Lk)("blockquote",null,[(0,a.Lk)("p",null,[(0,a.eW)("约定式提交规范是一种基于提交信息的轻量级约定，它提供了一组简单规则来创建清晰的提交历史，这更有利于编写自动化工具。通过在提交信息中描述功能、修复和破坏性变更，使这种惯例与"),(0,a.Lk)("a",t,[(0,a.eW)("语义化版本"),(0,a.bF)(i)]),(0,a.eW)("相互对应。 —— "),(0,a.Lk)("a",s,[(0,a.eW)("https://www.conventionalcommits.org/zh-hans/v1.0.0/"),(0,a.bF)(i)])])]),r,(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,[(0,a.Lk)("p",null,[c,(0,a.eW)("：类型，主要使用 "),o,(0,a.eW)(" 和 "),u,(0,a.eW)(" 这两种类型，除了 "),p,(0,a.eW)(" 和 "),v,(0,a.eW)(" 外，我们主要遵循 "),(0,a.Lk)("a",x,[(0,a.eW)("Angular 约定"),(0,a.bF)(i)])]),m]),b]),g,(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,[(0,a.Lk)("a",h,[(0,a.eW)("Git 工作流程"),(0,a.bF)(i)])])])])}]]),L=JSON.parse('{"path":"/rules/project/version.html","title":"版本管理","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"约定式提交","slug":"约定式提交","link":"#约定式提交","children":[]},{"level":2,"title":"分支工作流","slug":"分支工作流","link":"#分支工作流","children":[{"level":3,"title":"业务项目","slug":"业务项目","link":"#业务项目","children":[]},{"level":3,"title":"技术项目","slug":"技术项目","link":"#技术项目","children":[]},{"level":3,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}]}],"git":{"updatedTime":1712823234000,"contributors":[{"name":"chenjie","email":"chenjie@szy.cn","commits":1}]},"filePathRelative":"rules/project/version.md"}')}}]);