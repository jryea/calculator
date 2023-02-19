import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeProvider';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

import keyData from './keyData';

import Button from './Button';

function Keypad({ handleClick }) {
  const { colors } = useContext(ThemeContext);
  const styles = { '--color': `${colors.keypadBackground}` };

  return (
    <KeypadElem style={styles}>
      {keyData.map((key) => {
        return (
          <Button
            handleClick={handleClick}
            output={key.output}
            color={key.color}
            width={key.width}
            value={key.display}
            key={nanoid()}
          />
        );
      })}
    </KeypadElem>
  );
}

const KeypadElem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: space-between;
  padding: 3rem;
  margin-top: 2.4rem;
  background-color: var(--color);
  width: 54rem;
  height: 48rem;
  border-radius: 1rem;
`;

export default Keypad;
