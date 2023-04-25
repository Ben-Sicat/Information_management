import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Box from "@mui/material/Box";

//drawer elements used
import { DrawerProps as MuiDrawerProps } from "@mui/material/Drawer";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DescriptionIcon from "@mui/icons-material/Description";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';

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


  const [open, setState] = useState<boolean>(false);
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if ('key' in event && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };

  const [drawerDropdown, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!drawerDropdown);
  };
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center'}}>
        <div>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{
              mr: 2,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            //position of the drawer where to pop-out
            anchor="left"
            //if open is true --> drawer is shown
            open={open}
            //function that is called when the drawer should close
            onClose={toggleDrawer(false)}
          >
            {/* The inside of the drawer */}
            <Box
              sx={{
                p: 2,
                height: 1,
                width: 300,
                backgroundColor: "#FFFFFF",
              }}
            >
              {/* when clicking the icon it will set the variable to false and closes the drawer */}
              <IconButton sx={{ mb: 2 }}>
                <CloseIcon onClick={toggleDrawer(false)} />
              </IconButton>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ mb: 2 }}>
                <ListItemButton>
                  <ListItemIcon>
                    <DescriptionIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="Filter 1" />
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon>
                    <DescriptionIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="Filter 2" />
                </ListItemButton>

                <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                    <DescriptionIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="Other Fields" />
                  {drawerDropdown ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={drawerDropdown} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <DescriptionIcon />
                      </ListItemIcon>
                      <ListItemText primary="Dropdown 1" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <DescriptionIcon />
                      </ListItemIcon>
                      <ListItemText primary="Dropdown 2" />
                    </ListItemButton>
                  </List>
                </Collapse>

              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                }}
              >
                <Button variant="outlined" sx={{ m: 1, width: 0.5 }}>
                  Sign Out
                </Button>
              </Box>
            </Box>
          </Drawer>
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
