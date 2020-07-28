module.exports = {
    // 插件
    plugins: [
        '@org/foo',
        '@vuepress/back-to-top',
        '@vuepress/plugin-active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor' 
        },
        'markdown-it-bar'
    ],
    // 头部
    head: [
        ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}],
        ['link', {rel: 'icon', href: '/logo/small.png'}]
    ],
    
    // 网站标题及描述
    title: 'Calvin Books',
    description: '自律成就自由，学习改变未来 ！',
    // 主题配置
    themeConfig: {
        // 提取markdown中h2 和 h3 标题，显示在侧边栏上。
        sidebarDepth: 3,
        lastUpdated: '更新时间',
        // logo
        logo: '/logo/small.png',
        nav: [
            {text: '首页', link: '/books/'}
            // { text: '', link: '/version/V2.5/'},
            // { text: '捐赠', link: '/donation/'},
            // { text: '体验', link: 'https://el-admin.xin'},
            // { text: '博客', link: 'https://www.ydyno.com/'},
            //下拉列表
            // {
            // text: 'Github',
            // items: [
            // {
            // text: '前端源码',
            // link: 'https://github.com/elunez/eladmin-web'
            // },
            // {
            // text: '后端源码',
            // link: 'https://github.com/elunez/eladmin'
            // },
            // ]
            // },
            // {
            // text: 'Gitee',
            // items: [
            // {
            // text: '前端源码',
            // link: 'https://gitee.com/elunez/eladmin-web'
            // },
            // {
            // text: '后端源码',
            // link: 'https://gitee.com/elunez/eladmin'
            // }
            // ]
            // }
        ],
        sidebar: [
            {
                title: '心灵精神',   // 必要的
                path: '/books/soul/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/books/soul/1-思维的囚徒'
                ]
            },
            {
                title: '管理提升',
                path: '/books/manager/',
                collapsable: false, // 可选的,
                sidebarDepth: 2,    // 可选的,
                children: [
                    '/books/manager/1-高效能人士的七个习惯'
                ]
            },
            {
                title: '职场效能',
                path: '/books/worker/',
                collapsable: false, // 可选的,
                sidebarDepth: 2,    // 可选的,
                children: [
                ]
            },
            {
                title: '家庭培养',
                path: '/books/family/',
                collapsable: false, // 可选的,
                sidebarDepth: 2,    // 可选的,
                children: [
                ]
            },
            {
                title: '生活体验',
                path: '/books/life/',
                collapsable: false, // 可选的,
                sidebarDepth: 2,    // 可选的,
                children: [
                ]
            },
            {
                title: '历史人文',
                path: '/books/history/',
                collapsable: false, // 可选的,
                sidebarDepth: 2,    // 可选的,
                children: [
                ]
            },

        ],
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: '1016280226/calvin-books-docs',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '在 GitHub 上编辑此页！'
    }
}

