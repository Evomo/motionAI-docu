module.exports = {
  title: 'Evomo MotionAI SDK',
  tagline: 'Next level tracking technology',
  url: 'https://evomo.github.io',
  baseUrl: '/motionAI-docu/',
  favicon: 'img/favicon.ico',
  organizationName: 'evomo', // Usually your GitHub org/user name.
  projectName: 'motionAI-docu', // Usually your repo name.
  themes: ['@docusaurus/theme-classic'],
  themeConfig: {
    prism: {
      additionalLanguages: ['swift'],
      theme: require('prism-react-renderer/themes/nightOwl'),
    },
    navbar: {
      title: 'Evomo MotionAI SDK',
      logo: {
        alt: 'My Site Logo',
        src: 'img/evomoLogo.png',
      },
      links: [
        {to: 'docs/getStarted', label: 'Documentation', position: 'left'},
        {href: 'https:/www.evomo.de', label: 'About Evomo', position: 'left'},
        {
          href: 'https://github.com/Evomo/evomoExampleApp',
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
              label: 'Get Started',
              to: 'docs/getStarted',
            },
            {
              label: 'Documentation',
              to: 'docs/documentation',
            },
            {
              label: 'Example App',
              to: 'docs/exampleApp',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/motionaisdk',
            },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/docusaurus',
            // },
          ],
        },
        {
          title: 'Evomo',
          items: [
            {
              label: 'Website',
              href: 'https://www.evomo.de/',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/12959970/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/evomo/',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/EvomoTech',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Evomo UG. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

};
