import React from 'react';
import { Navbar, Footer } from '../components';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import ComputerIcon from '@mui/icons-material/Computer';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import logoBIG from '../assets/LOGOBIG.png';
 
const About = () => {
  const Container = styled('div')`
  position: relative;
  height: 100vh;
  `;
 
  const BodyContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 120px 10px 120px 10px;
  gap: 4rem;
  `;
 
  const boxy ={
  backgroundColor: '#F9F3FF',
  width: '150vh',
  height: 'auto',
  p: '50px',
  borderRadius: '8px',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: '5rem',
  '@media screen and (max-width: 768px)': {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  }
  
  const advantagesBoxSX ={
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const icony={
    fontSize: '100px',
    '@media screen and (max-width: 768px)': {
      fontSize: '70px',
    },
  }
 
 
  return (
    <>
      <Navbar burger={false} updateSearchTerm={(term: string) => {}} />
      <Container >     
        <BodyContainer>
        <Box sx={{
              display: 'flex',
              flexDirextion: 'row',
              gap: '100px',
              alignItems:'center',
              justifyContent:'center',
              '@media screen and (max-width: 768px)': {
                flexDirection: 'column',
              },
          }}>
            <Box sx={{
              width:'35%', 
              '@media screen and (max-width: 768px)': {
                width: '80%'
              },
          }}>
                <Typography variant="h4" sx={{fontWeight: "1000", textTransform: "uppercase",mb:'20px', textAlign:'left'}}>
                    <Typography variant="h4"  sx={{color:"#440079"}}>Senior Citizen </Typography> Information Management System
                  </Typography>
                <Typography variant="body1" sx={{textAlign: 'left'}}>
                  The Senior Citizen Information System is a replacement for the traditional method of visualizing data,
                  managing records and information of senior citizens. It functions as a database that stores and manages
                  records of senior citizens in Barangay 670 Zone 72, eliminating the need for paperwork and minimizing the
                  risk of human errors in record-keeping. The website is capable of efficiently managing records of senior
                  citizens in the barangays. 
              </Typography>
            </Box>
            <Box sx={{
              height: '400px',
              width: '400px',
              '@media screen and (max-width: 768px)': {
                height: '80%',
                width: '80%'
              },
            }}>
            <img src={logoBIG} alt="LOGO" height="100%" width="100%" />
            </Box>
       </Box>

      
          <Box sx={boxy}>

                <Box sx={advantagesBoxSX}>
                <ComputerIcon sx={icony}/>
                <Typography variant='subtitle1' sx={{color:'#66478C'}}> It can be accessed from 
                anywhere with an internet connection</Typography>
                </Box>
    
                <Box sx={advantagesBoxSX}>
                <AccessTimeIcon sx={icony}/>   
                <Typography variant='subtitle1' sx={{color:'#66478C'}}>It can automate many 
                tasks that would otherwise require manual effort</Typography>
                </Box>
        
                <Box sx={advantagesBoxSX}>
                <ManageSearchIcon sx={icony}/>
                <Typography variant='subtitle1' sx={{color:'#66478C'}}>It can reduce the 
                need for physical storage space and administrative staff</Typography>
               </Box>

         </Box>

             
          <Box sx={{ 
            textAlign: 'center',
            width: '75%' }}>   
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


            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: '170vh',
              gap: '3rem',
              '@media screen and (max-width: 768px)': {
                flexDirection: 'column',
                width: 'auto'
              },
            }}>
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
                  p:10,
                  '@media screen and (max-width: 768px)': {
                    p:5
                  },
                }}
              >
                <Typography variant="h4" sx={{  textTransform: "uppercase", marginBottom: '1.5rem' }}>
                Mission
                </Typography>
                <Typography variant="body1" sx={{textAlign: 'justify'}}>
                  The Senior Citizen Information System is a replacement for the traditional method of visualizing data,
                  managing records and information of senior citizens. It functions as a database that stores and manages
                  records of senior citizens in Barangay 670 Zone 72, eliminating the need for paperwork and minimizing the
                  risk of human errors in record-keeping. The website is capable of efficiently managing records of senior
                  citizens in the barangays.
                </Typography>
              </Box>
     

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
                  p:10,
                  '@media screen and (max-width: 768px)': {
                    p:5
                  },
                }}
              >
                <Typography variant="h4" sx={{textTransform: "uppercase", marginBottom: '1.5rem' }}>
                  Vision
                </Typography>
                <Typography variant="body1" sx={{textAlign: 'justify'}}>
              The Senior Citizen Information System is a replacement for the traditional method of visualizing data,
              managing records and information of senior citizens. It functions as a database that stores and manages
              records of senior citizens in Barangay 670 Zone 72, eliminating the need for paperwork and minimizing the
              risk of human errors in record-keeping. The website is capable of efficiently managing records of senior
              citizens in the barangays.
            </Typography>
            </Box>
            </Box>
        </BodyContainer>
        <Footer />
      </Container>
 
    </>
  );  
};
 
export default About;
