import React from 'react';

export default function Display(props) {
  return (
    <div className='calculator-display'>
      <div className='calculator-display-text'>{props.value}</div>
    </div>
  );
}
