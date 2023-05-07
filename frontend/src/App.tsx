import React, {useState} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { config } from './config/config';
import { Login, Datagrid, CreateUser, Dashboard, About, UserProfile } from './pages';
import AuthRoute from './components/AuthRoute';
import { CssBaseline, ThemeProvider} from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import './styles/globalStyles.css';

export const Firebase = initializeApp(config.firebaseConfig);



function App() {
  const [theme] = useState<'light' | 'dark'>('light');

// const toggleTheme = () => {
//   setTheme(theme === 'light' ? 'dark' : 'light');
// };
  return (
    <>
        {/* <Button variant="contained" onClick={toggleTheme}> Theme</Button> */}
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}> 
    <CssBaseline />
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Dashboard" element={<AuthRoute><Dashboard /></AuthRoute>} />
      <Route path="/Datagrid/" element={<AuthRoute><Datagrid /></AuthRoute>} />
      <Route path="/Datagrid/create-user/:userId?" element={<AuthRoute><CreateUser /></AuthRoute>} />
      {/* <Route path="/main-menu" element={<AuthRoute><Main /></AuthRoute>} />
      <Route path="/dashboard/" element={<AuthRoute><Dashboard /></AuthRoute>} />
      <Route path="/dashboard/create-user/:userId?" element={<AuthRoute><CreateUser /></AuthRoute>} /> */}
      <Route path="/about" element={<About />} />
      <Route path="/user-profile/:userId" element={<UserProfile />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
    </ThemeProvider>
    </>
  );
}

export default App;
