import {DARK, LIGHT} from '../themes';
import {THEMES} from '../constants/theme';

export const getTheme = (themeName) => {
  switch (themeName) {
    case THEMES.DARK:
      return DARK;
    case THEMES.LIGHT:
      return LIGHT;
    default:
      return LIGHT;
  }
};
