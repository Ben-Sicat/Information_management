import React, { useState } from 'react';
import { Button, Container, Typography, Grid } from '@mui/material';
import {Textfield} from '../components/index';

interface User {
  name: string;
  age: number;
  birthday: string;
  address: string;
  contactNumber: string;
}

const CreateUser = () => {
  const [user, setUser] = useState<User>({
    name: '',
    age: 0,
    birthday: '',
    address: '',
    contactNumber: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user); // update function with our db

  };

  return (
    <Container sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
    <Container maxWidth="sm"sx={{
      borderRadius: '20px',
      boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      padding: '40px',
      justifyContent: 'center',
      alignItems: 'center',
      '& .MuiDataGrid-cell:hover': {
          color: 'dark blue',
        },
    }}>
      <Typography variant="h4" align="center" gutterBottom>
        Create User
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Textfield
              label="Name"
              name="name"
              value={user.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Textfield
              label="Age"
              name="age"
              type="number"
              value={user.age}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Textfield
              label="Birthday"
              name="birthday"
              value={user.birthday}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Textfield
              label="Address"
              name="address"
              value={user.address}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Textfield
              label="Contact Number"
              name="contactNumber"
              value={user.contactNumber}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Create
        </Button>
      </form>
    </Container>
    </Container>
  );
};

export default CreateUser;
