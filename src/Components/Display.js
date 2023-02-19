import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeProvider';
import styled from 'styled-components';

function Display({ displayMain, displayExpression }) {
  const { colors } = useContext(ThemeContext);
  const styles = {
    '--background-color': `${colors.screenBackground}`,
    '--text-color': `${colors.textDisplay}`,
  };
  return (
    <Wrapper style={styles}>
      <Expression style={styles}>{displayExpression}</Expression>
      <DisplayText style={styles}>{displayMain}</DisplayText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 32px;
  align-items: flex-end;
  background-color: var(--background-color);
  width: 54rem;
  height: 12.8rem;
  border-radius: 1rem;
`;

const Expression = styled.div`
  color: var(--text-color);
  opacity: 0.5;
  font-size: 2.4rem;
`;

const DisplayText = styled.div`
  color: var(--text-color);
  font-size: 5.6rem;
  justify-self: flex-end;
`;

export default Display;
