import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0077FF',
    },
    secondary: {
      main: '#FF77E4', // new color
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0077FF',
    },
    secondary: {
      main: '#FF77E4', // new color
    },
  },
});
