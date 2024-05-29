"use strict";(self.webpackChunk_sxwy_standard_docs=self.webpackChunk_sxwy_standard_docs||[]).push([[432],{991:(s,n,a)=>{a.r(n),a.d(n,{comp:()=>l,data:()=>i});var e=a(149);const p=[(0,e.Fv)('<h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h1><p>当你阅读到本章时，相信你已经安装好了 <code>@sxwy/standard</code> 相关的依赖，下面会再进行一些项目配置</p><h2 id="配置脚本" tabindex="-1"><a class="header-anchor" href="#配置脚本"><span>配置脚本</span></a></h2><p>在 <code>package.json</code> 文件中配置以下脚本</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">  <span class="token property">&quot;script&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;prepare&quot;</span><span class="token operator">:</span> <span class="token string">&quot;husky install&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;preinstall&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npx only-allow npm&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;pre-commit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lint-staged -p false&quot;</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行以下命令生成 Git 钩子</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="line">npx husky install</span>\n<span class="line">npx husky add <span class="token punctuation">.</span>husky<span class="token operator">/</span>pre<span class="token operator">-</span>commit <span class="token string">&quot;npm run pre-commit&quot;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置项目" tabindex="-1"><a class="header-anchor" href="#配置项目"><span>配置项目</span></a></h2><p>新建以下文件，并在对应文件中配置对应的内容</p><ul><li><p><code>.eslintrc.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@sxwy/eslint-config-vue/typescript&#39;</span><span class="token punctuation">]</span> <span class="token comment">// js or ts</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>.stylelintrc.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@sxwy/stylelint-config&#39;</span><span class="token punctuation">]</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>.prettierrc.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@sxwy/prettier-config&#39;</span><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>.lintstagedrc.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token string-property property">&#39;*&#39;</span><span class="token operator">:</span> <span class="token string">&#39;prettier --write --cache --ignore-unknown&#39;</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token string-property property">&#39;*.{vue,js,jsx,ts,tsx}&#39;</span><span class="token operator">:</span> <span class="token string">&#39;eslint --fix&#39;</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token string-property property">&#39;*.{vue,css,less,sass,scss}&#39;</span><span class="token operator">:</span> <span class="token string">&#39;stylelint --fix --allow-empty-input&#39;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>至此，就完成了对应的项目配置，可以愉快的进行开发啦</p>',11)],t={},l=(0,a(890).A)(t,[["render",function(s,n){return(0,e.uX)(),(0,e.CE)("div",null,p)}]]),i=JSON.parse('{"path":"/rules/base/configuration.html","title":"配置","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"配置脚本","slug":"配置脚本","link":"#配置脚本","children":[]},{"level":2,"title":"配置项目","slug":"配置项目","link":"#配置项目","children":[]}],"git":{"updatedTime":1716947070000,"contributors":[{"name":"chenjie","email":"chenjie@szy.cn","commits":1}]},"filePathRelative":"rules/base/configuration.md"}')}}]);