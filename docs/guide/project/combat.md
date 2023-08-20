# 组织结构优化实战

如下所示是某个项目的组织结构

```shell
├── docs
├── mock
│   ├── member-center
│   └── member-channel
├── public
│   ├── images
│   ├── favicon.ico
│   ├── index.html
│   └── version.txt
├── src
│   ├── api
│   │   ├── modules
│   │   │   ├── activity.js
│   │   │   ├── ...
│   │   │   └── user.js
│   │   ├── api.js
│   │   ├── apiHost.js
│   │   ├── baseApi.js
│   │   └── index.js
│   ├── assets
│   │   ├── css
│   │   │   └── userInfoCard.scss
│   │   └── images
│   │       ├── activityNiewTwoOne
│   │       └── ...
│   ├── components
│   │   ├── ActiveDialog.vue
│   │   ├── ...
│   │   └── payCardBtn.vue
│   ├── config
│   ├── directive
│   ├── filters
│   ├── hooks
│   ├── maps
│   ├── mixins
│   ├── mock
│   ├── router
│   │   ├── import_development.js
│   │   ├── import_production.js
│   │   ├── index.js
│   │   ├── main.js
│   │   ├── mall.js
│   │   └── member-center.js
│   ├── service
│   ├── store
│   │   ├── modules
│   │   └── index.js
│   ├── types
│   ├── utils
│   ├── views
│   │   ├── activities
│   │   │   ├── help
│   │   │   ├── silver-cms
│   │   │   └── super-cms
│   │   ├── activityNineTwoZero
│   │   │   ├── components
│   │   │   ├── index.vue
│   │   │   └── kaActivity.vue
│   │   ├── album
│   │   │   └── Index.vue
│   │   ├── allOrder
│   │   │   ├── components
│   │   │   └── index.vue
│   │   ├── birthday
│   │   │   └── Index.vue
│   │   ├── cashback
│   │   │   └── Index.vue
│   │   ├── cloudAlbum
│   │   │   └── explain.vue
│   │   ├── common
│   │   │   ├── middle-page.vue
│   │   │   └── update-app.vue
│   │   ├── course-collection
│   │   │   └── Index.vue
│   │   ├── double-eleven
│   │   │   ├── BirthdayGift.vue
│   │   │   ├── Index.vue
│   │   │   ├── Pay.vue
│   │   │   ├── Purchases.vue
│   │   │   └── pubSub.js
│   │   ├── eduKa
│   │   │   ├── components
│   │   │   └── index.vue
│   │   ├── group-buy
│   │   │   ├── components
│   │   │   ├── ActivityRule.vue
│   │   │   ├── GoodDetail.vue
│   │   │   ├── Index.vue
│   │   │   ├── OrderDetail.vue
│   │   │   ├── OrderList.vue
│   │   │   ├── Pay.vue
│   │   │   └── PaySuccess.vue
│   │   ├── guide
│   │   │   └── Index.vue
│   │   ├── imprint
│   │   │   ├── components
│   │   │   └── Index.vue
│   │   ├── license
│   │   │   └── View.vue
│   │   ├── loveday
│   │   │   ├── components
│   │   │   ├── AppPage.vue
│   │   │   ├── Index.vue
│   │   │   └── Weix.vue
│   │   ├── member-center
│   │   │   ├── address
│   │   │   ├── components
│   │   │   ├── images
│   │   │   ├── pay
│   │   │   ├── utils
│   │   │   ├── index.d.ts
│   │   │   ├── index.vue
│   │   │   ├── service.js
│   │   │   └── type.d.ts
│   │   ├── member-channel
│   │   │   ├── components
│   │   │   ├── images
│   │   │   ├── Index.vue
│   │   │   ├── Special.vue
│   │   │   └── service.js
│   │   ├── memberInterest
│   │   │   ├── components
│   │   │   └── index.vue
│   │   ├── not-found
│   │   │   └── Index.vue
│   │   ├── not-wechat
│   │   │   └── Index.vue
│   │   ├── openSectionActivies
│   │   │   ├── oneGiveOne
│   │   │   ├── silverOneGiveTwoV2
│   │   │   ├── index.vue
│   │   │   └── payPage.vue
│   │   ├── pay
│   │   │   └── Index.vue
│   │   ├── problem
│   │   │   └── Index.vue
│   │   ├── product
│   │   │   ├── cloudCenter
│   │   │   ├── components
│   │   │   ├── hd-video
│   │   │   ├── mixins
│   │   │   ├── Index.vue
│   │   │   ├── freeze.vue
│   │   │   ├── interests.vue
│   │   │   ├── more-right.vue
│   │   │   ├── pay-page.vue
│   │   │   └── transfer.vue
│   │   ├── profile
│   │   │   └── Index.vue
│   │   ├── rebate
│   │   │   ├── components
│   │   │   ├── AmoyGold.vue
│   │   │   ├── Convert.vue
│   │   │   ├── Exchange.vue
│   │   │   ├── FundDetails.vue
│   │   │   └── Index.vue
│   │   ├── renewal
│   │   │   ├── addressSelect
│   │   │   ├── components
│   │   │   ├── mixins
│   │   │   ├── CloseIos.vue
│   │   │   ├── Index.vue
│   │   │   ├── List.vue
│   │   │   ├── privilege.vue
│   │   │   └── schemeTitle.vue
│   │   ├── right-list
│   │   │   └── Index.vue
│   │   ├── special-subject
│   │   │   └── Index.vue
│   │   ├── super-cash-back
│   │   │   └── index.vue
│   │   ├── template
│   │   │   └── Index.vue
│   │   ├── thanksgivingDay
│   │   │   ├── Index.vue
│   │   │   ├── Pay.vue
│   │   │   └── pubSub.js
│   │   ├── thirdPlatform
│   │   │   ├── Index.vue
│   │   │   ├── Pay.vue
│   │   │   ├── imageUrl.js
│   │   │   └── pubSub.js
│   │   └── Index.vue
│   ├── App.vue
│   ├── main.js
│   └── shims-vue.d.ts
├── temp
├── README.md
├── babel.config.js
├── jsconfig.json
├── package.json
├── postcss.config.js
├── tsconfig.json
├── vue.config.js
└── yarn.lock
```

