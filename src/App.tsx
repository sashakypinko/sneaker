import React from 'react';
import {Container, CssBaseline, ThemeProvider} from '@mui/material';
import {BrowserRouter as Router} from 'react-router-dom';
import SnackbarProvider from './components/custom-ui/snackbar';
import Routes from './routes/routes';
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import theme from './configs/theme';

import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/900.css';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <CssBaseline/>
          <Router>
            <Header/>
            <Container maxWidth="xl">
              <Routes/>
            </Container>
            <Footer/>
          </Router>
        </SnackbarProvider>
      </ThemeProvider>
  );
}

export default App;
