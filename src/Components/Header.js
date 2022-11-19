import React from 'react';

export default function Header() {
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
          <div className='calculator-header-theme-toggle-switch'>
            <div className='calculator-header-theme-toggle-switch-button'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
