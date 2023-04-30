import React from 'react';
import { Box, Typography, Link, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        py: 4,
        px: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="body2">
        <Link href="/dashboard">Main Menu</Link> | <Link href="/about">About</Link>
      </Typography>
      <Box display="flex" alignItems="center">
        <Typography variant="body2">Phone: 123-456-7890</Typography>
        <FacebookIcon sx={{ ml: 1, fontSize: 20 }} />
        <GoogleIcon sx={{ ml: 1, fontSize: 20 }} />
      </Box>
      <Divider sx={{ width: '100%', my: 2 }} />
      <Typography variant="body2" align="center" color="textSecondary">
        &copy; {new Date().getFullYear()} Your Website Name. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
