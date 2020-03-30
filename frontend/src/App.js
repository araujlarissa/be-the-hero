import React from 'react';
import { ToastContainer } from 'react-toastify';

import { ThemeProvider } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';
import ToggleTheme from './components/ToggleTheme';

import Routes from './routes';

function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToggleTheme toggleTheme={toggleTheme} />
      <Routes />
      <ToastContainer autoClose={3500} />
    </ThemeProvider>
  );
}

export default App;
