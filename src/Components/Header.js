import React from 'react';
import ToggleSwitch from './ToggleSwitch';

export default function Header(props) {
  return (
    <div className='calculator-header'>
      <h2 className='calculator-header-text'>calc</h2>
      <div className='calculator-header-theme'>
        <p className='calculator-header-theme-text'>THEME</p>
        <div className='calculator-header-theme-toggle'>
          <div className='calculator-header-theme-toggle-numbers'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <ToggleSwitch toggle={props.toggle} />
        </div>
      </div>
    </div>
  );
}
