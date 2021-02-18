import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import ThemeProvider from './styles/ThemeProvider';

import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
