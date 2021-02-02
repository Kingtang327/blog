// const { fs, path } = require('@vuepress/shared-utils')

module.exports = ctx => ({
    dest: '../../vuepress',
    title: 'Java学习之路',
    description: 'Java学习之路',
    base: '/',
    themeConfig: {
        repo: 'vuejs/vuepress',
        editLinks: true,
        docsDir: 'packages/docs/docs',
        smoothScroll: true,
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav/nav'),
        sidebar: {
            'java': getGuideSidebar('资源获取', '快速开始', '面试资料')
        },
        sidebarDepth: 2, // 侧边栏显示2级
        extraWatchFiles: [
            '.vuepress/nav/nav.js'
        ]
    }
})

function getGuideSidebar (groupA, groupB, groupC) {
    return [
        {
            title: groupA,
            collapsable: false,
            sidebarDepth: 2,
            children: [
                '',
                'resources'
            ]
        },
        {
            title: groupB,
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'getting-started'
            ]
        },
        {
            title: groupC,
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'interview'
            ]
        }
    ]
}

