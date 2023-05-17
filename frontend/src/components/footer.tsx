import React from 'react';
import { Box, Typography, Link, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CallIcon from '@mui/icons-material/Call';
import logoPNG from '../assets/Logo.svg';

const Footer: React.FC = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
    <Box
      component="footer"
      sx={{
        position: 'static',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginBottom: '0',
        backgroundColor: '#f5f5f5',
        py: 4,
        px: 2,
       }}

    >
      <Box
        sx={{
          px: 35,
          alignItems: 'flex-start',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          mb: 2,
          '& > *': {
            marginRight: 3,
            marginTop: 2, 
         
          },
        }}
      >
        <Box>
          <Link href='/main-menu'><img src={logoPNG} alt="BrgyLOGO" height={134} width={134}/></Link>
        </Box>
        <Box>
          <Typography variant="body2" sx={{ display:'flex', flexDirection:'column' }}>
            <Link href="/dashboard" underline='none'>Dashboard</Link>
            <Link href="/about" underline='none'>About</Link>
            <Link href="/main-menu" underline='none'>Contact</Link>
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2" sx={{ display:'flex', flexDirection:'column' }}>
            <Link href="#" underline='none'>Support</Link>
            <Link href="#" underline='none'>Services</Link>
            <Link href="#" underline='none'>Contact Us</Link>
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2" sx={{ display:'flex', flexDirection:'column' }}>
            <Link href="#" underline='none'>Announcements</Link>
            <Link href="#" underline='none'>Events</Link>
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: 16 }}>
            <GoogleIcon sx={{ fontSize: 20 }} />
          </Typography>
          <Typography sx={{ fontSize: 16 }}>
            <CallIcon sx={{ fontSize: 20 }} />
          </Typography>
        
        </Box>

        <Box sx={{display:'flex',flexDirection:'column', marginLeft:-15}}>
          
       <Link href="mailto:barangay670@gmail.com" underline="none" target='_blank'>barangay670@gmail.com</Link>
        <Typography> (+63)917-907-7814</Typography>
        </Box>
        <Box>
          <Typography>
            <FacebookIcon sx={{ fontSize: 20 }} />
          </Typography>
          <Typography sx={{ fontSize: 10 }}>
            <FmdGoodIcon sx={{ fontSize: 20 }} />
          </Typography>
        </Box>
       
      </Box>
      <Divider />
      <Typography variant="body2" align="center" color="textSecondary" sx={{ mt: 2 }}>
        &copy; {new Date().getFullYear()} All rights reserved.
      </Typography>
    </Box>
    </div>
  );
};

export default Footer;