module.exports = {
  base: '/standard/',
  title: '开发规范',
  description: '前端项目及编码规范',
  displayAllHeaders: true,
  themeConfig: {
    sidebarDepth: 0,
    nav: [
      { text: '规范', link: '/rules/base/why' },
      { text: '教程', link: '/guide/project/combat' }
    ],
    sidebar: {
      '/rules/': [
        {
          title: '基础',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            {
              title: 'why',
              path: 'base/why'
            },
            {
              title: '介绍',
              path: 'base/introduction'
            },
            {
              title: '安装',
              path: 'base/installation'
            },
            {
              title: '配置',
              path: 'base/configuration'
            }
          ]
        },
        {
          title: '项目',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            {
              title: '项目结构',
              path: 'project/structure'
            },
            {
              title: '版本管理',
              path: 'project/version'
            },
            {
              title: '归档管理',
              path: 'project/archive'
            }
          ]
        }
      ],
      '/guide/': [
        {
          title: '项目',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            {
              title: '组织结构优化实战',
              path: 'project/combat'
            }
          ]
        }
      ]
    }
  }
}