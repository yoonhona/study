const PREFIX = '/TIL/';

module.exports = {
    base: PREFIX,
    title: '나윤호 TIL',
    themeConfig: {
        nav: [
            {
                text: 'TestCode',
                items: [
                    { text: 'Ract & Jest', link: '/기술/프론트엔드/Test/jest_react' },
                ]
            },
            {
                text: 'CSS',
                items: [
                    { text: 'CSS Layout', link: '/스터디/2019_CSS_Layout/' },
                    { text: 'Box Model', link: '/스터디/2019_CSS_Layout/box' }
                ]
            },
            {
                text: 'Java',
                items: [
                    { text: '람다 표현식', link: '/스터디/2019_ReactiveJava/lamda' },
                    { text: 'RxJava', link: '/스터디/2019_ReactiveJava/RxJava' },
                    { text: 'Reactor', link: '/스터디/2019_ReactiveJava/Reactor' },
                ]
            },
            {
                text: '협업',
                items: [
                    { text: 'Gitflow(with Gitlab)', link: '/기술/협업/git_flow' },
                ]
            },
        ],
        sidebar: 'auto',
        search: false,
    },
    markdown: {
        lineNumbers: true
    }
};