import React from 'react';
import '../globalStyles.tsx';
import Theme from './ThemeCSS';
import { Button, Typography } from '@mui/material';

const ThemeCSS: React.FC = () => {
  return (
    <Button variant="contained" onClick={toggleTheme}>
    Toggle Theme
  </Button>
  );
}

export default ThemeCSS;
