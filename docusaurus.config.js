// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: [
    'docusaurus-plugin-sass',
    async function tailwind(context, options) {
      return {
        name: "docusaurus-tailwind",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    }
  ],
  title: 'Feed The Beast Docs',
  tagline: 'Documentation for FTB Modpacks, Mods, the FTB App and Support topics',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.feed-the-beast.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'FTBTeam', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ftbteam/docs/tree/main/',
          remarkPlugins: [

          ]
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true
      },
      // Replace with your project's social card
      image: 'img/ftb-share-image.png',
      navbar: {
        title: 'FTB Docs',
        logo: {
          alt: 'Feed The Beast Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'app',
            position: 'left',
            label: 'FTB App',
          },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'modpacks',
          //   position: 'left',
          //   label: 'Modpacks',
          // },
          {
            type: 'docSidebar',
            sidebarId: 'marketplace',
            position: 'left',
            label: 'Marketplace'

          },
          {
            type: 'docSidebar',
            sidebarId: 'mods',
            position: 'left',
            label: 'Mods',
          },
          {
            type: 'docSidebar',
            sidebarId: 'support',
            position: 'left',
            label: 'Support',
          },
          {
            href: 'https://github.com/ftbTeam/docs/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'FTB App',
                to: '/docs/app',
              },
              // {
              //   label: 'Modpacks',
              //   to: '/docs/modpacks',
              // },
              {
                label: 'Mods',
                to: '/docs/mods',
              },
              {
                label: 'Support',
                to: '/docs/support',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://go.ftb.team/discord',
              },
              {
                label: 'Twitter',
                href: 'https://go.ftb.team/twitter',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://feed-the-beast.com/blog',
              },
              {
                label: 'GitHub',
                href: 'https://go.ftb.team/github',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Feed The Beast`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
