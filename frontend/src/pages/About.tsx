import React from 'react';
import { Navbar, Footer } from '../components';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import ComputerIcon from '@mui/icons-material/Computer';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

const About = () => {
  const Container = styled('div')`
    position: relative;
    height: calc(100vh - 64px - 60px); /* subtract the height of the navbar and footer */
    display: flex;
    justify-content: center;
   
  `;
  
  const BodyContainer = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  `;

  const boxy ={
  backgroundColor: '#F9F3FF',
  width: '150vh',
  height: 'auto',
  p: '50px',
  borderRadius: '8px',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  gap:'130px',

  }

  const conty={
    display: 'flex',
    flexDirection: 'column',
    gap:'100px',
    mt: '30em',
    textAlign: 'center',
    alignItems:'center',
    mb:'5em',

  }
  const icony={
    fontSize: '100px'
  }

  

  return (
    <>
      <Navbar burger={false} updateSearchTerm={(term: string) => {}} />
      <Container >     
        <BodyContainer sx={{textAlign: 'justify'}} >
        <Container sx ={conty}>
          
         
          
          <Box sx={{ width: '75%' }}>
          <Typography variant="h4" sx={{fontWeight: "1000", textTransform: "uppercase"}}>
            About Us
          </Typography>
            <Typography variant="body1" sx={{textAlign: 'justify'}}>
              The Senior Citizen Information System is a replacement for the traditional method of visualizing data,
              managing records and information of senior citizens. It functions as a database that stores and manages
              records of senior citizens in Barangay 670 Zone 72, eliminating the need for paperwork and minimizing the
              risk of human errors in record-keeping. The website is capable of efficiently managing records of senior
              citizens in the barangays. 
            </Typography>
          </Box>
          <Box sx={boxy}>
            <Box>
            <ComputerIcon sx={icony}/>
            <Typography variant='subtitle1' sx={{color:'#66478C'}}> It can be accessed from 
            anywhere with an internet connection</Typography>
            </Box>


            <Box>
            <AccessTimeIcon sx={icony}/>
            
            <Typography variant='subtitle1' sx={{color:'#66478C'}}>It can automate many 
            tasks that would otherwise require manual effort</Typography>
            </Box>


            <Box>
            <ManageSearchIcon sx={icony}/>
            <Typography variant='subtitle1' sx={{color:'#66478C'}}>It can reduce the 
            need for physical storage space and administrative staff</Typography>
            
            </Box>
            
          </Box>

          <Box sx={{ width: '75%' }}>   
          <Typography variant="h4" sx={{textTransform: "uppercase"}}>
           Barangay 670 Zone 72
          </Typography>
            <Typography variant="body1"  sx={{textAlign: 'justify'}}>
              The Senior Citizen Information System is a replacement for the traditional method of visualizing data,
              managing records and information of senior citizens. It functions as a database that stores and manages
              records of senior citizens in Barangay 670 Zone 72, eliminating the need for paperwork and minimizing the
              risk of human errors in record-keeping. The website is capable of efficiently managing records of senior
              citizens in the barangays. 
            </Typography>
          </Box>
          </Container>

          <Grid container spacing={2} sx={{ justifyContent: 'center', p: 5}}>
            <Grid item xs={12} md={5} >
              <Box
                sx={{
                  height: '100%',
                  width: 'auto',
                  backgroundColor: '#F9F3FF',
                  margin: 2,
                  borderRadius: 3,
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  p:5,
                  
                }}
              >
                <Typography variant="h4" sx={{  textTransform: "uppercase" }}>
                Mission
                </Typography>
                <Typography variant="body1">
                  The Senior Citizen Information System is a replacement for the traditional method of visualizing data,
                  managing records and information of senior citizens. It functions as a database that stores and manages
                  records of senior citizens in Barangay 670 Zone 72, eliminating the need for paperwork and minimizing the
                  risk of human errors in record-keeping. The website is capable of efficiently managing records of senior
                  citizens in the barangays.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  height: '100%',
                  width: 'auto',
                  backgroundColor: '#F9F3FF',
                  margin: 2,
                  borderRadius: 3,
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  p: 5,
             
                }}
              >
                <Typography variant="h4" sx={{textTransform: "uppercase" }}>
                  Vision
                </Typography>
                <Typography variant="body1">
              The Senior Citizen Information System is a replacement for the traditional method of visualizing data,
              managing records and information of senior citizens. It functions as a database that stores and manages
              records of senior citizens in Barangay 670 Zone 72, eliminating the need for paperwork and minimizing the
              risk of human errors in record-keeping. The website is capable of efficiently managing records of senior
              citizens in the barangays.
            </Typography>

              </Box>
            </Grid>
          </Grid>
        </BodyContainer>
      </Container>
      <Footer />
    </>
  );  
};

export default About;
