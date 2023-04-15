import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


interface ILoginProps {}


const Login: React.FunctionComponent<ILoginProps> = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const [authing, setAuthing] =  useState(false);
  const signInWithGoogle = async () => {
    setAuthing(true);
    signInWithPopup(auth, new GoogleAuthProvider())
    .then(response =>{
      navigate('/dashboard')
    })
    .catch(err => {
      console.log(err)
      setAuthing(false);
    })
  }
  

  return (

  // theme={theme === 'light' ? lightTheme : darkTheme}
    
    <Box  
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',



      }}
    >
      <Typography variant="h3" gutterBottom 
      sx={{
          color: 'grey',
          fontSize: '100px',
          fontWeight: 'bold',
        }}>
         Brgy.607
      </Typography>
      
      <Paper elevation={5} className="glassmorphism" 
      sx={{
        borderRadius: '20px',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        padding: '40px',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Typography variant="h2" align="center" gutterBottom>
          Sign In With Google
        </Typography>
          <Button type="submit" variant="contained" onClick={() => signInWithGoogle()} disabled={authing}>
            Login
          </Button>
        
      </Paper>
    </Box>
  );
};

export default Login;
