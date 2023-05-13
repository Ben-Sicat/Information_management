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
          fontFamily: 'Inter, sans-serif'
        },
        '.heading-primary': {
          color: 'var(--primary-color)',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        style: {
          fontFamily: 'Inter, sans-serif', // add the Inter font family
        },
      },
      styleOverrides: {
        h1: {
          fontWeight: 700, 
        },
        h2: {
          fontWeight: 700, 
        },
        h3: {
          fontWeight: 700, 
        },
        h4: {
          fontWeight: 700, 
        },
        h5: {
          fontWeight: 700, 
        },
        h6: {
          fontWeight: 700, 
        },
        subtitle1: {
          fontWeight: 700, 
        },
        subtitle2: {
          fontWeight: 700, 
        },
        body1: {
          fontWeight: 400, 
        },
        body2: {
          fontWeight: 400, 
        },
        button: {
          fontWeight: 700, 
        },
        caption: {
          fontWeight: 400, 
        },
        overline: {
          fontWeight: 700, 
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          textTransform: 'none', // to preserve the font weight on hover and focus states
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
