import React, { useRef } from 'react';
import { useState } from 'react';
import Header from './Header';
import Display from './Display';
import Keypad from './Keypad';

export default function Calculator(props) {
  const [display, setDisplay] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [operand, setOperand] = useState(null);

  useRef(console.log(value1));
  useRef(console.log(value2));
  useRef(console.log(operand));

  function handleClick(e) {
    const numbers = '0123456789.';
    const operands = '+-x/';
    const key = e.target.innerText;

    if (numbers.includes(key)) {
      if (operand) {
        setValue2((prevVal) => prevVal + key);
        setDisplay((prevVal) => (prevVal ? prevVal + key : key));
      } else {
        setValue1((prevVal) => prevVal + key);
        setDisplay((prevVal) => (prevVal ? prevVal + key : key));
      }
    }
    if (operands.includes(key)) {
      setOperand(key);
      setDisplay(0);
    }
    if (key === '=') {
      switch (operand) {
        case '+':
          setDisplay(Number(value1) + Number(value2));
          setValue1(Number(value1) + Number(value2));
          setValue2(0);
          setOperand(null);
          break;
        case '-':
          setDisplay(Number(value1) - Number(value2));
          setValue1(Number(value1) - Number(value2));
          setValue2(0);
          setOperand(null);
          break;
        case 'x':
          setDisplay(Number(value1) * Number(value2));
          setValue1(Number(value1) * Number(value2));
          setValue2(0);
          setOperand(null);
          break;
        case '/':
          setDisplay(Number(value1) / Number(value2));
          setValue1(Number(value1) / Number(value2));
          setValue2(0);
          setOperand(null);
          break;
      }
    }
    if (key === 'RESET') {
      setDisplay(0);
      setValue1(0);
      setValue2(0);
      setOperand(null);
    }

    // setDisplay((prevState) => '');
  }
  return (
    <div className='calculator'>
      <Header toggle={props.toggle} />
      <Display value={display} />
      <Keypad buttonClick={handleClick} />
    </div>
  );
}
