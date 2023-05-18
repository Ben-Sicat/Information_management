import React from 'react'
import { Navbar, Footer } from '../components/index';
import { Typography, Container, Grid, Button, Box, Divider} from '@mui/material'
import LogoSVG from '../assets/LOGOBIG.svg';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import { BorderColor } from '@mui/icons-material';



const Home: React.FC = () => {
  const ModContainer = styled('div')`
  position: relative;
  height: 100vh;
  `;
 
  const BodyContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 200px 10px 120px 10px;
  gap: 4rem;
  `;
  const navigate = useNavigate();
  return (
   <>
    <Navbar burger={false} updateSearchTerm={(term: string) => {}}/>
    <ModContainer>
      <BodyContainer>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
          <Box sx={{
            marginTop: '5rem',
            width: '50%'
          }}>
          <Typography variant="h1" color="var(--secondary-color)">BARANGGAY 670 ZONE 72</Typography>
          </Box>
          <Box>
            <img src={LogoSVG} alt="LOGO" />
          </Box>
        </Box>
        
        <Box>
            <Button variant="outlined" style={{
                position: 'absolute',
                left: '16.5rem',
                height: '3.5rem',
                width: '18rem',
                fontWeight: 700,
                fontSize: '1.2rem',
                borderRadius: '30rem',
                border: '5px solid',
                borderColor: 'var(--tertiary-color)'
            }}>ABOUT US</Button>
        </Box>
        <Box>
            <Box sx={{marginTop: '25rem'}}>
            <Divider />
              <Typography variant="h4" color="var(--secondary-color)" sx={{position: 'absolute', left:'13.5rem'}}>ANNOUNCEMENTS | EVENTS</Typography>
            </Box>
            <Box>
              
            </Box>
        </Box>
      </BodyContainer>
      <Footer />
    </ModContainer>
   </> 
  )
  
}

export default Home

