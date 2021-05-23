import React from 'react';
import Home from "./Pages/Home/Home"
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme(
  {
    palette : {
      primary: {
        main: '#81D0DB'
      }
    }
  }
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
    
  )
}

export default App;