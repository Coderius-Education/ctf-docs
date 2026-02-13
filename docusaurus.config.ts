import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'coderius-ctf',
  tagline: 'Leer cybersecurity door Capture the Flag challenges',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'nl',
    locales: ['nl'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'coderius-ctf',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Challenges',
        },
        {
          to: '/presentatie',
          label: 'Presentatie',
          position: 'left',
        },
        {
          to: '/toolbox',
          label: 'Toolbox',
          position: 'left',
        },
        {
          to: '/woordenlijst',
          label: 'Woordenlijst',
          position: 'left',
        },
        {
          href: 'https://ctf.hackchallenges.nl/register',
          label: 'Registreer',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Challenges',
          items: [
            {
              label: 'Aan de slag',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'CTF Platform',
              href: 'https://ctf.hackchallenges.nl/register',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Coderius Education. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
