import React, { useState, useEffect } from 'react';
import { Datagrid, Navbar } from '../components/index';
import { getAuth, signOut } from 'firebase/auth';
import CustomButton from '../components/Buttons';
import { Alert, AlertTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import { Button, CssBaseline, ThemeProvider, Typography,} from '@mui/material';
import { lightTheme, darkTheme } from '../theme';
import { GlobalStyles } from '../globalStyles';
const BodyContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;
const ButtonContainer = styled('div')`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  border-radius: 5px;
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
    navigate('/create-user');
  };

    const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <Navbar theme={theme} toggleTheme={toggleTheme} />
    <CssBaseline />
      <GlobalStyles styles={undefined} />
      <BodyContainer>
        <Alert severity="info">
          <AlertTitle>Add new data</AlertTitle>
          Insert new senior citizen person on the database —{' '}
          <CustomButton label="Add now!" onClick={handleAddNowClick} />
        </Alert>
        <Datagrid />
      </BodyContainer>
      <ButtonContainer>
        <CustomButton label="Sign Out" onClick={handleSignOut} sx={{ color: 'secondary'}}/>
      </ButtonContainer>
            </ThemeProvider>
    </>
  );
};

export default Dashboard;