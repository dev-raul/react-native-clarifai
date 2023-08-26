import React from 'react';
import {ThemeProvider} from 'styled-components';
import {theme} from './styles/theme';

const App: React.FC = () => {
  return <ThemeProvider theme={theme} />;
};

export default App;
