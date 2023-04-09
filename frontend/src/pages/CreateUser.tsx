import React, { useState } from 'react';
import { Button, Container, Typography, Grid } from '@mui/material';
import { Textfield } from '../components/index';
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { config } from '../config/config';
import { doc, setDoc, addDoc, collection } from 'firebase/firestore';
import {db} from '../firebase-config'

const userCollectionRef = collection(db, 'citizens');

//https://www.youtube.com/watch?v=jCY6DH8F4oc&ab_channel=PedroTech big help

interface User {
  name: string;
  age: number;
  birthday: string;
  address: string;
  contactNumber: string;
  gender: string;
  email:string;
}

const CreateUser = () => {
  const [user, setUser] = useState<User>({
    name: '',
    age: 0,
    birthday: '',
    address: '',
    contactNumber: '',
    gender: '',
    email: ''
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addDoc(userCollectionRef, user);
      setUser({
        name: '',
        age: 0,
        birthday: '',
        address: '',
        contactNumber: '',
        gender: '',
        email: ''
      });
      console.log('User added to Firestore database.');
    } catch (error) {
      console.error('Error adding user to Firestore database:', error);
    }
  };

  return (
    <Container sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
    <Container maxWidth="xl"sx={{
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
              label="Birthday (MM/DD/YYYY)"
              name="birthday"
              value={user.birthday}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Textfield
              label="Address"
              name="address"
              value={user.address}
              onChange={handleInputChange}
            />
            </Grid>
             <Grid item xs={12} sm={6}>
            <Textfield
              label="Gender"
              name="gender"
              value={user.gender}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Textfield
              label="Email"
              name="email"
              value={user.email}
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
        <Container sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button variant="contained" color="primary" type="submit" >
          Create
        </Button>
        </Container>
      </form>
    </Container>
    </Container>
  );
};

export default CreateUser;
