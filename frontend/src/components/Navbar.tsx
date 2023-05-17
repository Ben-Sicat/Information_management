import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect}  from 'react';
import {ListItemButton, ListItemIcon, ListItemText, List, Collapse, AppBar, Toolbar, Button, Drawer, Box, Divider} from "@mui/material";
import {ExpandLess, ExpandMore, Description, Menu, Close, Wc} from "@mui/icons-material";
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
  IconDrop: React.ElementType;
  value: string;
  label: string;
};
const genderOptions: Option[] = [
  { IconDrop: Wc, value: 'male', label: 'MALE' },
  { IconDrop: Wc, value: 'female', label: 'FEMALE' },
];

const civilStatusOptions: Option[] = [
  { IconDrop: Description, value: 'widow', label: 'WIDOW' },
  { IconDrop: Description, value: 'single', label: 'SINGLE' },
  { IconDrop: Description, value: 'married', label: 'MARRIED' },
];

const voterOptions: Option[] = [
  { IconDrop: Description, value: 'yes', label: 'YES' },
  { IconDrop: Description, value: 'no', label: 'NO' },
];

const statusOptions: Option[] = [
  { IconDrop: Description, value: 'active', label: 'ACTIVE' },
  { IconDrop: Description, value: 'inactive', label: 'INACTIVE' },
  { IconDrop: Description, value: 'bedridden', label: 'BED RIDDEN' },
  { IconDrop: Description, value: 'new senior', label: 'NEW SENIOR' },
  { IconDrop: Description, value: 'transfer', label: 'TRANSFEREE' },
];


