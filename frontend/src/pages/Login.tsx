import React, { useState } from 'react';
import axios from 'axios';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';


const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post<{ token: string }>('http://localhost:3001/login', { username, password })
      .then(response => {
        const token = response.data.token;
        localStorage.setItem('token', token);
        window.location.href = '/dashboard'; // Redirect to dashboard route
      })
      .catch(err => {
        setError(err.response.data.message);
      });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',



      }}
    >
      <Typography variant="h4" gutterBottom 
      sx={{
          color: 'grey',
          fontSize: '100px',
          fontWeight: 'bold',
        }}>
         Brgy.607
      </Typography>
      {error && (
        <Typography sx={{ color: 'red', mb: 2 }} align="center">
          {error}
        </Typography>
      )}
      <Paper elevation={5} className="glassmorphism" 
      sx={{
        borderRadius: '20px',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        padding: '40px',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
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
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
