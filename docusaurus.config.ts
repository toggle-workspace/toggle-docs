import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Toggle Brain',
  tagline: 'Internal knowledge hub for Toggle Solutions',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://brain.toggle.solutions',
  baseUrl: '/',

  organizationName: 'toggle-workspace',
  projectName: 'toggle-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    format: 'md',
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        docsRouteBasePath: '/',
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        language: 'en',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Toggle Solutions',
        src: 'img/logo-light.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        { type: 'docSidebar', sidebarId: 'brain',      label: 'Brain',      position: 'left' },
        { type: 'docSidebar', sidebarId: 'playbooks',   label: 'Playbooks',  position: 'left' },
        { type: 'docSidebar', sidebarId: 'generators',  label: 'Generators', position: 'left' },
        { type: 'docSidebar', sidebarId: 'prompts',     label: 'Prompts',    position: 'left' },
        { type: 'docSidebar', sidebarId: 'templates',   label: 'Templates',  position: 'left' },
        { type: 'docSidebar', sidebarId: 'clients',     label: 'Clients',    position: 'left' },
        { type: 'docSidebar', sidebarId: 'cockpit',     label: 'Cockpit',    position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Toggle Solutions. Internal use only.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
