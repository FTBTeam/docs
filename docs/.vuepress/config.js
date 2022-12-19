//Import any needed vuepress libraries here
import {
    defaultTheme,
    defineUserConfig
} from 'vuepress'

//Configure the global sidebar (appears in every document unless overridden with a sidebar frontmatter, a.k.a. per-page sidebar config)
const sidebar = [
    {
        text: 'Home',
        link: '/'
    },
    {
        text: 'FTB App',
        collapsible: true,
        children: [
            {
                text: 'What is the app?',
                link: '/app'
            },
            {
                text: 'Help',
                link: '/app/app-help'
            }
        ]
    },
    {
        text: 'Support',
        collapsible: true,
        children: [
            {
                text: 'What is support?',
                link: '/support'
            },
            {
                text: 'Servers',
                link: '/support/servers',
                collapsible: true,
                children: [
                    {
                        text: 'Installing FTB Server',
                        link: '/support/servers/installing-servers'
                    }
                ]
            }
        ]
    },

    // string - page file path
    '/string/file/path/But_its_broken_404_example.md',
]

export default defineUserConfig({
    lang: 'en-US',
    title: 'Feed The Beast Documentation',
    description: 'Just playing around',

    theme: defaultTheme({
        logo: 'https://vuejs.org/images/logo.png',
        repo: 'https://github.com/ftbteam/docs',
        docsRepo: 'https://github.com/ftbteam/docs/docs',
        docsBranch: 'main',
        sidebar,
        contributors: false,
        darkMode: true
    }),
})