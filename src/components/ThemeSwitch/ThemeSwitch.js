import React, {useEffect} from 'react';
import './ThemeSwitch.scss';
import {THEMES} from '../../constants/theme';
import {IoIosSunny, IoIosMoon} from 'react-icons/io';

export default ({onThemeChange, theme}) => {
  const inputRef = React.createRef();
  const onCheck = () => {
    inputRef.current.checked
      ? onThemeChange(THEMES.DARK)
      : onThemeChange(THEMES.LIGHT);
  };
  useEffect(() => {
    inputRef.current.checked = theme === THEMES.DARK;
  }, [theme, inputRef]);
  return (
    <div className="theme-switch-container">
      <IoIosSunny className="day-icon" />
      <div className="switch-checkbox">
        <input type="checkbox" id="switch" ref={inputRef} onClick={onCheck} />
        <label htmlFor="switch"></label>
      </div>
      <IoIosMoon className="night-icon" />
    </div>
  );
};
