import React from 'react';

export default function Button(props) {
  return (
    <button
      className={`button ${props.color === 'blue' ? 'blue small-text' : ''} ${
        props.color === 'red' ? 'red small-text' : ''
      } ${props.width === 'wide' ? 'wide' : ''}`}
      onClick={props.buttonClick}
    >
      {props.display}
    </button>
  );
}
