const {defaultTheme} = require("vuepress");

const sidebar = {
    '/': [
        {
            text: 'FTB App',
            children: ['/app/app-support.md'],
        },
    ],
    '/support': [
        {
            text: 'FTB App eww',
            children: ['/app/app-support.md'],
        },
    ],
}

module.exports = {
    lang: 'en-US',
    title: 'Feed The Beast Docs',
    description: 'FTB Docs for our mods, support topics, faq and lots of other useful information ',
    theme: defaultTheme({
        repo: 'https://github.com/ftbteam/docs',
        docsRepo: 'https://github.com/ftbteam/docs/docs',
        docsBranch: 'main',
        sidebar,
        contributors: false,
        darkMode: true
        // sidebar: {
        //   '/support/': {
        //       text: 'FTB App',
        //       children: ['/app/app-support.md'],
        //   }
        // },
    }),
}