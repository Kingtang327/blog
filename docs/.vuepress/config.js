// const { fs, path } = require('@vuepress/shared-utils')

module.exports = ctx => ({
    dest: '../../blog',
    title: 'Java学习之路',
    description: 'Java学习之路',
    base: '/blog/',
    themeConfig: {
        // repo: '/Kingtang327/blog',
        // editLinks: true,
        docsDir: 'packages/docs/docs',
        smoothScroll: true,
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        // editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav/nav'),
        sidebar: {
            '/java/concurrent/': getCommonSidebar('资源获取', '快速开始'),
            '/java/docker/': getCommonSidebar('资源获取', '快速开始'),
            '/java/dubbo/': getCommonSidebar('资源获取', '快速开始'),
            '/java/jvm/': getCommonSidebar('资源获取', '快速开始'),
            '/java/mongodb/': getCommonSidebar('资源获取', '快速开始'),
            '/java/mq/': getCommonSidebar('资源获取', '快速开始'),
            '/java/mybatis/': getCommonSidebar('资源获取', '快速开始'),
            '/java/mysql/': getCommonSidebar('资源获取', '快速开始'),
            '/java/netty/': getCommonSidebar('资源获取', '快速开始'),
            '/java/redis/': getCommonSidebar('资源获取', '快速开始'),
            '/java/spring/': getCommonSidebar('资源获取', '快速开始')
        },
        sidebarDepth: 3, // 侧边栏显示2级
        extraWatchFiles: [
            '.vuepress/nav/nav.js'
        ]
    }
})

function getCommonSidebar (groupA, groupB) {
    return [
        {
            title: groupA,
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'resources',
                'interview'
            ]
        },
        {
            title: groupB,
            collapsable: false,
            sidebarDepth: 2,
            children: [
                '',
                'memory-model'

            ]
        }
    ]
}

