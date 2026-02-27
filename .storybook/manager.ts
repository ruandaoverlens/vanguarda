import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

const vanguardaDark = create({
  base: 'dark',
  brandTitle: 'Vanguarda DS',

  // UI
  appBg: '#000000',
  appContentBg: '#000000',
  appPreviewBg: '#000000',
  appBorderColor: '#484848',

  // Text
  textColor: '#F2F2F2',
  textMutedColor: '#A4A4A4',

  // Toolbar
  barBg: '#101010',
  barTextColor: '#F2F2F2',
  barSelectedColor: '#77C5D5',

  // Form
  inputBg: '#202020',
  inputBorder: '#484848',
  inputTextColor: '#F2F2F2',

  // Colors
  colorPrimary: '#77C5D5',
  colorSecondary: '#006298',
});

addons.setConfig({
  theme: vanguardaDark,
});
