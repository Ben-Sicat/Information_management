import { createTheme } from '@mui/material/styles';
import './styles/globalStyles.css';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#533A71', // Purple
    },
    secondary: {
      main: '#77ff92', // Purple na pagod
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '.heading-secondary': {
          color: 'var(--secondary-color)',
        },
        '.heading-primary': {
          color: 'var(--primary-color)',
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#533A71',
    },
    secondary: {
      main: '#FF77E4', // new color
    },
  },
});
