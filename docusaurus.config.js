module.exports = {
  title: 'Jonas Wahl CV',
  tagline: 'Sounding!',
  url: 'https://your-docusaurus-site.com', // Update with your site URL
  baseUrl: '/', // Update with your site's base URL
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico', // Set your favicon path
  organizationName: 'JJWAHL', // Your GitHub organization or username
  projectName: 'Jonas CV', // Your GitHub repository name

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'), // Set up your sidebar navigation
          // Additional configuration for the 'docs' section
        },
        // Configure other sections as needed (e.g., 'blog', 'pages', etc.)
      },
    ],
  ],

  themeConfig: {
	  prism: {
    theme: lightCodeTheme,
    darkTheme: darkCodeTheme,
    networkBindAddress: '0.0.0.0',
    navbar: {
      items: [
        {
          type: 'doc',
          docId: 'cv',
          position: 'left',
          label: 'My CV', // Match this label with your sidebar configuration
        },
        // Add other navbar items as needed
      ],
    },
    // ... (footer configuration)
  },
};
