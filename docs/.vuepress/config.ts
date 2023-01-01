/**
 * @file Manages the sidebar programmatically.
 * @author Feed The Beast Ltd
 */

import {
    defaultTheme,
    defineUserConfig
} from 'vuepress'

import sidebar from "./app/sidebar/SidebarCreator.js";

//import {sidebar as sidebar2} from "./app/sidebar/SidebarSimple.js";

//sidebar2.then(e => console.log(e));

//The VuePress configuration, where the sidebar variable is used, along other configuration options.
export default defineUserConfig({
    lang: 'en-US',
    title: 'Feed The Beast Docs',
    description: 'Documentation for content made by Feed The Beast.',
    theme: defaultTheme({
        sidebar: sidebar,
        logo: 'https://vuejs.org/images/logo.png',
        repo: 'https://github.com/ftbteam/docs',
        docsRepo: 'https://github.com/ftbteam/docs/docs',
        docsBranch: 'main',
        contributors: false,
        colorMode: "dark"
    })
})
