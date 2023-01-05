import React from 'react';

export default function ToggleSwitch(props) {
  return (
    <div className='calculator-header-theme-toggle-switch'>
      <div
        className='calculator-header-theme-toggle-switch-button'
        onClick={props.toggle}
      ></div>
    </div>
  );
}
