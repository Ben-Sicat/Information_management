import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, Container } from '@mui/material';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import '../styles/globalStyles.css';
import logoPNG from '../assets/Logo.png';

interface ILoginProps {}


const Login: React.FunctionComponent<ILoginProps> = () => {
  const auth = getAuth();
  
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error] = useState<string>('');


  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/Datagrid');
    } catch (error) {
      // Handle error
    }
  };



  return (


  // theme={theme === 'light' ? lightTheme : darkTheme}
    
  <Box
  sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1ddf6',
    minHeight: '100vh',
    padding: '20px',
  }}
>
  <Paper
    elevation={5}
    className="glassmorphism"
    sx={{
      display: 'flex',
      borderRadius: '25px',
      padding: '20px',
      boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      backgroundColor: '#d699e5',
      flexWrap: 'wrap',
      gap: '0px',
      maxWidth: '800px',
      width: '100%',
    }}
  >
    <Box
      component="form"
      onSubmit={handleSignIn}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
        padding: '10px',
        flex: '1 1 80%',
        background: '#ddaae9',
      }}
    >
      <img
        src={logoPNG}
        style={{
          width: '30rem',
          height: '30rem',
        }}alt="Description of some sort"
        />

      <TextField
        id="filled-email-input"
        label="E-mail"
        type="email"
        autoComplete="current-email"
        variant="filled"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{
          width: '60%',
          input: { textAlign: 'center' },
          "& .MuiInputLabel-root": {
            right: 0,
            textAlign: "center",
          },
          "& .MuiInputLabel-shrink": {
            textAlign: "left"
          },
        }}
      />

      <TextField
        id="filled-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="filled"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{
          width: '60%',
          input: { textAlign: 'center' },
          "& .MuiInputLabel-root": {
            right: 0,
            textAlign: "center",
          },
          "& .MuiInputLabel-shrink": {
            textAlign: "left"
          },
        }}
      />

      <Button type="submit" variant="contained" sx={{ marginTop: '0rem', width: '40%'   }}>
        Login
      </Button>
    </Box>

    <Box
      component="form"
      onSubmit={handleSignIn}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        padding: '0px',
        flex: '1 1 70%',
      }}
    >
     
        </Box>
        </Paper>
        </Box>
  );
};


export default Login;
