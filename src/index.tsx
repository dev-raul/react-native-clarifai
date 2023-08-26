import React from 'react';
import {ThemeProvider} from 'styled-components';

import {Home} from './pages/Home';

import {theme} from './styles/theme';
import {StatusBar} from 'react-native';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <Home />
    </ThemeProvider>
  );
};

export default App;
