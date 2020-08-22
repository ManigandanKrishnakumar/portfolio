import {THEMES} from '../constants/theme';

/**
 * This function initializes theme
 * @param {string} setUITheme
 */
export const InitializeTheme = (setUITheme) => {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    setUITheme(THEMES.DARK);
  } else {
    setUITheme(THEMES.LIGHT);
  }
};
