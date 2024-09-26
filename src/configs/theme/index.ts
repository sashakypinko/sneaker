import {createTheme} from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
    h4: {
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      main: '#090D1A',
    },
    secondary: {
      main: '#dddddd',
    },
    text: {
      primary: '#131313',
      secondary: '#ffffff',
      disabled: '#858585',
    },
  },
});

export default theme;