提问：你觉得存在哪些问题？

1. 静态资源全部放在全局的 `./src/assets` 目录下，且没有明确的管理模式，导致在组件引用静态资源的时候需要使用复杂的相对路径应用，例如：`../../../images/pay/vip_bg.png`。

   虽然可以配置别名直接从根目录开始引用，但大多项目都没有配置，或者开发人员不懂得如何配置。此外，一个 UI 组件的组成部分就是应该由模板、代码、样式和静态资源，这些都应该放在一块才能更加方便的维护。

2. 所有接口请求都放在了网络请求层目录里了，导致随着业务的迭代，全局目录下的 API 越来越多，可阅读性变差，后续维护成本也变得越来越高。

   开发人员需要区分某个接口是否是全局共用的还是特定场景使用的，如果不需要全局复用，请把相关的接口请求封装在各自的业务模块里。

3. 全局组件目录的问题和网络请求接口类似，在该目录下放置了太多特定场景使用的组件了。

   将模块放到全局目录下时，开发人员都应该慎重考虑，全局组件目录更应该放置一些业务无关的基础组件。如果大家在开发的过程中无法判定放在哪里，可以先放业务模块里，在后续开发过程中再考虑是否封装到全局。

4. 路由页面的子目录没有规范的管理模式，不同的开发人员因个人喜好不同创建了不同的目录，而且命名规则也不一致。

   现有的路由目录没有明确的业务模块划分，每个路由大多都是平铺放在根目录下，导致同个业务没有进行聚合，开发者应根据业务模块来定义对应的路由目录
