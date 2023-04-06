import React, { useState, useEffect } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Person  from '../utils/Persons';

const Dashboard = () => {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    fetch('/api/people')
      .then(res => res.json())
      .then(data => setPeople(data))
      .catch(err => console.error(err));
  }, []);

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
        Dashboard
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Birthdate</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {people.map(person => (
              <TableRow key={person.id}>
                <TableCell>{person.name}</TableCell>
                <TableCell>{person.age}</TableCell>
                <TableCell>{person.birthdate}</TableCell>
                <TableCell>{person.address}</TableCell>
                <TableCell>{person.phoneNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Dashboard;
