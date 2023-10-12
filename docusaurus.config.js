module.exports = {
  title: 'Jonas Wahl CV',
  tagline: 'Sounding!',
  url: 'https://your-docusaurus-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'JJWAHL',
  projectName: 'Jonas CV',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      items: [
        {
          type: 'doc',
          docId: 'cv',
          position: 'left',
          label: 'My CV',
        },
        // Add other navbar items as needed
      ],
    },
  },
};
