import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post('/Login', { username, password }) // change endpoint to the endpoint of the REST API
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem('token', token);
        window.location.href = '/Dashboard';
      })
      .catch((err) => {
        setError(err.response.data.msg);
        setTimeout(() => {
          setError('');
        }, 5000);
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
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      {error && (
        <Typography sx={{ color: 'red', mb: 2 }} align="center">
          {error}
        </Typography>
      )}
      <Paper elevation={5} className="glassmorphism">
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
