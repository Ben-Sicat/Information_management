import React from 'react'
import { Navbar, Footer } from '../components/index';
import { Typography, Container, Card, CardHeader, CardContent, CardMedia,CardActionArea, CardActions, Button, Box, Divider} from '@mui/material'
import LogoSVG from '../assets/LOGOBIG.svg';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';


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
            marginTop: '8.5rem',
            width: '50%'
          }}>
          <Typography variant="h1" color="var(--secondary-color)">BARANGGAY 670 ZONE 72</Typography>
          </Box>
          <Box>
            <img src={LogoSVG} alt="LOGO" />
          </Box>
        </Box>
        
        <Box sx={{marginTop:'-3rem'}}>
            <Button variant="outlined" style={{
                position: 'absolute',
                left: '19.5rem',
                height: '3.5rem',
                width: '18rem',
                fontWeight: 700,
                fontSize: '1.2rem',
                borderRadius: '30rem',
                border: '5px solid',
                borderColor: 'var(--tertiary-color)'
            }}>ABOUT US</Button>
        </Box>
        
         <Container sx={{padding: 0, width: '150vh'}}>
            <Box>
                <Box sx={{marginTop: '13rem'}}>
                <Divider sx={{mb: 15}}/>
                  <Typography variant="h5" color="var(--secondary-color)" sx={{position: 'absolute', left:'13.5rem'}}>ANNOUNCEMENTS | EVENTS</Typography>
                </Box>
                <Box sx={{marginTop: '13rem', display:'flex', flexDirection:'row', justifyContent: 'center', alignItems: 'center', gap: 6}}>
                <Box sx={{width: '70%'}}>
                <Card sx={{ maxWidth: 1000, borderRadius: '10%', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',}}>          
                  <CardHeader subheader="May 3, 2023" />   
                      <CardContent sx={{height:'100%', maxHeight: '480px'}}>
                        <Typography gutterBottom variant="h5" component="div">
                        Lorem Ipsum
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris vel arcu turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Suspendisse dapibus mi finibus, sollicitudin ligula ac, cursus nibh. 
                        Etiam vehicula justo velit, id sodales enim molestie vitae.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris vel arcu turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Suspendisse dapibus mi finibus, sollicitudin ligula ac, cursus nibh. 
                        Etiam vehicula justo velit, id sodales enim molestie vitae.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris vel arcu turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Suspendisse dapibus mi finibus, sollicitudin ligula ac, cursus nibh. 
                        Etiam vehicula justo velit, id sodales enim molestie vitae.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris vel arcu turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Suspendisse dapibus mi finibus, sollicitudin ligula ac, cursus nibh. 
                        Etiam vehicula justo velit, id sodales enim molestie vitae.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris vel arcu turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Suspendisse dapibus mi finibus, sollicitudin ligula ac, cursus nibh. 
                        Etiam vehicula justo velit, id sodales enim molestie vitae.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris vel arcu turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Suspendisse dapibus mi finibus, sollicitudin ligula ac, cursus nibh. 
                        Etiam vehicula justo velit, id sodales enim molestie vitae.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris vel arcu turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Suspendisse dapibus mi finibus, sollicitudin ligula ac, cursus nibh. 
                        Etiam vehicula justo velit, id sodales enim molestie vitae.       
                        </Typography>
                      </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                    </CardActions>
                </Card>
                </Box>
                <Box sx={{width:'30%', display: 'flex', flexDirection:'column', gap: 6}}>
                <Card sx={{ maxWidth: 400 , height: '100%', borderRadius: '10%', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',}}>
                    <CardHeader subheader="May 3, 2023" />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Lorem Ipsum
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris vel arcu turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Suspendisse dapibus mi finibus, sollicitudin ligula ac, cursus nibh. 
                        </Typography>
                    </CardContent>

                </Card>

                <Card sx={{ maxWidth: 400 , height: '100%', borderRadius: '10%', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',}}>
                    <CardHeader subheader="May 3, 2023" />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Lorem Ipsum
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris vel arcu turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Suspendisse dapibus mi finibus, sollicitudin ligula ac, cursus nibh. 
                        </Typography>
                    </CardContent>

                </Card>
                </Box>
                </Box>
            </Box>
            
          </Container>   
      </BodyContainer>
      <Footer />
    </ModContainer>
   </> 
  )
  
}

export default Home

