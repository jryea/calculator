import React from 'react';
import Button from './Button';
import { nanoid } from 'nanoid';
import keyData from './keyData';

// const keyData = [
//   { display: '1', output: 1, color: 'white', width: 'narrow' },
//   { display: '2', output: 2, color: 'white', width: 'narrow' },
// ];

export default function Keypad(props) {
  return (
    <div className='calculator-keypad'>
      {keyData.map((key) => {
        return (
          <Button
            buttonClick={props.buttonClick}
            output={key.output}
            color={key.color}
            width={key.width}
            display={key.display}
            key={nanoid()}
          />
        );
      })}
    </div>
  );
}
