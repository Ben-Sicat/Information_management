import React from 'react';
import {AppBar, Toolbar, Button, IconButton, Drawer, Box, Divider} from '@mui/material/';
import { useNavigate } from 'react-router-dom';
import {useState}  from 'react';
import {ListItemButton, ListItemIcon, ListItemText, List, Collapse} from "@mui/material";
import {ExpandLess, ExpandMore, Description, Menu, Close, LightMode,NightlightRound} from "@mui/icons-material";
import { getAuth, signOut } from 'firebase/auth';

import { initializeApp } from 'firebase/app';
import { config } from '../config/config';


const firebaseApp = initializeApp(config.firebaseConfig);



interface NavbarProps {
  
  toggleTheme?: () => void;
  theme?: 'light' | 'dark';
  updateSearchTerm: (term: string) => void;
  burger: boolean;
}
type Option = {
  value: string;
  label: string;
};
const genderOptions: Option[] = [
  { value: 'male', label: 'MALE' },
  { value: 'female', label: 'FEMALE' },
];

const civilStatusOptions: Option[] = [
  { value: 'widow', label: 'WIDOW' },
  { value: 'single', label: 'SINGLE' },
  { value: 'married', label: 'MARRIED' },
];

const voterOptions: Option[] = [
  { value: 'yes', label: 'YES' },
  { value: 'no', label: 'NO' },
];

const statusOptions: Option[] = [
  { value: 'active', label: 'ACTIVE' },
  { value: 'inactive', label: 'INACTIVE' },
  { value: 'bedridden', label: 'BED RIDDEN' },
  { value: 'new', label: 'NEW' },
  { value: 'senior', label: 'SENIOR' },
  { value: 'transfer', label: 'TRANSFEREE' },
];


const buildingNoOptions: Option[] = [
  
];
const streetOptions: Option[] =[
  {value: 'JORGE BOCOBO ST.', label: 'JORGE BOCOBO ST.'},
  {value: 'ARKANSAS ST.', label: 'ARKANSAS ST.'},
  {value: 'MA. OROSA ST.', label: 'MA. OROSA ST.'},
  {value: 'PADRE FAURA ST.', label: 'PADRE FAURA ST.'},
  {value: '526 U. N. Ave. cor. A. Mabini St.', label: '526 U. N. Ave. cor. A. Mabini St.'},
  {value: 'A. FLORES ST.', label: 'A. FLORES ST.'},
  {value: 'U.N. AVE.', label: 'U.N. AVE.'},
  {value: 'A. MABINI ST.', label: 'A. MABINI ST.'},
  {value: 'A. FLORES ST.', label: 'A. FLORES ST.'},
  {value: 'PADRE FAURA ST.', label: 'PADRE FAURA ST.'},
  {value: 'GREY ST.', label: 'GREY ST.'},
  {value: 'ARQUIZA ST.', label: 'ARQUIZA ST.'},
  {value: 'A. MABINI ST. COR. UN. AVE.', label: 'A. MABINI ST. COR. UN. AVE.'},
  {value: 'NBI COMPOUND UN AVE.', label: 'NBI COMPOUND UN AVE.'},

  
]



const DropdownMenu: React.FC<{
  title: string;
  options: Option[];
  isOpen: boolean;
  onClick: () => void;
  updateSearchTerm: (value: string) => void;
}> = ({ title, options, isOpen, onClick, updateSearchTerm }) => (
  <>
    <ListItemButton onClick={onClick}>
      <ListItemIcon>
        <Description sx={{ color: 'primary.main' }} />
      </ListItemIcon>
      <ListItemText primary={title} />
      {isOpen ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    <Collapse in={isOpen} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {options.map(({ value, label }) => (
          <ListItemButton sx={{ pl: 4 }} key={value} onClick={() => updateSearchTerm(value)}>
            <ListItemIcon>
              <Description />
            </ListItemIcon>
            <ListItemText primary={label} />
          </ListItemButton>
        ))}
      </List>
    </Collapse>
  </>
);


const Navbar: React.FC<NavbarProps> = ({ burger, toggleTheme, theme, updateSearchTerm }) => {

  const [genderDropdown, setGenderDropdown] = useState(false);
  const [civilStatusDropdown, setCivilStatusDropdown] = useState(false);
  const [voterDropdown, setVoterDropdown] = useState(false);
  const [statusDropdown, setStatusDropdown] = useState(false);
  const [buildingNoDropdown, setBuildingNoDropdown] = useState(false)
  const [streetDropdown, setStreetDropdown] = useState(false)

  const handleGenderClick = () => setGenderDropdown(!genderDropdown);
  const handleCivilStatusClick = () => setCivilStatusDropdown(!civilStatusDropdown);
  const handleVoterClick = () => setVoterDropdown(!voterDropdown);
  const handleStatusClick = () => setStatusDropdown(!statusDropdown);
  const handleBuildingNoClick = () => setBuildingNoDropdown(!buildingNoDropdown);
  const handleStreetClick = () => setStreetDropdown(!streetDropdown);

  const navigate = useNavigate();

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

  const handleSignOut= () =>{
    const auth = getAuth(firebaseApp);
    signOut(auth)
    .then(() => {
      // Sign-out successful.
      navigate('/login');
    }
    ).catch((error) => {
      // An error happened.
    }
    );
  }
  
 
   

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center'}}>
        <div>
        {burger &&(
          <>
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
            </IconButton><Drawer
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
                    <DropdownMenu
                      title="GENDER"
                      options={genderOptions}
                      isOpen={genderDropdown}
                      onClick={handleGenderClick}
                      updateSearchTerm={updateSearchTerm} />
                    <DropdownMenu
                      title="CIVIL STATUS"
                      options={civilStatusOptions}
                      isOpen={civilStatusDropdown}
                      onClick={handleCivilStatusClick}
                      updateSearchTerm={updateSearchTerm} />
                    <DropdownMenu
                      title="VOTER"
                      options={voterOptions}
                      isOpen={voterDropdown}
                      onClick={handleVoterClick}
                      updateSearchTerm={updateSearchTerm} />
                    <DropdownMenu
                      title="STATUS"
                      options={statusOptions}
                      isOpen={statusDropdown}
                      onClick={handleStatusClick}
                      updateSearchTerm={updateSearchTerm} />
                      <DropdownMenu
                      title="STREET"
                      options={streetOptions}
                      isOpen={streetDropdown}
                      onClick={handleStreetClick}
                      updateSearchTerm={updateSearchTerm} />
                    <DropdownMenu
                    title="BUILDING NO."
                    options= {buildingNoOptions}
                    isOpen={buildingNoDropdown}
                    onClick={handleBuildingNoClick}
                    updateSearchTerm={updateSearchTerm}/>
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
                    <Button variant="outlined" sx={{ m: '1 1 1 1', mt: 9, width: 250 }} onClick={handleSignOut}>
                      Sign Out
                    </Button>
                  </Box>
                </Box>
              </Drawer>
              </>
        )}
          <IconButton color="inherit" onClick={handleHome}>
            <ListItemText primary="Home" />
          </IconButton>
          <IconButton color="inherit" onClick={handleDashboard}>
            <ListItemText primary="Dashboard" />
          </IconButton>

          <IconButton color="inherit" onClick={handleAbout}>
            <ListItemText primary="About" />
          </IconButton>
         
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
