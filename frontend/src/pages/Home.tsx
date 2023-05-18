import React from 'react'
import { Navbar, Footer } from '../components/index';
import { Typography, Container, Grid, Button} from '@mui/material'
import LogoSVG from '../assets/Logo.svg';
import { useNavigate } from 'react-router-dom';




const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
   <>
    <Navbar burger={false} updateSearchTerm={(term: string) => {}}/>
    <Container sx={{
        width: '100%',
        height: '100vh',
        margin: '170px 0px 0px 0px',
        backgroundColor: '',// add styling or make this a background photo and another container to change the color of the pic to purple with a set opacity
      
   }}> 
   <Container sx={{

        alighItems: 'center',
        justifyContent: 'center',
        display: 'flex',
   }}>
    <Grid container spacing={16}>
      <Grid item xs={2} sm={6}>
        <Typography variant="h2" sx={{
          color: 'black',
          textAlign: 'left',
          

          }}>
            BARANGAY 670 ZONE 72
            </Typography>
      </Grid>
      <Grid item xs={2} sm={6}>
        <img src={LogoSVG} alt="Logo" width="100%" height="100%" />
      </Grid>
    </Grid>


    </Container>
    
    <Button variant="outlined" sx={{
      marginTop: '2rem',
      width: '30%',
      
      color: 'purple',
      fontSize: '1.5rem',
      borderRadius: '10px',
      padding: '.5rem',
      '&:hover': {
        backgroundColor: 'purple',
        color: 'black',
      }
    }} onClick={() => {navigate('/login')}}>
      Login
    </Button>

    
    </Container>

        <Footer />
   </> 
  )
  
}

export default Home

