import { createContext, useState } from 'react';
import './App.css';
import Calculator from './Components/Calculator';

// export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('theme1');

  function handleToggle() {
    setTheme((prevState) => {
      if (prevState === 'theme1') return 'theme2';
      else if (prevState === 'theme2') return 'theme3';
      else if (prevState === 'theme3') return 'theme1';
    });
  }

  return (
    <div id={theme} className='background'>
      <Calculator toggle={handleToggle} />
    </div>
  );
}
export default App;
