import React from 'react';

export default function Display({ displayMain, displayExpression }) {
  return (
    <div className='calculator-display'>
      <div className='calculator-display-expression'>{displayExpression}</div>
      <div className='calculator-display-text'>{displayMain}</div>
    </div>
  );
}
