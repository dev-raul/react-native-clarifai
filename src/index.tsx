import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Home } from './pages/Home';

import { theme } from './styles/theme';
import { StatusBar } from 'react-native';
import { Providers } from './providers';

if (__DEV__) {
  require('./config/reactotron');
}

const App: React.FC = () => {
  return (
    <Providers>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="dark-content" />
        <Home />
      </ThemeProvider>
    </Providers>
  );
};

export default App;
