import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { TextField, Container } from '@mui/material';
import sqlite3 from 'sqlite3';

interface Row {
  id: number;
  name: string;
  age: number;
  birthdate: string;
  contact_num: string;
  email: string;
  address: string;
}

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'age', headerName: 'Age', width: 100 },
  { field: 'birthdate', headerName: 'Birthdate', width: 150 },
  { field: 'contact_num', headerName: 'Contact Num', width: 150 },
  { field: 'email', headerName: 'Email', width: 250 },
  { field: 'address', headerName: 'Address', width: 250 },
  { field: 'gender', headerName: 'Gender', width: 100 },
];

const Dashboard: React.FC = () => {
  const [rows, setRows] = useState<Row[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect(() => {
  //   const db = new sqlite3.Database('./path/to/database.sqlite');
  //   db.all('SELECT * FROM my_table', (err, rows) => {
  //     if (err) {
  //       console.error(err);
  //     } else {
  //       setRows(
  //         rows.map((row: Row, index: number) => ({
  //           ...row,
  //           id: index + 1,
  //         }))
  //       );
  //     }
  //     db.close();
  //   });
  // }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredRows = rows.filter(
    (row) =>
      row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.age.toString().includes(searchTerm)
  );

  return (
    <>
       <Container sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '20px',
      boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      padding: '10px',
      '& .MuiDataGrid-cell:hover': {
          color: 'dark blue',
        },
        margin: '20px',
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
      
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={filteredRows}
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
          }}
        />
      </div>
    </>
  );
};

export default Dashboard;
