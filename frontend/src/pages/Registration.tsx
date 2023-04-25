import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';




const auth = getAuth();

export const Registration: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      navigate('/login');
    } catch (error) {
      // add error handling
    }
  };

  return (
    <Container 
    maxWidth="sm"
    sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        bgcolor: 'background.paper',
        boxShadow: 24,
        '& .MuiDataGrid-cell:hover': {
            color: 'dark blue',
            },
        margin: 'auto',


    }
    }
    >
    <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        mt: 5,
        borderRadius: '20px',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        padding: '40px',
        '& .MuiDataGrid-cell:hover': {
          color: 'dark blue',
        },
        width: '50%',
      }}>
      
    <Typography variant="h5" component="h1">
      Sign Up
    </Typography>
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        label="Email Address"
        value={email}
        onChange={handleEmail}
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label="Password"
        type="password"
        value={password}
        onChange={handlePassword}
      />
      {error && (
        <Typography color="error" variant="subtitle2">
          {error}
        </Typography>
      )}
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
        Sign Up
      </Button>
    </Box>
  </Box>
  </Container>
  );
};

export default Registration;
