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

  // const signInWithGoogle = async () => {
  //   setAuthing(true);
  //   signInWithPopup(auth, new GoogleAuthProvider())
  //   .then(response =>{
  //     navigate('/dashboard')
  //   })
  //   .catch(err => {
  //     console.log(err)
  //     setAuthing(false);
  //   })
  // }
  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/main-menu');
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
    minHeight: '100vh',
    padding: '20px',
  }}
>
  <Paper
    elevation={5}
    className="glassmorphism"
    sx={{
      display: 'flex',
      borderRadius: '20px',
      boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      backgroundColor: 'rgba(211, 211, 211, 0.2)',
      flexWrap: 'wrap',
      gap: '20px',
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
        padding: '20px',
        flex: '1 1 50%',
        background: '#FDF4DC',
      }}
    >
      <Container
        sx={{
          backgroundColor: 'var(--tertiary-color)',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '10px 0px 50px',
          paddingTop: '15px',
          borderRadius: 3,
        }}
      >
        <Typography variant="h3" align="center" gutterBottom sx={{ fontFamily: 'var(--font-family)' }}>
          Sign In
        </Typography>
        {error && <Typography sx={{ color: 'red' }} align="center">{error}</Typography>}
      </Container>

      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{
          width: '100%',
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
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{
          width: '100%',
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

      <Button type="submit" variant="contained" sx={{ marginTop: '2rem', width: '60%' }}>
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
        padding: '20px',
        flex: '1 1 50%',
      }}
    >
      <img
        src={logoPNG}
        style={{
          width: '15rem',
          height: '15rem',
        }}alt="Description of some sort"
        />
        </Box>
        </Paper>
        </Box>
  );
};


export default Login;
