import React from 'react'
import { Navbar } from '../components/index';
import { Box, Paper,Typography, Container} from '@mui/material'

const Home: React.FC = () => {
  return (
   <>
    <Navbar burger={false} updateSearchTerm={(term: string) => {}}/>
    <Container sx={{
        width: '100%',
        height: '100%',
        backgroundColor: '',// add styling or make this a background photo and another container to change the color of the pic to purple with a set opacity
    }}> 
    <Typography variant="h1" sx={{color: 'white', textAlign: 'center', paddingTop: '20px'}}>Welcome to the Home Page</Typography>
    
    
    </Container>
   </> 
  )
  
}

export default Home