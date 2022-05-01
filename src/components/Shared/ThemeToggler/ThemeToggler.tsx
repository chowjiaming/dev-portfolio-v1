import React from 'react';
import { useDarkMode } from 'usehooks-ts';
import sunIcon from '../../../Assets/sun.svg';
import moonIcon from '../../../Assets/moon.svg';
import './ThemeToggler.css';

const ThemeToggler: React.FC = () => {
  const { isDarkMode, toggle } = useDarkMode();
  return (
    <div className="toggle">
      <p className="toggle__text">{isDarkMode ? 'Light ' : 'Dark '}Mode</p>
      <div className="toggle__switch" onClick={toggle}>
        <img
          className={`toggle__icon ${
            isDarkMode ? 'toggle__icon--light' : 'toggle__icon--dark'
          }`}
          src={isDarkMode ? sunIcon : moonIcon}
          alt={isDarkMode ? 'Light mode icon' : 'Dark mode icon'}
        />
        <div
          className={`toggle__knob ${
            isDarkMode ? 'toggle__knob--light' : 'toggle__knob--dark'
          }`}
        />
      </div>
    </div>
  );
};

export default ThemeToggler;