const buildingNoOptions: Option[] = [
  { IconDrop: Description, value: '1148', label: '1148' },
  { IconDrop: Description, value: '1142', label: '1142' },
  { IconDrop: Description, value: 'RALPH ANTHONY SUITES', label: 'RALPH ANTHONY SUITES' },
  { IconDrop: Description, value: '1118', label: '1118' },
  { IconDrop: Description, value: '1193', label: '1193' },
  { IconDrop: Description, value: '530', label: '530' },
  { IconDrop: Description, value: '569', label: '569' },
  { IconDrop: Description, value: 'U-1219 MRB, 1160', label: 'U-1219 MRB, 1160' },
  { IconDrop: Description, value: '1127', label: '1127' },
  { IconDrop: Description, value: '1140', label: '1140' },
  { IconDrop: Description, value: 'U-3614 MER, 1200', label: 'U-3614 MER, 1200' },
  { IconDrop: Description, value: 'U-1522 MRB, 1160', label: 'U-1522 MRB, 1160' },
  { IconDrop: Description, value: 'U-1815 MRB, 1160', label: 'U-1815 MRB, 1160' },
  { IconDrop: Description, value: 'MER, 1200', label: 'MER, 1200' },
  { IconDrop: Description, value: '518', label: '518' },
  { IconDrop: Description, value: '1114', label: '1114' },
  { IconDrop: Description, value: 'U-4023 MER, 1200', label: 'U-4023 MER, 1200' },
  { IconDrop: Description, value: 'U-408 PACIFIC PALISADES,1151', label: 'U-408 PACIFIC PALISADES,1151' },
  { IconDrop: Description, value: 'U-1808 MRB, 1160', label: 'U-1808 MRB, 1160' },
  { IconDrop: Description, value: 'U-1610 MRB, 1160', label: 'U-1610 MRB, 1160' },
  { IconDrop: Description, value: '567', label: '567' },
  { IconDrop: Description, value: 'U-1612 MRB, 1160', label: 'U-1612 MRB, 1160' },
  { IconDrop: Description, value: 'U-1628 MER, 1200', label: 'U-1628 MER, 1200' },
  { IconDrop: Description, value: 'U-1821 MRB, 1160', label: 'U-1821 MRB, 1160' },
  { IconDrop: Description, value: '1184', label: '1184' },
  { IconDrop: Description, value: 'U-5B MER, 1200', label: 'U-5B MER, 1200' },
  { IconDrop: Description, value: 'U-2816 MER,1200', label: 'U-2816 MER,1200' },
  { IconDrop: Description, value: 'U-2301 MER, 1200', label: 'U-2301 MER, 1200' },
  { IconDrop: Description, value: '556', label: '556' },
  { IconDrop: Description, value: 'U-6P MER, 1200', label: 'U-6P MER, 1200' },
  { IconDrop: Description, value: '1142-A', label: '1142-A' },
  { IconDrop: Description, value: 'U-1017 MRB, 1160', label: 'U-1017 MRB, 1160' },
  { IconDrop: Description, value: 'U-3315 MER, 1200', label: 'U-3315 MER, 1200' },
  { IconDrop: Description, value: '1138-A', label: '1138-A' },
  { IconDrop: Description, value: 'U-1107 MAYFAIR TOWER', label: 'U-1107 MAYFAIR TOWER' },
  { IconDrop: Description, value: 'U-2622 MER, 1200', label: 'U-2622 MER, 1200' },
  { IconDrop: Description, value: 'U-1722 MER, 1200', label: 'U-1722 MER, 1200' },
  { IconDrop: Description, value: 'U-2811 MRB, 1160', label: 'U-2811 MRB, 1160' },
  { IconDrop: Description, value: 'U-1123 MER, 1200', label: 'U-1123 MER, 1200' },
  { IconDrop: Description, value: 'U-1122 MER, 1200', label: 'U-1122 MER, 1200' },
  { IconDrop: Description, value: 'U-1606 MAYFAIR TOWER', label: 'U-1606 MAYFAIR TOWER' },
  { IconDrop: Description, value: 'U-2909 MER, 1200', label: 'U-2909 MER, 1200' },
  { IconDrop: Description, value: 'U-1506 MAYFAIR TOWER', label: 'U-1506 MAYFAIR TOWER' }, 
  { IconDrop: Description, value: 'U-3120 MER, 1200', label: 'U-3120 MER, 1200' },
  { IconDrop: Description, value: 'U-2312 MRB, 1160', label: 'U-2312 MRB, 1160' },
  { IconDrop: Description, value: 'U-3427 CITYLAND', label: 'U-3427 CITYLAND' },
  { IconDrop: Description, value: 'U-808 MRB, 1160', label: 'U-808 MRB, 1160' },
  { IconDrop: Description, value: 'U-3529 MRB, 1160', label: 'U-3529 MRB, 1160' },
  { IconDrop: Description, value: 'U-2009 MER, 1200', label: 'U-2009 MER, 1200' },
  { IconDrop: Description, value: 'U-1620 MER, 1200', label: 'U-1620 MER, 1200' },
  { IconDrop: Description, value: 'U-2002 MER, 1200', label: 'U-2002 MER, 1200' },
  { IconDrop: Description, value: 'U-2308 MRB, 1160', label: 'U-2308 MRB, 1160' },
  { IconDrop: Description, value: 'U-1814 MER, 1200', label: 'U-1814 MER, 1200' },
  { IconDrop: Description, value: 'U-2618 MER, 1200', label: 'U-2618 MER, 1200' },
  { IconDrop: Description, value: 'U-2211 MRB, 1160', label: 'U-2211 MRB, 1160' },
  { IconDrop: Description, value: 'U-2216 MER, 1200', label: 'U-2216 MER, 1200' },
  { IconDrop: Description, value: 'U-3012 MER, 1200', label: 'U-3012 MER, 1200' },
  { IconDrop: Description, value: '1142-D', label: '1142-D' },
  { IconDrop: Description, value: '1136', label: '1136' },
  { IconDrop: Description, value: 'U-2805 MER, 1200', label: 'U-2805 MER, 1200' },
  { IconDrop: Description, value: 'U-1920 MRB, 1160', label: 'U-1920 MRB, 1160' },
  { IconDrop: Description, value: 'U-1505 MER, 1200', label: 'U-1505 MER, 1200' },
  { IconDrop: Description, value: '505', label: '505' },
  { IconDrop: Description, value: 'U-3506 MRB, 1160', label: 'U-3506 MRB, 1160' },
  { IconDrop: Description, value: 'U-2907 MER, 1200', label: 'U-2907 MER, 1200' },
  { IconDrop: Description, value: '508', label: '508' },
  { IconDrop: Description, value: '1142-F', label: '1142-F' },
  { IconDrop: Description, value: '1168', label: '1168' },
  { IconDrop: Description, value: '516', label: '516' },
  { IconDrop: Description, value: '1125', label: '1125' },
  { IconDrop: Description, value: 'U-2422 MRB, 1160', label: 'U-2422 MRB, 1160' },
  { IconDrop: Description, value: '522', label: '522' },
  { IconDrop: Description, value: 'U-2209 MER, 1200', label: 'U-2209 MER, 1200' },
  { IconDrop: Description, value: 'U-2605 MER, 1200', label: 'U-2605 MER, 1200' },
  { IconDrop: Description, value: 'U-2405 MRB, 1160', label: 'U-2405 MRB, 1160' },
  { IconDrop: Description, value: 'U-1105 MER, 1200', label: 'U-1105 MER, 1200' },
  { IconDrop: Description, value: 'U-1105 MER, 1200', label: 'U-1105 MER, 1200' },
  { IconDrop: Description, value: 'U-3909 MER, 1200', label: 'U-3909 MER, 1200' },
  { IconDrop: Description, value: '1105', label: '1105' },
  { IconDrop: Description, value: 'U-1102 MER, 1200', label: 'U-1102 MER, 1200' },
  { IconDrop: Description, value: 'U-1710 Mayfair Tower', label: 'U-1710 Mayfair Tower' },
  { IconDrop: Description, value: 'U-1808 MER, 1200', label: 'U-1808 MER, 1200' },
  { IconDrop: Description, value: '1192', label: '1192' },
  { IconDrop: Description, value: '1183', label: '1183' },
  { IconDrop: Description, value: 'U-2308 MER, 1200', label: 'U-2308 MER, 1200' },
  { IconDrop: Description, value: 'U-3322 MER, 1200', label: 'U-3322 MER, 1200' },
  { IconDrop: Description, value: 'U-1924 MER, 1200', label: 'U-1924 MER, 1200' },
  { IconDrop: Description, value: 'U-3008 MRB, 1160', label: 'U-3008 MRB, 1160' },
  { IconDrop: Description, value: 'U-921 MER, 1200', label: 'U-921 MER, 1200' },
  { IconDrop: Description, value: 'DOJ COMPOUND', label: 'DOJ COMPOUND' },
  { IconDrop: Description, value: '511', label: '511' },
  { IconDrop: Description, value: '1134', label: '1134' },
  { IconDrop: Description, value: 'U-3408 MER, 1200', label: 'U-3408 MER, 1200' },
  { IconDrop: Description, value: 'U-2120 MER, 1200', label: 'U-2120 MER, 1200' },
  { IconDrop: Description, value: 'U-2722 MRB, 1160', label: 'U-2722 MRB, 1160' },
  { IconDrop: Description, value: 'U-3001 MER, 1200', label: 'U-3001 MER, 1200' },
  { IconDrop: Description, value: '526', label: '526' },
  { IconDrop: Description, value: '517', label: '517' },
  { IconDrop: Description, value: 'U-4004 MER, 1200', label: 'U-4004 MER, 1200' },
  { IconDrop: Description, value: 'U-3407 MER, 1200', label: 'U-3407 MER, 1200' },
  { IconDrop: Description, value: 'U-1209 Mayfair Tower', label: 'U-1209 Mayfair Tower' },
  { IconDrop: Description, value: 'U-4015 MER, 1200', label: 'U-4015 MER, 1200' },
  { IconDrop: Description, value: 'U-4015 MER, 1200', label: 'U-4015 MER, 1200' },
  { IconDrop: Description, value: '551', label: '551' },
  { IconDrop: Description, value: 'U-2805MRB, 1160', label: 'U-2805MRB, 1160' },
  { IconDrop: Description, value: 'U-1017 MER, 1200', label: 'U-1017 MER, 1200' },
  { IconDrop: Description, value: 'U-2222 MER, 1200', label: 'U-2222 MER, 1200' },
  { IconDrop: Description, value: '575', label: '575' },
  { IconDrop: Description, value: '1151', label: '1151' },
  { IconDrop: Description, value: 'U-1124 MER, 1200', label: 'U-1124 MER, 1200' },
  { IconDrop: Description, value: 'U-1912 MRB, 1160', label: 'U-1912 MRB, 1160' },
  
];
const streetOptions: Option[] =[
  { IconDrop: Description,value: 'JORGE BOCOBO ST.', label: 'JORGE BOCOBO ST.'},
  { IconDrop: Description,value: 'ARKANSAS ST.', label: 'ARKANSAS ST.'},
  { IconDrop: Description,value: 'MA. OROSA ST.', label: 'MA. OROSA ST.'},
  { IconDrop: Description,value: 'PADRE FAURA ST.', label: 'PADRE FAURA ST.'},
  { IconDrop: Description,value: '526 U. N. Ave. cor. A. Mabini St.', label: '526 U. N. Ave. cor. A. Mabini St.'},
  { IconDrop: Description,value: 'A. FLORES ST.', label: 'A. FLORES ST.'},
  { IconDrop: Description,value: 'U.N. AVE.', label: 'U.N. AVE.'},
  { IconDrop: Description,value: 'A. MABINI ST.', label: 'A. MABINI ST.'},
  { IconDrop: Description,value: 'A. FLORES ST.', label: 'A. FLORES ST.'},
  { IconDrop: Description,value: 'PADRE FAURA ST.', label: 'PADRE FAURA ST.'},
  { IconDrop: Description,value: 'GREY ST.', label: 'GREY ST.'},
  { IconDrop: Description,value: 'ARQUIZA ST.', label: 'ARQUIZA ST.'},
  { IconDrop: Description,value: 'A. MABINI ST. COR. UN. AVE.', label: 'A. MABINI ST. COR. UN. AVE.'},
  { IconDrop: Description,value: 'NBI COMPOUND UN AVE.', label: 'NBI COMPOUND UN AVE.'},

  
]
const DropdownMenu: React.FC<{
  IconMenu: React.ReactElement;
  title: string;
  options: Option[];
  isOpen: boolean;
  onClick: () => void;
  updateSearchTerm: (value: string) => void;
}> = ({IconMenu, title, options, isOpen, onClick, updateSearchTerm }) => (
  <>
    <ListItemButton onClick={onClick}>
      <ListItemIcon>
        {IconMenu}
      </ListItemIcon>
      <ListItemText primary={title} />
      {isOpen ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    <Collapse in={isOpen} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {options.map(({ value, label, IconDrop}) => (
          <ListItemButton sx={{ pl: 4 }} key={value} onClick={() => updateSearchTerm(value)}>
            <ListItemIcon>
            <IconDrop />
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
<div style={{ overflow: 'hidden', position: 'fixed', width: '100%', top: 0, zIndex: 999}}>
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
                      IconMenu={<Wc sx={{ color: 'primary.main' }} />}
                      title="GENDER"
                      options={genderOptions}
                      isOpen={genderDropdown}
                      onClick={handleGenderClick}
                      updateSearchTerm={updateSearchTerm} />
                    <DropdownMenu
                      IconMenu={<Description sx={{ color: 'primary.main' }} />}
                      title="CIVIL STATUS"
                      options={civilStatusOptions}
                      isOpen={civilStatusDropdown}
                      onClick={handleCivilStatusClick}
                      updateSearchTerm={updateSearchTerm} />
                    <DropdownMenu
                      IconMenu={<Description sx={{ color: 'primary.main' }} />}
                      title="VOTER"
                      options={voterOptions}
                      isOpen={voterDropdown}
                      onClick={handleVoterClick}
                      updateSearchTerm={updateSearchTerm} />
                    <DropdownMenu
                      IconMenu={<Description sx={{ color: 'primary.main' }} />}
                      title="STATUS"
                      options={statusOptions}
                      isOpen={statusDropdown}
                      onClick={handleStatusClick}
                      updateSearchTerm={updateSearchTerm} />
                    <DropdownMenu
                      IconMenu={<Description sx={{ color: 'primary.main' }} />}
                      title="STREET"
                      options={streetOptions}
                      isOpen={streetDropdown}
                      onClick={handleStreetClick}
                      updateSearchTerm={updateSearchTerm} />
                    <DropdownMenu
                      IconMenu={<Description sx={{ color: 'primary.main' }} />}
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
