import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';
import googleIconSVG from '../assets/google-icon.svg'


interface ILoginProps {}


const Login: React.FunctionComponent<ILoginProps> = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [authing, setAuthing] =  useState(false);
  const [error, setError] = useState<string>('');

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
     
    } catch (err: FirebaseError | any) {
      setError(err?.message ?? 'An error occurred while signing in');
      setAuthing(false);
    }
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
            gap: 2,
            px: 10,
            py: 3,
            borderRadius: 4,
            minWidth: '300px',
            paddingLeft: '50px',
            paddingRight: '50px',
            background: 'linear-gradient(to bottom, #533A71 120px, #FDF4DC 120px)',
            '@media screen and (max-width: 768px)': {
              flexBasis: '100%',
              width: 'auto',
              order: 2,
            },
          }}
        >
          <Typography variant="h2" align="center" gutterBottom sx={{
            marginBottom: '60px'
          }}>
            Sign In
          </Typography>
          {error && (
            <Typography sx={{ color: 'red', mb: 2 }} align="center">
              {error}
            </Typography>
          )}
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
              marginTop: '20px',
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
              px: 4,
              py: 3,
              borderRadius: 4,
              minWidth: '300px',
              '@media screen and (max-width: 768px)': {
                flexBasis: '100%', 
                width: 'auto',
                order: 1,
              },
            }}
          >
            <Typography variant="h2" align="center" gutterBottom>
              BRGY LOGO
            </Typography>
          </Box>
        </Paper>

      </Box>
  );
};


export default Login;
