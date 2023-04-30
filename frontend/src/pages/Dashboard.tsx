import React, { useState, useEffect } from 'react';
import { Datagrid, Navbar } from '../components/index';
import { getAuth, signOut } from 'firebase/auth';
import CustomButton from '../components/Buttons';
import { Alert, AlertTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import { Button, CssBaseline, ThemeProvider, Typography,} from '@mui/material';
import { lightTheme, darkTheme } from '../theme';
const BodyContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;
const ButtonContainer = styled('div')`
  position: fixed;
  bottom: 10rem;
  right: 10rem;
  z-index: 999;
  border-radius: 10rem;
  background-color: red;
`;


const Dashboard: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const auth = getAuth();

 

  const handleSignOut = () => {
    signOut(auth);
  };

  const navigate = useNavigate();
  const handleAddNowClick = () => {
    navigate('/dashboard/create-user/');
  };

    
  return (
    <>
    {/* <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}> */}
    <CssBaseline />
      <BodyContainer>
      <Datagrid />
      </BodyContainer>
      <ButtonContainer>
        <CustomButton label="+"  onClick={handleAddNowClick} sx={{ color: 'secondary'}}/>
      </ButtonContainer>
            {/* </ThemeProvider> */}
    </>
  );
};

export default Dashboard;