import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';

interface NavbarProps {
  toggleTheme: () => void;
  theme: 'light' | 'dark';
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, theme }) => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <div>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
        </div>
        <div>
          <IconButton
            color="inherit"
            aria-label="theme"
            onClick={toggleTheme}
          >
            {theme === 'light' ? <NightlightRoundIcon /> : <LightModeIcon />}
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
