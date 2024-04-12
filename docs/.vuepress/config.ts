import { defineUserConfig } from 'vuepress'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  base: '/standard/',
  title: '开发规范',
  description: '前端项目及编码规范',
  bundler: webpackBundler(),
  theme: defaultTheme({
    logo: '/images/logo.png',
    sidebarDepth: 0,
    navbar: [
      { text: '规范', link: '/rules/base/why' },
      { text: '教程', link: '/guide/project/combat' },
      {
        text: '源代码',
        link: 'https://github.com/sxwy/standard',
        target: '_blank'
      }
    ],
    sidebar: {
      '/rules/': [
        {
          text: '基础',
          children: [
            {
              text: 'why',
              link: '/rules/base/why'
            },
            {
              text: '介绍',
              link: '/rules/base/introduction'
            },
            {
              text: '安装',
              link: '/rules/base/installation'
            },
            {
              text: '配置',
              link: '/rules/base/configuration'
            }
          ]
        },
        {
          text: '项目',
          children: [
            {
              text: '项目结构',
              link: '/rules/project/structure'
            },
            {
              text: '版本管理',
              link: '/rules/project/version'
            },
            {
              text: '归档管理',
              link: '/rules/project/archive'
            },
            {
              text: '项目模板',
              link: '/rules/project/template'
            }
          ]
        }
      ],
      '/guide/': [
        {
          text: '项目',
          children: [
            {
              text: '组织结构优化实战',
              link: '/guide/project/combat'
            }
          ]
        }
      ]
    }
  })
})
