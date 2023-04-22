import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';


interface ILoginProps {}


const Login: React.FunctionComponent<ILoginProps> = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [authing, setAuthing] =  useState(false);
  const [error, setError] = useState<string>('');

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
  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAuthing(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (email === 'user@gmail.com') {
        navigate('/dashboard', { state: { isAdmin: true } });
      } else {
        navigate('/dashboard', { state: { isAdmin: false } });
      }
    } catch (err: FirebaseError | any) {
      setError(err?.message ?? 'An error occurred while signing in');
      setAuthing(false);
    }
  }


  const handleSignUp: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate('/signup');
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
  
        
          <Typography variant="h2" align="center" gutterBottom>
            Sign In
          </Typography>
          {error && (
            <Typography sx={{ color: 'red', mb: 2 }} align="center">
              {error}
            </Typography>
          )}
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
            }}
          >
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained">
              Login
            </Button>
            <Button type="submit" variant="contained" onClick={() => signInWithGoogle()} disabled={authing}>
            Google
          </Button>
          <Button onClick={handleSignUp} variant="text" color="primary">
          Sign Up
        </Button>
          </Box>
        </Paper>
      </Box>
  );
};

export default Login;
