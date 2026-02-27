import type { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import { create } from 'storybook/theming/create';
import React from 'react';
import '../src/app/globals.css';

/**
 * Font CSS variables are normally injected by next/font in layout.tsx.
 * In Storybook (no Next.js runtime) we load the fonts via Google Fonts
 * directly and manually assign the CSS custom properties that the DS
 * tokens depend on.
 */
const FontDecorator = (Story: React.ComponentType) => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');

      :root {
        --font-outfit: 'Outfit', sans-serif;
        --font-inter: 'Inter', sans-serif;
        --font-jetbrains-mono: 'JetBrains Mono', monospace;
      }

      body {
        font-family: var(--font-inter), sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `}</style>
    <Story />
  </>
);

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'dark',
    }),
    FontDecorator,
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    nextjs: {
      appDirectory: true,
    },

    layout: 'centered',

    backgrounds: { disable: true },

    docs: {
      theme: create({
        base: 'dark',
        appBg: '#000000',
        appContentBg: '#000000',
        appPreviewBg: '#000000',
        appBorderColor: '#484848',
        textColor: '#F2F2F2',
        textMutedColor: '#A4A4A4',
        barBg: '#101010',
        colorPrimary: '#77C5D5',
        colorSecondary: '#006298',
      }),
    },

    a11y: {
      config: {},
      options: {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'wcag21aa'],
        },
      },
    },
  },

  initialGlobals: {
    theme: 'dark',
  },
};

export default preview;
