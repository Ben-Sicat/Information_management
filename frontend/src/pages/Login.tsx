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
  const [, setAuthing] =  useState(false);
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
    setAuthing(true);
  
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/main-menu');
    } catch (error) {
      // Handle error
    } finally {
      setAuthing(false);
    }
  };



  return (


  // theme={theme === 'light' ? lightTheme : darkTheme}
    
    <Box  
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        margin: 'auto',
        '@media screen and (max-width: 768px)': {
          margin: '120px',
        },
      }}
    >
      <Paper elevation={5} className="glassmorphism" 
        sx={{
          display: 'flex',
          borderRadius: '20px',
          boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(211, 211, 211, 0.2)',
          flexWrap: 'wrap',
          gap: '20px',
        }}>
        <Box
          component="form"
          onSubmit={handleSignIn}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 3,
            px: 20,
            py: 20,
            borderRadius: 4,
            minWidth: '300px',
            paddingLeft: '150px',
            paddingRight: '150px',
            background: '#FDF4DC',
            '@media screen and (max-width: 768px)': {
              flexBasis: '100%',
              width: 'auto',
              order: 2,
            },
          }}
        >
          <Container sx={{
            backgroundColor: 'var(--tertiary-color)',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '-60px 0px 50px',
            paddingTop: '15px',
            borderRadius: 3,
          }}>
          <Typography variant="h2" align="center"  gutterBottom sx={{
            fontFamily: 'var(--font-family)',
          }}>
            Sign In
          </Typography>
          {error && (
            <Typography sx={{ color: 'red' }} align="center">
              {error}
            </Typography>
          )}
          </Container>

            <TextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  width: '350px',
                  input: {textAlign: 'center'},
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
                width: '350px',
                input: {textAlign: 'center'},
                "& .MuiInputLabel-root": {
                  right: 0,
                  textAlign: "center",
                },
                "& .MuiInputLabel-shrink": {
                  textAlign: "left"
                },
              }}
            />


            <Button type="submit" variant="contained" sx={{
              marginTop: '4rem',
              width: '350px',
            }}>
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
              px: 20,
              py: 20,
              borderRadius: 4,
              minWidth: '300px',
              '@media screen and (max-width: 768px)': {
                flexBasis: '100%', 
                width: 'auto',
                order: 1,
              },
            }}
          >
            <img src={logoPNG} style={{
              width: '15rem',
              height: '15rem'
            }}
            alt="Description of some sort"
            />
          </Box>
        </Paper>

      </Box>
  );
};


export default Login;
