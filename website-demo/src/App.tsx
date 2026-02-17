import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import Header from './components/Header';
import Hero from './components/Hero';
import Objectives from './components/Objectives';
import Solutions from './components/Solutions';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[800],
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: grey[50],
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h2: {
      fontWeight: 700,
      color: blue[900],
    },
    h5: {
      fontWeight: 600,
      color: blue[800],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Hero />
      <Objectives />
      <Solutions />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
