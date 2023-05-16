import React from 'react';
import { Navbar, Footer } from '../components';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';

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

  return (
    <>
      <Navbar burger={false} updateSearchTerm={(term: string) => {}} />
      <Container>
        <BodyContainer sx={{textAlign: 'justify'}} >
          <Typography variant="h4" sx={{ mt:50}}>
            About Us
          </Typography>
          
          <Box sx={{ width: '75%' }}>
            <Typography variant="body1" sx={{ marginTop: '20px' }}>
              The Senior Citizen Information System is a replacement for the traditional method of visualizing data,
              managing records and information of senior citizens. It functions as a database that stores and manages
              records of senior citizens in Barangay 670 Zone 72, eliminating the need for paperwork and minimizing the
              risk of human errors in record-keeping. The website is capable of efficiently managing records of senior
              citizens in the barangays. 
            </Typography>
          </Box>

          <Typography variant="h4" sx={{ mt:30}}>
           Barangay 670 Zone 72
          </Typography>
          <Box sx={{ width: '75%' }}>
            <Typography variant="body1" sx={{ marginTop: '20px' }}>
              The Senior Citizen Information System is a replacement for the traditional method of visualizing data,
              managing records and information of senior citizens. It functions as a database that stores and manages
              records of senior citizens in Barangay 670 Zone 72, eliminating the need for paperwork and minimizing the
              risk of human errors in record-keeping. The website is capable of efficiently managing records of senior
              citizens in the barangays. 
            </Typography>
          </Box>

          <Grid container spacing={2} sx={{ justifyContent: 'center', p: 5, mt:15}}>
            <Grid item xs={12} md={5} >
              <Box
                sx={{
                  height: '100%',
                  width: '100%',
                  margin: 2,
                  borderRadius: 3,
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  p:5,
                  
                }}
              >
                <Typography variant="h4" sx={{ marginTop: '40px' }}>
                Mission
                </Typography>
                <Typography variant="body1" sx={{ marginTop: '20px' }}>
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
                  width: '100%',
                  margin: 2,
                  borderRadius: 3,
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  p: 5,
             
                }}
              >
                <Typography variant="h4" sx={{ marginTop: '40px' }}>
                  Vision
                </Typography>
                <Typography variant="body1" sx={{ marginTop: '20px' }}>
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
