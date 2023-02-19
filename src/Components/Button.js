import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../ThemeProvider';

const WIDTHS = {
  narrow: { '--width': '10rem' },
  wide: { '--width': '22.7rem' },
};

function Button({ value, width, color, handleClick }) {
  const { colors } = useContext(ThemeContext);
  const BUTTON_COLORS = {
    primary: {
      '--button-color': `${colors.keyPrimary}`,
      '--button-shadow-color': `${colors.keyPrimaryShadow}`,
      '--text-color': `${colors.textPrimary}`,
      '--font-size': '4rem',
    },
    secondary: {
      '--button-color': `${colors.keySecondary}`,
      '--button-shadow-color': `${colors.keySecondaryShadow}`,
      '--text-color': `${colors.textSecondary}`,
      '--font-size': '2.8rem',
    },
    accent: {
      '--button-color': `${colors.keyAccent}`,
      '--button-shadow-color': `${colors.keyAccentShadow}`,
      '--text-color': `${colors.textAccent}`,
      '--font-size': '2.8rem',
    },
  };
  const buttonColors = BUTTON_COLORS[color];
  const widths = WIDTHS[width];
  const styles = { ...widths, ...buttonColors };

  return (
    <>
      <BaseButton style={styles} onClick={handleClick}>
        {value}
      </BaseButton>
    </>
  );
}

const BaseButton = styled.button`
  border: none;
  font-size: var(--font-size);
  font-weight: 700;
  background-color: var(--button-color);
  box-shadow: inset 0px -0.4rem 0px var(--button-shadow-color);
  width: var(--width);
  height: 6.4rem;
  border-radius: 10px;
  color: var(--text-color);
`;

export default Button;
