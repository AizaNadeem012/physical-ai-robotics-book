// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  // 📚 Site Metadata 
  title: 'Physical AI Control Systems', 
  tagline: 'Comprehensive Tutorials for Humanoid Robotics and AI Planning',
  favicon: 'img/favicon.ico',

  future: { v4: true, },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'YourAIOrg', 
  projectName: 'AI-Control-Systems-Book', 

  onBrokenLinks: 'throw',

  i18n: { defaultLocale: 'en', locales: ['en'], },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/YourAIOrg/AI-Control-Systems-Book/tree/main/', 
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/YourAIOrg/AI-Control-Systems-Book/tree/main/',
          feedOptions: { type: ['rss', 'atom'], xslt: true },
        },
        theme: {
          customCss: './src/css/styles.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/robotics-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
        defaultMode: 'dark', // Default dark mode set
        disableSwitch: false,
      },
      // 🖼️ Elegant Navbar
      navbar: {
        title: 'Physical AI Control Systems', 
        logo: {
          alt: 'Project Lab Logo', 
          src: 'img/logo.svg',
        },
        items: [
          { label: 'Projects', to: '/#projects', position: 'left' },
          { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Book Chapters', },
          { to: '/blog', label: 'AI Insights', position: 'left' },
          { href: 'https://github.com/YourAIOrg/AI-Control-Systems-Book', label: 'GitHub', position: 'right', },
        ],
      },
      // 📝 Footer Configuration
      footer: {
        style: 'dark',
        links: [
          { title: 'Book Chapters', items: [{ label: 'Start Reading', to: '/docs/intro' }] },
          { title: 'Community & Connect', items: [{ label: 'Discord Channel', href: 'https://discordapp.com/invite/docusaurus' }, { label: 'X (Follow)', href: 'https://x.com/YourHandle' }] },
          { title: 'More Resources', items: [{ label: 'Blog', to: '/blog' }, { label: 'GitHub Repository', href: 'https://github.com/YourAIOrg/AI-Control-Systems-Book' }] },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Physical AI Control Systems. Built with Docusaurus.`, 
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;