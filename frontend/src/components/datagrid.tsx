import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { TextField, Container } from '@mui/material';

import 'firebase/firestore';
import {db}from '../firebase-config'
import {collection, getDocs,} from 'firebase/firestore'
import { BlockList } from 'net';

interface Citizen {
  id: string;
  name: string;
  age: number;
  birthday: string;
  contactNumber: string;
  email: string;
  address: string;
  gender: string;
}

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'age', headerName: 'Age', width: 100 },
  { field: 'birthday', headerName: 'Birthday', width: 150 },
  { field: 'contactNumber', headerName: 'Contact Num.', width: 150 },
  { field: 'email', headerName: 'Email', width: 250 },
  { field: 'address', headerName: 'Address', width: 250 },
  { field: 'gender', headerName: 'Gender', width: 150 },
];

const Dashboard: React.FC = () => {
  const [citizens, setCitizens] = useState<Citizen[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const citizenCollectionRef = collection(db, 'citizens');

  useEffect(() => {
    const getCitizens = async () => {
      const data = await getDocs(citizenCollectionRef)
      setCitizens(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Citizen[]);
    }
    getCitizens();
  }, []);
    

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredCitizens = citizens.filter(
    (citizen) =>
      citizen.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      citizen.age.toString().includes(searchTerm)
  );

  return (
    <>
       <Container sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '20px',
      boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      width:'500px',
      padding: '10px',
      '& .MuiDataGrid-cell:hover': {
          color: 'dark blue',
        },
        margin: '20px auto 20px',
      }}>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={handleSearch}
      />
      </Container>
      
      <div style={{ height: '100%', width: '100%'}}>
  <DataGrid
    rows={filteredCitizens}
    columns={columns}
    sx={{
      borderRadius: '20px',
      boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      padding: '40px',
      justifyContent: 'center',
      alignItems: 'center',
      '& .MuiDataGrid-cell:hover': {
        color: 'dark blue',
      },
      margin: '20px',
      overflow: 'auto',
    }}
  />
</div>

    </>
  );
};

export default Dashboard;
