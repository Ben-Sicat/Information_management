import React from 'react';
import { useState } from 'react';
import './App.css';
import { 
  Login, 
  Dashboard, 
  CreateUser, 
  Registration,
  Main,
  About,
  UserProfile
} from './pages';
import { Route, Routes, Navigate } from 'react-router-dom';
import {initializeApp} from 'firebase/app';
import { config } from './config/config';
import AuthRoute from './components/AuthRoute';
// import { Button, CssBaseline, ThemeProvider, Typography,} from '@mui/material';
// import { lightTheme, darkTheme } from './theme';
// import { GlobalStyles } from './globalStyles';
export const Firebase = initializeApp(config.firebaseConfig)

function App() {
  // const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // const toggleTheme = () => {
  //   setTheme(theme === 'light' ? 'dark' : 'light');
  // };
  return (
    <>
        {/* <Button variant="contained" onClick={toggleTheme}>
        Toggle Theme
      </Button>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}> */}
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path='/main-menu' element={<Main/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/user-profile/:userId' element={<UserProfile/>}/>
        <Route path="*" element={<h1>404</h1>} />
        {/* <Route path = "/signup" element = {<Registration />} /> */}
        

      </Routes>
    

    </>
    
  );
}

export default App;
