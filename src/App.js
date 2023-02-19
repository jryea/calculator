import { useContext } from 'react';
import styled from 'styled-components';
import './App.css';
import ThemeProvider from './ThemeProvider';
import Calculator from './Components/Calculator';
import Button from './Components/Button';
import Keypad from './Components/Keypad';
import Header from './Components/Header';
import Display from './Components/Display';
import ToggleSwitch from './Components/ToggleSwitch';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <ThemeProvider>
      <Calculator />
      <GlobalStyles />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
