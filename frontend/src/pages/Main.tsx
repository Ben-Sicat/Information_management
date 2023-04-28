import { Box, Typography } from '@mui/material'
import React from 'react'
import {Navbar} from '../components/index';

const Main = () => {
  return (
    <>
    <Navbar burger={false} updateSearchTerm={function (term: string): void {
        throw new Error('Function not implemented.');
      } }/>
      <Box sx={{ height: '60vh', width: '100vw', backgroundColor: 'skyblue' }}>
        
        <Typography variant="h1">Main</Typography>

      </Box>
    </>
  )
}

export default Main