import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../ThemeProvider';

function ToggleSwitch() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <ToggleElem>
      <ToggleButton onClick={toggleTheme}></ToggleButton>
    </ToggleElem>
  );
}

const ToggleElem = styled.div`
  padding: 0 8px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 7.1rem;
  height: 2.6rem;
  border-radius: 1.3rem;
  background-color: black;
`;

const ToggleButton = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  background-color: red;
  &:hover {
    cursor: pointer;
    background-color: lighten(red);
  }
`;

export default ToggleSwitch;
