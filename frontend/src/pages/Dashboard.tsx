import React, { useState, useEffect } from 'react';
import { Datagrid, SearchBar } from '../components/index';
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
  top: 20px;
  right: 20px;
  z-index: 999;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  &.scrolled {
    background-color: #333;
    border-radius: 5px;
  }
  &.scrolled .MuiButton-root {
    background-color: #000;
    border-radius: 5px;
  }
`;

const Dashboard: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const auth = getAuth();
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
            <Button variant="contained" onClick={toggleTheme}>
        Toggle Theme
      </Button>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
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
      <ButtonContainer className={scrolled ? 'scrolled' : ''}>
        <CustomButton label="Sign Out" onClick={handleSignOut} />
      </ButtonContainer>
            </ThemeProvider>
    </>
  );
};

export default Dashboard;