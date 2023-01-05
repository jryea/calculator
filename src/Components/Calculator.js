import React from 'react';
import { useEffect, useState, useRef } from 'react';
import Header from './Header';
import Display from './Display';
import Keypad from './Keypad';

export default function Calculator(props) {
  const [display, setDisplay] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [operand, setOperand] = useState(null);

  // Need to find a way to implement this without writing duplicate code

  // handle keyboard buttons
  useEffect(() => {
    function keyDownHandler(e) {
      const numbers = '0123456789.';
      const operands = '+-x/*';
      const key = String(e.key);

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
        setOperand(() => key);
        setDisplay(0);
        console.log(operand);
      }
      if (key === 'Enter') {
        console.log(operand);
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
          case '*':
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
      if (key === 'Escape') {
        setDisplay(0);
        setValue1(0);
        setValue2(0);
        setOperand(null);
      }
    }

    document.addEventListener('keydown', keyDownHandler);
    return () => document.removeEventListener('keydown', keyDownHandler);
  }, [operand, value1, value2]);

  // Handle button clicks
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
  }
  return (
    <div className='calculator'>
      <Header toggle={props.toggle} />
      <Display value={display} />
      <Keypad buttonClick={handleClick} />
    </div>
  );
}
