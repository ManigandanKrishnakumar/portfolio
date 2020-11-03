import * as IonIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';
import * as RiIcons from 'react-icons/ri';
import * as SiIcons from 'react-icons/si';
import * as MdIcons from 'react-icons/md';
import {ICON_FAMILIES} from '../constants/app-constants';

/**
 * Serves the required icon by name and family dynamically
 * @param {string} family Family Name of the Icon
 * @param {string} name Name of the Icon
 */
export const getIcon = (family, name) => {
  const iconFamilies = {
    [ICON_FAMILIES.ION_ICONS]: IonIcons,
    [ICON_FAMILIES.GI_ICONS]: GiIcons,
    [ICON_FAMILIES.RI_ICONS]: RiIcons,
    [ICON_FAMILIES.SI_ICONS]: SiIcons,
    [ICON_FAMILIES.MD_ICONS]: MdIcons,
    default: IonIcons,
  };

  const iconFamily = iconFamilies[family] || iconFamilies.default;
  return iconFamily[name];
};
