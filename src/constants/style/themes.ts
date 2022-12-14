import _ from 'lodash';

export enum Themes {
  ORIGINAL_THEME = 'original-theme',
  DARK_THEME = 'midnight-blue-theme',
  OCEAN_BLUE_THEME = 'deep-ocean-theme',
  BLACK_TERMINAL_THEME = 'monochrome-theme',
  PITCH_BLACK_THEME = 'pitch-black-theme',
  OLD_SCHOOL = 'old-school-theme',
}

export type Theme = {
  key: Themes;
  title: string;
  constants: Record<string, string>;
}

export const DEFAULT_THEME = Themes.ORIGINAL_THEME;

/**
 *
 */
export const constants = {
  [Themes.ORIGINAL_THEME]: {
    '--primary-backdrop': 'hsla(215, 19%, 96%, 1)',
    '--primary-shadow': 'hsla(220, 19%, 80%, 1)',
    '--primary-background': 'hsla(0, 0%, 100%, 1)',
    '--primary-background-hover': 'hsla(0, 0%, 93%, 1)',
    '--primary-background-active': 'hsla(0, 0%, 85%, 1)',
    '--primary-subHeader': 'hsla(215, 12%, 94%, 1)',
    '--primary-header': 'hsla(215, 19%, 12%, 1)',
    '--primary-header-text': 'hsla(0, 0%, 90%, 1)',

    '--secondary-background': 'hsla(215, 19%, 12%, 1)',
    '--secondary-background-hover': 'hsla(215, 15%, 17%, 1)',
    '--secondary-background-active': 'hsla(215, 15%, 22%, 1)',
    '--secondary-background-border': 'hsla(215, 15%, 27%, 1)',
    '--secondary-background-border-hover': 'hsla(215, 15%, 32%, 1)',
    '--secondary-text-header': 'hsla(0, 0%, 70%, 1)',
    '--secondary-text': 'hsla(0, 0%, 85%, 1)',
    '--secondary-text-hover': 'hsla(0, 0%, 100%, 1)',

    '--text-primary': 'hsla(215, 15%, 15%, 1)',
    '--text-secondary': 'hsla(215, 5%, 35%, 1)',
    '--text-placeholder': 'hsla(0, 0%, 55%, 1)',
    '--text-dim': 'hsla(0, 0%, 80%, 1)',
    '--text-reverse': 'hsla(0, 0%, 98%, 1)',

    '--text-link': 'hsla(210, 100%, 80%, 1)',

    '--primary-color': 'hsla(210, 100%, 50%, 1)',
    '--primary-color-hover': 'hsla(210, 100%, 36%, 1)',
    '--primary-color-shadow': 'hsla(210, 100%, 85%, 1)',
    '--primary-color-opacity20': 'hsla(210, 100%, 50%, 0.20)',
    '--primary-color-opacity10': 'hsla(210, 100%, 50%, 0.10)',

    '--secondary-color-green': 'hsla(145, 80%, 25%, 1)',
    '--secondary-color-red': 'hsla(4, 60%, 50%, 1)',

    '--button-reverse-background': 'rgba(255, 255, 255, 0.1)',
    '--button-reverse-background-hover': 'rgba(255, 255, 255, 0.2)',
    '--button-reverse-border': 'rgba(255, 255, 255, 0.24)',
    '--button-reverse-border-hover': 'rgba(255, 255, 255, 0.36)',
    '--button-reverse-text': 'hsla(0, 0%, 100%, 1)',

    '--font-size-xs': '0.875rem',
    '--font-size-sm': '1rem',
    '--font-size-md': '1.125rem',
    '--font-size-lg': '1.25rem',
    '--font-size-xl': '1.5rem',
    '--font-size-2xl': '1.75rem',
    '--font-size-3xl': '2.25rem',
    '--font-size-4xl': '2.25rem',
  },
  [Themes.DARK_THEME]: {
    '--primary-backdrop': 'hsla(215, 15%, 18%, 1)',
    '--primary-shadow': 'hsla(215, 15%, 22%, 1)',
    '--primary-background': 'hsla(215, 19%, 15%, 1)',
    '--primary-background-hover': 'hsla(215, 17%, 20%, 1)',
    '--primary-background-active': 'hsla(215, 15%, 25%, 1)',
    '--primary-subHeader': 'hsla(215, 19%, 17%, 1)',
    '--primary-header': 'hsla(215, 19%, 12%, 1)',
    '--primary-header-text': 'hsla(215, 15%, 85%, 1)',

    '--secondary-background': 'hsla(215, 19%, 12%, 1)',
    '--secondary-background-hover': 'hsla(215, 17%, 15%, 1)',
    '--secondary-background-active': 'hsla(215, 15%, 18%, 1)',
    '--secondary-background-border': 'hsla(215, 13%, 21%, 1)',
    '--secondary-background-border-hover': 'hsla(215, 19%, 24%, 1)',
    '--secondary-text-header': 'hsla(215, 19%, 80%, 1)',
    '--secondary-text': 'hsla(215, 19%, 92%, 1)',
    '--secondary-text-hover': 'hsla(215, 19%, 100%, 1)',

    '--text-primary': 'hsla(215, 15%, 90%, 1)',
    '--text-secondary': 'hsla(215, 15%, 75%, 1)',
    '--text-placeholder': 'hsla(215, 15%, 65%, 1)',
    '--text-dim': 'hsla(215, 15%, 25%, 1)',
    '--text-reverse': 'hsla(215, 15%, 10%, 1)',
    '--text-link': 'hsla(215, 100%, 50%, 1)',

    '--primary-color': 'hsla(210, 100%, 55%, 1)',
    '--primary-color-hover': 'hsla(210, 100%, 45%, 1)',
    '--primary-color-shadow': 'hsla(210, 100%, 75%, 1)',
    '--primary-color-opacity20': 'hsla(210, 100%, 55%, 0.20)',
    '--primary-color-opacity10': 'hsla(210, 100%, 55%, 0.10)',

    '--secondary-color-green': 'hsla(130, 50%, 50%, 1)',
    '--secondary-color-red': 'hsla(1, 100%, 70%, 1)',

    '--button-reverse-background': 'hsla(0, 0%, 100%, 0.1)',
    '--button-reverse-background-hover': 'hsla(0, 0%, 100%, 0.2)',
    '--button-reverse-border': 'hsla(0, 0%, 100%, 0.24)',
    '--button-reverse-border-hover': 'hsla(0, 0%, 100%, 0.36)',
    '--button-reverse-text': 'hsla(0, 0%, 100%, 1)',

    '--font-size-xs': '0.875rem',
    '--font-size-sm': '1rem',
    '--font-size-md': '1.125rem',
    '--font-size-lg': '1.25rem',
    '--font-size-xl': '1.5rem',
    '--font-size-2xl': '1.75rem',
    '--font-size-3xl': '2.25rem',
    '--font-size-4xl': '2.25rem',
  },
  [Themes.OCEAN_BLUE_THEME]: {
    '--primary-backdrop': 'hsla(210, 25%, 25%, 1)',
    '--primary-shadow': 'hsla(208, 25%, 16%, 1)',
    '--primary-background': 'hsla(209, 33%, 18%, 1)',
    '--primary-background-hover': 'hsla(210, 31%, 22%, 1)',
    '--primary-background-active': 'hsla(210, 31%, 26%, 1)',
    '--primary-subHeader': 'hsla(209, 33%, 15%, 1)',
    '--primary-header': 'hsla(209, 32%, 13%, 1)',
    '--primary-header-text': 'hsla(0, 0%, 92%, 1)',

    '--secondary-background': 'hsla(209, 32%, 13%, 1)',
    '--secondary-background-hover': 'hsla(209, 30%, 16%, 1)',
    '--secondary-background-active': 'hsla(209, 30%, 19%, 1)',
    '--secondary-background-border': 'hsla(209, 30%, 22%, 1)',
    '--secondary-background-border-hover': 'hsla(209, 30%, 25%, 1)',
    '--secondary-text-header': 'hsla(0, 0%, 80%, 1)',
    '--secondary-text': 'hsla(0, 0%, 90%, 1)',
    '--secondary-text-hover': 'hsla(0, 0%, 95%, 1)',

    '--text-primary': 'hsla(0, 0%, 92%, 1)',
    '--text-secondary': 'hsla(0, 0%, 80%, 1)',
    '--text-placeholder': 'hsla(0, 0%, 65%, 1)',
    '--text-dim': 'hsla(0, 0%, 50%, 1)',
    '--text-reverse': 'hsla(0, 0%, 25%, 1)',

    '--text-link': 'hsla(210, 100%, 50%, 1)',

    '--primary-color': 'hsla(210, 100%, 55%, 1)',
    '--primary-color-hover': 'hsla(210, 100%, 45%, 1)',
    '--primary-color-shadow': 'hsla(210, 100%, 75%, 1)',
    '--primary-color-opacity20': 'hsla(210, 100%, 55%, 0.20)',
    '--primary-color-opacity10': 'hsla(210, 100%, 55%, 0.10)',

    '--secondary-color-green': 'hsla(130, 50%, 50%, 1)',
    '--secondary-color-red': 'hsla(1, 100%, 70%, 1)',

    '--button-reverse-background': 'hsla(0, 0%, 100%, 0.1)',
    '--button-reverse-background-hover': 'hsla(0, 0%, 100%, 0.2)',
    '--button-reverse-border': 'hsla(0, 0%, 100%, 0.24)',
    '--button-reverse-border-hover': 'hsla(0, 0%, 100%, 0.36)',
    '--button-reverse-text': 'hsla(0, 0%, 100%, 1)',

    '--font-size-xs': '0.875rem',
    '--font-size-sm': '1rem',
    '--font-size-md': '1.125rem',
    '--font-size-lg': '1.25rem',
    '--font-size-xl': '1.5rem',
    '--font-size-2xl': '1.75rem',
    '--font-size-3xl': '2.25rem',
    '--font-size-4xl': '2.25rem',
  },
  [Themes.BLACK_TERMINAL_THEME]: {
    '--primary-backdrop': 'hsla(0, 0%, 17%, 1)',
    '--primary-shadow': 'hsla(0, 0%, 10%, 1)',
    '--primary-background': 'hsla(0, 0%, 12%, 1)',
    '--primary-background-hover': 'hsla(0, 0%, 16%, 1)',
    '--primary-background-active': 'hsla(0, 0%, 20%, 1)',
    '--primary-subHeader': 'hsla(0, 0%, 15%, 1)',
    '--primary-header': 'hsla(0, 0%, 13%, 1)',
    '--primary-header-text': 'hsla(0, 0%, 85%, 1)',

    '--secondary-background': 'hsla(0, 0%, 9%, 1)',
    '--secondary-background-hover': 'hsla(0, 0%, 13%, 1)',
    '--secondary-background-active': 'hsla(0, 0%, 17%, 1)',
    '--secondary-background-border': 'hsla(0, 0%, 21%, 1)',
    '--secondary-background-border-hover': 'hsla(0, 0%, 25%, 1)',
    '--secondary-text-header': 'hsla(0, 0%, 85%, 1)',
    '--secondary-text': 'hsla(0, 0%, 93%, 1)',
    '--secondary-text-hover': 'hsla(0, 0%, 100%, 1)',

    '--text-primary': 'hsla(0, 0%, 95%, 1)',
    '--text-secondary': 'hsla(0, 0%, 80%, 1)',
    '--text-placeholder': 'hsla(0, 0%, 65%, 1)',
    '--text-dim': 'hsla(0, 0%, 50%, 1)',
    '--text-reverse': 'hsla(0, 0%, 25%, 1)',

    '--text-link': 'hsla(210, 100%, 50%, 1)',

    '--primary-color': 'hsla(210, 100%, 55%, 1)',
    '--primary-color-hover': 'hsla(210, 100%, 45%, 1)',
    '--primary-color-shadow': 'hsla(210, 100%, 75%, 1)',
    '--primary-color-opacity20': 'hsla(210, 100%, 55%, 0.20)',
    '--primary-color-opacity10': 'hsla(210, 100%, 55%, 0.10)',

    '--secondary-color-green': 'hsla(130, 50%, 50%, 1)',
    '--secondary-color-red': 'hsla(1, 100%, 70%, 1)',

    '--button-reverse-background': 'hsla(0, 0%, 100%, 0.10)',
    '--button-reverse-background-hover': 'hsla(0, 0%, 100%, 0.20)',
    '--button-reverse-border': 'hsla(0, 0%, 100%, 0.24)',
    '--button-reverse-border-hover': 'hsla(0, 0%, 100%, 0.36)',
    '--button-reverse-text': 'hsla(0, 0%, 100%, 1)',

    '--font-size-xs': '0.875rem',
    '--font-size-sm': '1rem',
    '--font-size-md': '1.125rem',
    '--font-size-lg': '1.25rem',
    '--font-size-xl': '1.5rem',
    '--font-size-2xl': '1.75rem',
    '--font-size-3xl': '2.25rem',
    '--font-size-4xl': '2.25rem',
  },
  [Themes.PITCH_BLACK_THEME]: {
    '--primary-backdrop': 'hsla(215, 3%, 13%, 1)',
    '--primary-shadow': 'hsla(215, 5%, 8%, 1)',
    '--primary-background': 'hsla(215, 2%, 8%, 1)',
    '--primary-background-hover': 'hsla(215, 1%, 11%, 1)',
    '--primary-background-active': 'hsla(215, 0%, 14%, 1)',
    '--primary-subHeader': 'hsla(215, 2%, 12%, 1)',
    '--primary-header': 'hsla(215, 2%, 8%, 1)',
    '--primary-header-text': 'hsla(0, 0%, 85%, 1)',

    '--secondary-background': 'hsla(215, 5%, 5%, 1)',
    '--secondary-background-hover': 'hsla(215, 5%, 10%, 1)',
    '--secondary-background-active': 'hsla(215, 4%, 13%, 1)',
    '--secondary-background-border': 'hsla(215, 3%, 16%, 1)',
    '--secondary-background-border-hover': 'hsla(215, 3%, 20%, 1)',
    '--secondary-text-header': 'hsla(215, 5%, 70%, 1)',
    '--secondary-text': 'hsla(215, 5%, 80%, 1)',
    '--secondary-text-hover': 'hsla(215, 5%, 90%, 1)',

    '--text-primary': 'hsla(215, 2%, 90%, 1)',
    '--text-secondary': 'hsla(215, 2%, 70%, 1)',
    '--text-placeholder': 'hsla(215, 2%, 50%, 1)',
    '--text-dim': 'hsla(215, 2%, 35%, 1)',
    '--text-reverse': 'hsla(215, 2%, 0%, 1)',

    '--text-link': 'hsla(210, 100%, 50%, 1)',

    '--primary-color': 'hsla(210, 100%, 50%, 1)',
    '--primary-color-hover': 'hsla(210, 100%, 30%, 1)',
    '--primary-color-shadow': 'hsla(210, 100%, 65%, 1)',
    '--primary-color-opacity20': 'hsla(210, 100%, 50%, 0.20)',
    '--primary-color-opacity10': 'hsla(210, 100%, 50%, 0.10)',

    '--secondary-color-green': 'hsla(130, 50%, 50%, 1)',
    '--secondary-color-red': 'hsla(1, 100%, 70%, 1)',

    '--button-reverse-background': 'rgba(255, 255, 255, 0.1)',
    '--button-reverse-background-hover': 'rgba(255, 255, 255, 0.2)',
    '--button-reverse-border': 'rgba(255, 255, 255, 0.24)',
    '--button-reverse-border-hover': 'rgba(255, 255, 255, 0.36)',
    '--button-reverse-text': 'hsla(0, 0%, 100%, 1)',

    '--font-size-xs': '0.875rem',
    '--font-size-sm': '1rem',
    '--font-size-md': '1.125rem',
    '--font-size-lg': '1.25rem',
    '--font-size-xl': '1.5rem',
    '--font-size-2xl': '1.75rem',
    '--font-size-3xl': '2.25rem',
    '--font-size-4xl': '2.25rem',
  },
  [Themes.OLD_SCHOOL]: {
    '--primary-backdrop': 'hsla(220, 30%, 96%, 1)',
    '--primary-shadow': 'hsla(220, 20%, 86%, 1)',
    '--primary-background': 'hsla(0, 0%, 100%, 1)',
    '--primary-background-hover': 'hsla(0, 0%, 93%, 1)',
    '--primary-background-active': 'hsla(0, 0%, 85%, 1)',
    '--primary-subHeader': 'hsla(187, 10%, 96%, 1)',
    '--primary-header': 'hsla(187, 8%, 24%, 1)',
    '--primary-header-text': 'hsla(0, 0%, 90%, 1)',

    '--secondary-background': 'hsla(210, 6%, 18%, 1)',
    '--secondary-background-hover': 'hsla(210, 6%, 23%, 1)',
    '--secondary-background-active': 'hsla(210, 6%, 28%, 1)',
    '--secondary-background-border': 'hsla(210, 6%, 32%, 1)',
    '--secondary-background-border-hover': 'hsla(210, 6%, 35%, 1)',
    '--secondary-text-header': 'hsla(0, 0%, 80%, 1)',
    '--secondary-text': 'hsla(0, 0%, 92%, 1)',
    '--secondary-text-hover': 'hsla(0, 0%, 100%, 1)',

    '--text-primary': 'hsla(187, 8%, 24%, 1)',
    '--text-secondary': 'hsla(0, 0%, 45%, 1)',
    '--text-placeholder': 'hsla(0, 0%, 65%, 1)',
    '--text-dim': 'hsla(0, 0%, 80%, 1)',
    '--text-reverse': 'hsla(0, 0%, 98%, 1)',

    '--text-link': 'hsla(192, 68%, 52%, 1)',
    '--text-active': 'hsla(192, 68%, 52%, 1)',

    '--primary-color': 'hsla(192, 68%, 52%, 1)',
    '--primary-color-hover': 'hsla(192, 68%, 42%, 1)',
    '--primary-color-shadow': 'hsla(192, 68%, 70%, 1)',
    '--primary-color-opacity20': 'hsla(192, 68%, 52%, 0.20)',
    '--primary-color-opacity10': 'hsla(192, 68%, 52%, 0.10)',

    '--secondary-color-green': 'hsla(145, 80%, 25%, 1)',
    '--secondary-color-red': 'hsla(4, 60%, 50%, 1)',

    '--button-reverse-background': 'rgba(255, 255, 255, 0.1)',
    '--button-reverse-background-hover': 'rgba(255, 255, 255, 0.2)',
    '--button-reverse-border': 'rgba(255, 255, 255, 0.24)',
    '--button-reverse-border-hover': 'rgba(255, 255, 255, 0.36)',
    '--button-reverse-text': 'hsla(0, 0%, 100%, 1)',

    '--font-size-xs': '1rem',
    '--font-size-sm': '1.125rem',
    '--font-size-md': '1.25rem',
    '--font-size-lg': '1.5rem',
    '--font-size-xl': '1.75rem',
    '--font-size-2xl': '2.25rem',
    '--font-size-3xl': '2.5rem',
    '--font-size-4xl': '3rem',

    '--custom-green': 'hsla(145, 80%, 25%, 1)',
  },
};

export const themes = [
  {key: Themes.ORIGINAL_THEME, title: 'Original', constants: constants[Themes.ORIGINAL_THEME]},
  {key: Themes.DARK_THEME, title: 'Midnight Blue', constants: constants[Themes.DARK_THEME]},
  {key: Themes.OCEAN_BLUE_THEME, title: 'Deep Ocean', constants: constants[Themes.OCEAN_BLUE_THEME]},
  {key: Themes.BLACK_TERMINAL_THEME, title: 'Monochrome', constants: constants[Themes.BLACK_TERMINAL_THEME]},
  {key: Themes.PITCH_BLACK_THEME, title: 'Pitch Black', constants: constants[Themes.PITCH_BLACK_THEME]},
  {key: Themes.OLD_SCHOOL, title: 'Old school', constants: constants[Themes.OLD_SCHOOL]},
];

export const themesMap = _.keyBy(themes, 'key');
