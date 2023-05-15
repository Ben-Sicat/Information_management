import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect}  from 'react';
import {ListItemButton, ListItemIcon, ListItemText, List, Collapse, AppBar, Toolbar, Button, Drawer, Box, Divider} from "@mui/material";
import {ExpandLess, ExpandMore, Description, Menu, Close} from "@mui/icons-material";
import { getAuth, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { config } from '../config/config';
import LogoSVG from '../assets/Logo.svg';
import '../styles/globalStyles.css';

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
  { value: 'new senior', label: 'NEW SENIOR' },
  { value: 'transfer', label: 'TRANSFEREE' },
];


const buildingNoOptions: Option[] = [
  { value: '1148', label: '1148' },
  { value: '1142', label: '1142' },
  { value: 'RALPH ANTHONY SUITES', label: 'RALPH ANTHONY SUITES' },
  { value: '1118', label: '1118' },
  { value: '1193', label: '1193' },
  { value: '530', label: '530' },
  { value: '569', label: '569' },
  { value: 'U-1219 MRB, 1160', label: 'U-1219 MRB, 1160' },
  { value: '1127', label: '1127' },
  { value: '1140', label: '1140' },
  { value: 'U-3614 MER, 1200', label: 'U-3614 MER, 1200' },
  { value: 'U-1522 MRB, 1160', label: 'U-1522 MRB, 1160' },
  { value: 'U-1815 MRB, 1160', label: 'U-1815 MRB, 1160' },
  { value: 'MER, 1200', label: 'MER, 1200' },
  { value: '518', label: '518' },
  { value: '1114', label: '1114' },
  { value: 'U-4023 MER, 1200', label: 'U-4023 MER, 1200' },
  { value: 'U-408 PACIFIC PALISADES,1151', label: 'U-408 PACIFIC PALISADES,1151' },
  { value: 'U-1808 MRB, 1160', label: 'U-1808 MRB, 1160' },
  { value: 'U-1610 MRB, 1160', label: 'U-1610 MRB, 1160' },
  { value: '567', label: '567' },
  { value: 'U-1612 MRB, 1160', label: 'U-1612 MRB, 1160' },
  { value: 'U-1628 MER, 1200', label: 'U-1628 MER, 1200' },
  { value: 'U-1821 MRB, 1160', label: 'U-1821 MRB, 1160' },
  { value: '1184', label: '1184' },
  { value: 'U-5B MER, 1200', label: 'U-5B MER, 1200' },
  { value: 'U-2816 MER,1200', label: 'U-2816 MER,1200' },
  { value: 'U-2301 MER, 1200', label: 'U-2301 MER, 1200' },
  { value: '556', label: '556' },
  { value: 'U-6P MER, 1200', label: 'U-6P MER, 1200' },
  { value: '1142-A', label: '1142-A' },
  { value: 'U-1017 MRB, 1160', label: 'U-1017 MRB, 1160' },
  { value: 'U-3315 MER, 1200', label: 'U-3315 MER, 1200' },
  { value: '1138-A', label: '1138-A' },
  { value: 'U-1107 MAYFAIR TOWER', label: 'U-1107 MAYFAIR TOWER' },
  { value: 'U-2622 MER, 1200', label: 'U-2622 MER, 1200' },
  { value: 'U-1722 MER, 1200', label: 'U-1722 MER, 1200' },
  { value: 'U-2811 MRB, 1160', label: 'U-2811 MRB, 1160' },
  { value: 'U-1123 MER, 1200', label: 'U-1123 MER, 1200' },
  { value: 'U-1122 MER, 1200', label: 'U-1122 MER, 1200' },
  { value: 'U-1606 MAYFAIR TOWER', label: 'U-1606 MAYFAIR TOWER' },
  { value: 'U-2909 MER, 1200', label: 'U-2909 MER, 1200' },
  { value: 'U-1506 MAYFAIR TOWER', label: 'U-1506 MAYFAIR TOWER' }, 
  { value: 'U-3120 MER, 1200', label: 'U-3120 MER, 1200' },
  { value: 'U-2312 MRB, 1160', label: 'U-2312 MRB, 1160' },
  { value: 'U-3427 CITYLAND', label: 'U-3427 CITYLAND' },
  { value: 'U-808 MRB, 1160', label: 'U-808 MRB, 1160' },
  { value: 'U-3529 MRB, 1160', label: 'U-3529 MRB, 1160' },
  { value: 'U-2009 MER, 1200', label: 'U-2009 MER, 1200' },
  { value: 'U-1620 MER, 1200', label: 'U-1620 MER, 1200' },
  { value: 'U-2002 MER, 1200', label: 'U-2002 MER, 1200' },
  { value: 'U-2308 MRB, 1160', label: 'U-2308 MRB, 1160' },
  { value: 'U-1814 MER, 1200', label: 'U-1814 MER, 1200' },
  { value: 'U-2618 MER, 1200', label: 'U-2618 MER, 1200' },
  { value: 'U-2211 MRB, 1160', label: 'U-2211 MRB, 1160' },
  { value: 'U-2216 MER, 1200', label: 'U-2216 MER, 1200' },
  { value: 'U-3012 MER, 1200', label: 'U-3012 MER, 1200' },
  { value: '1142-D', label: '1142-D' },
  { value: '1136', label: '1136' },
  { value: 'U-2805 MER, 1200', label: 'U-2805 MER, 1200' },
  { value: 'U-1920 MRB, 1160', label: 'U-1920 MRB, 1160' },
  { value: 'U-1505 MER, 1200', label: 'U-1505 MER, 1200' },
  { value: '505', label: '505' },
  { value: 'U-3506 MRB, 1160', label: 'U-3506 MRB, 1160' },
  { value: 'U-2907 MER, 1200', label: 'U-2907 MER, 1200' },
  { value: '508', label: '508' },
  { value: '1142-F', label: '1142-F' },
  { value: '1168', label: '1168' },
  { value: '516', label: '516' },
  { value: '1125', label: '1125' },
  { value: 'U-2422 MRB, 1160', label: 'U-2422 MRB, 1160' },
  { value: '522', label: '522' },
  { value: 'U-2209 MER, 1200', label: 'U-2209 MER, 1200' },
  { value: 'U-2605 MER, 1200', label: 'U-2605 MER, 1200' },
  { value: 'U-2405 MRB, 1160', label: 'U-2405 MRB, 1160' },
  { value: 'U-1105 MER, 1200', label: 'U-1105 MER, 1200' },
  { value: 'U-1105 MER, 1200', label: 'U-1105 MER, 1200' },
  { value: 'U-3909 MER, 1200', label: 'U-3909 MER, 1200' },
  { value: '1105', label: '1105' },
  { value: 'U-1102 MER, 1200', label: 'U-1102 MER, 1200' },
  { value: 'U-1710 Mayfair Tower', label: 'U-1710 Mayfair Tower' },
  { value: 'U-1808 MER, 1200', label: 'U-1808 MER, 1200' },
  { value: '1192', label: '1192' },
  { value: '1183', label: '1183' },
  { value: 'U-2308 MER, 1200', label: 'U-2308 MER, 1200' },
  { value: 'U-3322 MER, 1200', label: 'U-3322 MER, 1200' },
  { value: 'U-1924 MER, 1200', label: 'U-1924 MER, 1200' },
  { value: 'U-3008 MRB, 1160', label: 'U-3008 MRB, 1160' },
  { value: 'U-921 MER, 1200', label: 'U-921 MER, 1200' },
  { value: 'DOJ COMPOUND', label: 'DOJ COMPOUND' },
  { value: '511', label: '511' },
  { value: '1134', label: '1134' },
  { value: 'U-3408 MER, 1200', label: 'U-3408 MER, 1200' },
  { value: 'U-2120 MER, 1200', label: 'U-2120 MER, 1200' },
  { value: 'U-2722 MRB, 1160', label: 'U-2722 MRB, 1160' },
  { value: 'U-3001 MER, 1200', label: 'U-3001 MER, 1200' },
  { value: '526', label: '526' },
  { value: '517', label: '517' },
  { value: 'U-4004 MER, 1200', label: 'U-4004 MER, 1200' },
  { value: 'U-3407 MER, 1200', label: 'U-3407 MER, 1200' },
  { value: 'U-1209 Mayfair Tower', label: 'U-1209 Mayfair Tower' },
  { value: 'U-4015 MER, 1200', label: 'U-4015 MER, 1200' },
  { value: 'U-4015 MER, 1200', label: 'U-4015 MER, 1200' },
  { value: '551', label: '551' },
  { value: 'U-2805MRB, 1160', label: 'U-2805MRB, 1160' },
  { value: 'U-807 MRB, 1160', label: 'U-807 MRB, 1160' },
  { value: 'U-1017 MER, 1200', label: 'U-1017 MER, 1200' },
  { value: 'U-2222 MER, 1200', label: 'U-2222 MER, 1200' },
  { value: '575', label: '575' },
  { value: '1151', label: '1151' },
  { value: 'U-1124 MER, 1200', label: 'U-1124 MER, 1200' },
  { value: 'U-1912 MRB, 1160', label: 'U-1912 MRB, 1160' },
  
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


const Navbar: React.FC<NavbarProps> = ({ burger, updateSearchTerm }) => {

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


  // HANDLER FOR NAVIGATION LINKS
  const navigate = useNavigate();
  const handleHome: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate('/home');
  }
  const handleDataGridPage: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate('/Datagrid');
  }
  const handleDashboard: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate('/dashboard');
  }
  const handleAbout: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate('/about');
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
  
  const styles = {
    appBar: {
      border: 'none',
      color: 'var(--secondary-color)',
      fontWeight: 'bold',
      transition: 'background-color 2.5s linear',
    },
    solidBackground: {
      background: 'var(--tertiary-color)',
      color: 'var(--primary-color)'
    },
    gradientBackground: {
      background: 'linear-gradient(to bottom, #C38DFF, rgba(195, 141, 255, 0) 85%)',
    },
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 60) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

   

  return (
<div style={{ overflow: 'hidden' }}>
    <AppBar
      position="static"
      sx={{
        ...styles.appBar,
        ...(isScrolled ? styles.solidBackground : styles.gradientBackground),
      }}
    >

      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center'}}>
        <div>
        {burger &&(
          <>
          <Button
              // edge="start"
              color="inherit"
              // aria-label="open drawer"
              onClick={toggleDrawer(true)}
              sx={{
                mr: 2,
              }}
            >
              <Menu />
            </Button><Drawer
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
                  <Button sx={{ mb: 2 }}>
                    <Close onClick={toggleDrawer(false)} />
                  </Button>
         
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
          <Button sx={{ fontWeight: 700}} color="inherit" onClick={handleHome} >HOME</Button>
          <Button sx={{ fontWeight: 698}} color="inherit" onClick={handleDashboard} >DASHBOARD</Button>
          <Button sx={{ fontWeight: 700}} color="inherit" onClick={handleDataGridPage} >DATAGRID</Button>
          <Button sx={{ fontWeight: 700}} color="inherit" onClick={handleAbout} >ABOUT</Button>
         
        </div>
        <div>
          <Box sx={{ 
            height: '130px', 
            width: '130px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
          <img src={LogoSVG} alt= "LOGO" height="100px" width="100px" />
          </Box>
        </div>
      </Toolbar>
    </AppBar>
    </div>
  );
};

export default Navbar;
