import React from 'react';
import {AppBar, Toolbar, Button, IconButton, Drawer, Box, Divider} from '@mui/material/';
import { useNavigate } from 'react-router-dom';
import {useState}  from 'react';
import {ListItemButton, ListItemIcon, ListItemText, List, Collapse} from "@mui/material";
import {ExpandLess, ExpandMore, Description, Menu, Close, LightMode,NightlightRound} from "@mui/icons-material";



interface NavbarProps {
  
  toggleTheme: () => void;
  theme: 'light' | 'dark';
  filterData: (field: string) => void;
}


const Navbar: React.FC<NavbarProps> = ({ toggleTheme, theme, filterData }) => {

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

  const [genderDropdown, setGenderDropdown] = React.useState(false);
  const [civilStatusDropdown, setCivilStatusDropdown] = React.useState(false);
  const [voterDropdown, setVoterStatusDropdown] = React.useState(false);
  const [statusDropdown, setStatusDropdown] = React.useState(false);

  const handleGenderClick = () => {
    setGenderDropdown(!genderDropdown);
  };

  const handleCivilStatusClick = () => {
    setCivilStatusDropdown(!civilStatusDropdown);
  };

  const handleVoterClick = () => {
    setVoterStatusDropdown(!voterDropdown);
  };

  const handleStatusClick = () => {
    setStatusDropdown(!statusDropdown);
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
            <Menu />
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
                <Close onClick={toggleDrawer(false)} />
              </IconButton>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ mb: 2 }}>
                <ListItemButton onClick={()=> filterData('bldg-no')}>
                  <ListItemIcon>
                    <Description sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="BLDG. NO." />
                </ListItemButton>

                <ListItemButton onClick={() => filterData('street-name')}>
                  <ListItemIcon>
                    <Description sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="STREET NAME" />
                </ListItemButton>

                <ListItemButton onClick={() => filterData('district-no')}>
                  <ListItemIcon>
                    <Description sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="DISTRICT NO." />
                </ListItemButton>
                
                <ListItemButton onClick={()=> filterData('district-name')}>
                  <ListItemIcon>
                    <Description sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="DISTRICT NAME" />
                </ListItemButton>

                <ListItemButton onClick={() => filterData('zone')}>
                  <ListItemIcon>
                    <Description sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="ZONE" />
                </ListItemButton>

                <ListItemButton onClick={handleGenderClick}>
                  <ListItemIcon>
                    <Description sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="GENDER" />
                  {genderDropdown ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>               
                <Collapse in={genderDropdown} timeout="auto" unmountOnExit> {/* DROPDOWN MENU OF GENDER */}
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => filterData('male')}>
                      <ListItemIcon>
                        <Description />
                      </ListItemIcon>
                      <ListItemText primary="MALE" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={()=> filterData('female')}>
                      <ListItemIcon>
                        <Description />
                      </ListItemIcon>
                      <ListItemText primary="FEMALE" />
                    </ListItemButton>
                  </List>
                </Collapse>


                <ListItemButton onClick={handleCivilStatusClick}>
                  <ListItemIcon>
                    <Description sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="CIVIL STATUS" />
                  {civilStatusDropdown ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>               
                <Collapse in={civilStatusDropdown} timeout="auto" unmountOnExit> {/* DROPDOWN MENU OF CIVIL STATUS */}
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => filterData('widow')}>
                      <ListItemIcon>
                        <Description />
                      </ListItemIcon>
                      <ListItemText primary="WIDOW" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}onClick={() => filterData('single')}>
                      <ListItemIcon>
                        <Description />
                      </ListItemIcon>
                      <ListItemText primary="SINGLE"  />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => filterData('married')}>
                      <ListItemIcon>
                        <Description />
                      </ListItemIcon>
                      <ListItemText primary="MARRIED" />
                    </ListItemButton>
                  </List>
                  </Collapse>

                  <ListItemButton onClick={handleVoterClick}>
                  <ListItemIcon>
                    <Description sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="VOTER" />
                  {voterDropdown ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>               
                <Collapse in={voterDropdown} timeout="auto" unmountOnExit> {/* DROPDOWN MENU OF VOTER */}
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => filterData('voter-yes')}>
                      <ListItemIcon>
                        <Description />
                      </ListItemIcon>
                      <ListItemText primary="YES" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => filterData('voter-no')}>
                      <ListItemIcon>
                        <Description />
                      </ListItemIcon>
                      <ListItemText primary="NO" />
                    </ListItemButton>
                  </List>
                </Collapse>
             
                <ListItemButton onClick={handleStatusClick}>
                  <ListItemIcon>
                    <Description sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="STATUS" />
                  {statusDropdown ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>               
                <Collapse in={statusDropdown} timeout="auto" unmountOnExit> {/* DROPDOWN MENU OF STATUS */}
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => filterData('active')}>
                      <ListItemIcon>
                        <Description />
                      </ListItemIcon>
                      <ListItemText primary="ACTIVE" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => filterData('inactive')}>
                      <ListItemIcon>
                        <Description />
                      </ListItemIcon>
                      <ListItemText primary="INACTIVE" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => filterData('bedridden')}>
                      <ListItemIcon>
                        <Description />
                      </ListItemIcon>
                      <ListItemText primary="BED RIDDEN" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => filterData('new')}>
                      <ListItemIcon>
                        <Description />
                      </ListItemIcon>
                      <ListItemText primary="NEW" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => filterData('senior')}>
                      <ListItemIcon>
                        <Description />
                      </ListItemIcon>
                      <ListItemText primary="SENIOR" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => filterData('widow')}>
                      <ListItemIcon>
                        <Description />
                      </ListItemIcon>
                      <ListItemText primary="TRANSFEREE" />
                    </ListItemButton>
                  </List>
                  </Collapse>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                  bottom: "0",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                }}
              >
                <Button variant="outlined" sx={{ m: '1 1 1 1', mt: 9, width: 250 }}>
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
            {theme === 'light' ? <NightlightRound /> : <LightMode />}
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
