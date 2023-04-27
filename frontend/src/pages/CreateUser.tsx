import React, { useState, ChangeEvent } from 'react';
import { Container, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase-config';

interface User {
  [key: string]: string;
}

interface Field {
  label: string;
  name: string;
  type?: string;
  options?: string[];
  defaultValue?: string;
}

const fields: Field[] = [
  // field definitions...
  { label: 'Last Name', name: 'lastName' },
  { label: 'First Name', name: 'firstName' },
  { label: 'Middle Name', name: 'middleName' },
  { label: 'Suffix', name: 'suffix' },
  { label: 'Age', name: 'age', type: 'number' },
  { label: 'Birth Month', name: 'birthMonth' },
  { label: 'Birth Day', name: 'birthDay' },
  { label: 'Birth Year', name: 'birthYear' },
  { label: 'Building Number', name: 'bldgNo' },
  { label: 'Street Name', name: 'streetName',
  options: [
    'JORGE BOCOBO ST.',
    'ARKANSAS ST.',
    'MA. OROSA ST.',
    'PADRE FAURA ST.',
    '526 U. N. Ave. cor. A. Mabini St.',
    'A. FLORES ST.',
    'U.N. AVE.',
    'A. MABINI ST.',
    'A. FLORES ST.',
    'PADRE FAURA ST.',
    'GREY ST.',
    'ARQUIZA ST.',
    'A. MABINI ST. COR. UN. AVE.',
    'NBI COMPOUND UN AVE.',
  ],
 },
  { label: 'District Number', name: 'districtNo', defaultValue: '5' },
  { label: 'District Name', name: 'districtName' },
  { label: 'Zone', name: 'zone', defaultValue: '72' },
  { label: 'Gender', name: 'gender', options: ['Male', 'Female', 'Other'] },
  { label: 'Civil Status', name: 'civilstatus' ,options: ['Single', 'Married', 'Divorced', 'Widowed']},
  { label: 'Voter', name: 'voter' ,options: ['Yes', 'No'],},
  { label: 'Status', name: 'status', options: ['Active', 'Inactive', 'Deceased','Bedridden']},
  { label: 'Email', name: 'email' },
  { label: 'Contact Number', name: 'contactNumber' },
];

const userCollectionRef = collection(db, 'citizens'); // Replace 'users' with your desired collection name

const AddProfile: React.FC = () => {
  const [user, setUser] = useState<User>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await addDoc(userCollectionRef, user);
      console.log('User added successfully!');
      setUser({});
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };


  return (
    <Container maxWidth="xl"
    sx={{
      marginTop: '20px',
      marginBottom: '20px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      boxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)',
      width: '100%',
      maxWidth: '600px',

    }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Add Profile
      </Typography>
    <Grid container spacing={2}>
      {fields.map((field) => (
        <Grid item xs={10} md={3} key={field.name}>
          {field.options ? (
            <TextField
              select
              label={field.label}
              name={field.name}
              value={user[field.name] || ''}
              onChange={handleInputChange}
              fullWidth
            >
              {field.options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          ) : (
            <TextField
              label={field.label}
              name={field.name}
              value={user[field.name] || ''}
              onChange={handleInputChange}
              type={field.type || 'text'}
              fullWidth
            />
          )}
        </Grid>
      ))}
      <Grid item xs={12}>
        <button onClick={handleSubmit}>Add User</button>
      </Grid>
    </Grid>
    </Container>
  );
};

export default AddProfile;
