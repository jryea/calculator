import React, { useContext } from 'react';
import styled from 'styled-components';
import ToggleSwitch from './ToggleSwitch';
import { ThemeContext } from '../ThemeProvider';

function Header() {
  const { colors } = useContext(ThemeContext);
  const styles = { '--font-color': `${colors.textDisplay}` };
  return (
    <Wrapper style={styles}>
      <Title>calc</Title>
      <ThemeWrapper>
        <ThemeText>THEME</ThemeText>
        <Toggle>
          <ToggleNumbers>
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </ToggleNumbers>
          <ToggleSwitch />
        </Toggle>
      </ThemeWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  color: var(--font-color);
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 54rem;
  height: 4.4rem;
`;

const Title = styled.h2`
  color: inherit;
  font-size: 3.2rem;
`;

const ThemeWrapper = styled.div`
  display: flex;
`;

const ThemeText = styled.p`
  color: inherit;
  font-size: 1.2rem;
  letter-spacing: 1px;
`;

const Toggle = styled.div`
  width: 7.1rem;
  margin-left: 3rem;
`;

const ToggleNumbers = styled.div`
  padding: 0 6px;
  display: flex;
  justify-content: space-between;
  color: inherit;
  font-size: 1.2rem;
  margin-bottom: 5px;
  & p {
    margin: 0 10px;
  }
`;

export default Header;
