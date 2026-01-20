// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

//const lightCodeTheme = require('prism-react-renderer/themes/github');
//const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CDDA中文攻略手册',
  tagline: "本文是基于纯净原版的「攻略手册」，本意是为玩家提供一些游戏资料、建议与各类机制的粗略解释。\n开始阅读后，左侧目录为章节目录，右侧目录为章内目录。",
  favicon: 'img/cataicon.ico',

  // Set the production url of your site here
  url: 'https://surflurer.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/CDDA-CN-Guide/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Surflurer', // Usually your GitHub org/user name.
  projectName: 'CDDA-CN-Guide', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  markdown: {
    format: 'md', // 强制所有 .md 文件使用 CommonMark 解析，解决 <item> 报错
    mermaid: true,
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
            'https://github.com/SurFlurer/CDDA-CN-Guide/edit/master/CataclysmDDA综合攻略手册/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'CDDA中文攻略手册',
        logo: {
          alt: 'My Site Logo',
          src: 'img/cataicon.ico',
        },
        items: [
          {
            type: 'doc',
            docId: '总目录',
            position: 'left',
            label: '目录',
          },
          {
            href: 'https://github.com/SurFlurer/CDDA-CN-Guide',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '目录',
                to: '/docs/总目录',
              },
            ],
          },
          {
            title: '社群',
            items: [
              {
                label: '百度贴吧',
                href: 'https://tieba.baidu.com/f?kw=cataclysmdda',
              },
              {
                label: 'QQ频道',
                href: 'https://pd.qq.com/s/4q2t1dqub',
              },
              {
                label: '幸存者基地',
                href: 'http://cdda.fun',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '游戏GitHub项目地址',
                href: 'https://github.com/CleverRaven/Cataclysm-DDA',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Surflurer, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    themes: [
      '@docusaurus/theme-mermaid',
      [
        
        
        require.resolve('@easyops-cn/docusaurus-search-local'),
        {
          // ... Your options.
          // `hashed` is recommended as long-term-cache of index file is possible.
          hashed: true,
          // For Docs using Chinese, The `language` is recommended to set to:
          // ```
          language: ['en', 'zh'],
          // ```
          indexDocs: true,
          indexBlog: false,
          docsRouteBasePath: 'docs',
          docsDir: 'docs',
        },
      ],
    ],
};

module.exports = config;
