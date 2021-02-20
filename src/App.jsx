import React from "react";

import GlobalStyles from "./styles/GlobalStyles";
import ThemeProvider from "./styles/ThemeProvider";

import Routes from "./routes";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
