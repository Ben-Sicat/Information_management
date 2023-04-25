import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import { useNavigate } from 'react-router-dom';



interface NavbarProps {
  
  toggleTheme: () => void;
  theme: 'light' | 'dark';
}
const Navbar: React.FC<NavbarProps> = ({ toggleTheme, theme }) => {

const handleAbout: React.MouseEventHandler<HTMLButtonElement> = () => {
  
  navigate('/about');
}
const handleDashboard: React.MouseEventHandler<HTMLButtonElement> = () => {
  navigate('/dashboard');
}
const handleHome: React.MouseEventHandler<HTMLButtonElement> = () => {
  navigate('/main-menu');
}




  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center'}}>
        <div>
          <Button color="inherit" onClick={handleHome}>Home</Button>
          <Button color="inherit" onClick = {handleDashboard}>Dashboard</Button>
          <Button color="inherit" onClick = {handleAbout}>About</Button>
         
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
