import React, { useState } from 'react';
import { TextField, Container } from '@mui/material';

interface SearchBarProps {
  searchTerm: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, handleSearch }) => {
  return (
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
  );
};

export default SearchBar;
