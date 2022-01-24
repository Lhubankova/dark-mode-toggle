import React from 'react';
import './ThemeSwitch.scss';

function ThemeSwitch({isOn, handleToggle}) {
  return (
    <div className='theme-switch-btn'>
        <input
          checked={isOn}
          onChange={handleToggle}
          className="react-switch-checkbox"
          id={`react-switch-new`}
          type="checkbox"
        />
        <label
          className="react-switch-label"
          htmlFor={`react-switch-new`}
        >
          <span className={`react-switch-button`} />
        </label>
    </div>
  );
}

export default ThemeSwitch;