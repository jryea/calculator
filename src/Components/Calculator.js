import React from 'react';
import { useEffect, useState, useRef } from 'react';
import Header from './Header';
import Display from './Display';
import Keypad from './Keypad';

export default function Calculator({ toggleTheme }) {
  const [expression, setExpression] = useState('');
  const [totalValue, setTotalValue] = useState('');
  const [display, setDisplay] = useState('');
  const [currentValue, setCurrentValue] = useState('');

  // const [value1, setValue1] = useState(0);
  // const [value2, setValue2] = useState(0);
  // const [operand, setOperand] = useState(null);

  // Need to find a way to implement this without writing duplicate code

  // handle keyboard buttons
  // useEffect(() => {
  //   function keyDownHandler(e) {
  //     const numbers = '0123456789.';
  //     const values = '+-x/*';
  //     const key = String(e.key);

  //     if (numbers.includes(key)) {
  //       if (operand) {
  //         setValue2((prevVal) => prevVal + key);
  //         setDisplay((prevVal) => (prevVal ? prevVal + key : key));
  //       } else {
  //         setValue1((prevVal) => prevVal + key);
  //         setDisplay((prevVal) => (prevVal ? prevVal + key : key));
  //       }
  //     }
  //     if (values.includes(key)) {
  //       setOperand(() => key);
  //       setDisplay(0);
  //       console.log(operand);
  //     }

  //     if (key === 'Enter') {
  //       console.log(operand);
  //       switch (operand) {
  //         case '+':
  //           setDisplay(Number(value1) + Number(value2));
  //           setValue1(Number(value1) + Number(value2));
  //           setValue2(0);
  //           setOperand(null);
  //           break;
  //         case '-':
  //           setDisplay(Number(value1) - Number(value2));
  //           setValue1(Number(value1) - Number(value2));
  //           setValue2(0);
  //           setOperand(null);
  //           break;
  //         case '*':
  //           setDisplay(Number(value1) * Number(value2));
  //           setValue1(Number(value1) * Number(value2));
  //           setValue2(0);
  //           setOperand(null);
  //           break;
  //         case '/':
  //           setDisplay(Number(value1) / Number(value2));
  //           setValue1(Number(value1) / Number(value2));
  //           setValue2(0);
  //           setOperand(null);
  //           break;
  //       }
  //     }
  //     if (key === 'Escape') {
  //       setDisplay(0);
  //       setValue1(0);
  //       setValue2(0);
  //       setOperand(null);
  //     }
  //   }

  //   document.addEventListener('keydown', keyDownHandler);
  //   return () => document.removeEventListener('keydown', keyDownHandler);
  // }, [operand, value1, value2]);

  // Handle button clicks
  function handleClick(e) {
    const numberKeys = '0123456789.';
    const operatorKeys = '+-x/';
    const key = e.target.innerText;

    // values
    if (numberKeys.includes(key)) {
      const nextValue = currentValue + key;
      setCurrentValue(nextValue);
      setDisplay(nextValue);
    }
    //  operators
    let currentExpression;
    if (operatorKeys.includes(key)) {
      if (expression[expression.length - 1] === '=') {
        currentExpression = String(totalValue);
      } else {
        currentExpression = expression + ' ' + currentValue;
      }
      const nextExpression = currentExpression + ' ' + key;
      setTotalValue(evaluateExpression(currentExpression));
      setCurrentValue('');
      setDisplay(String(evaluateExpression(currentExpression)).slice(0, 14));
      setExpression(nextExpression);
    }

    if (key === 'RESET') {
      setExpression('');
      setCurrentValue('');
      setDisplay('');
    }

    if (key === '=') {
      if (!currentValue) return;
      const nextExpression = expression + ' ' + currentValue;
      setTotalValue(evaluateExpression(nextExpression));
      setCurrentValue(evaluateExpression(nextExpression));
      setDisplay(evaluateExpression(nextExpression));
      setExpression(nextExpression + ' =');
    }

    function evaluateExpression(expression) {
      return eval(expression.replaceAll('x', '*'));
    }
  }

  return (
    <div className='calculator'>
      <Header toggle={toggleTheme} />
      <Display displayMain={display} displayExpression={expression} />
      <Keypad buttonClick={handleClick} />
    </div>
  );
}
