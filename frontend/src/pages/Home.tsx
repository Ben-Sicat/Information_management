import React from 'react'
import { Navbar, Footer } from '../components/index';
import { Grid, Typography, Container, Card, CardHeader, CardContent, CardMedia,CardActionArea, CardActions, Button, Box, Divider} from '@mui/material'
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
            <Container maxWidth="lg">
                  <Box marginTop="13rem">
                    <Divider sx={{mb:14}} />
                    <Typography variant="h5"  color="var(--secondary-color)" sx={{mb: 5}} >
                      ANNOUNCEMENTS | EVENTS
                    </Typography>
                  </Box>
                  <Grid container spacing={6}>
                    <Grid item xs={12} sm={6} md={8} sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Card sx={{ borderRadius: '5%', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}>
                        <CardHeader subheader="May 3, 2023" />
                        <CardContent>
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
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Grid container direction="column" spacing={2}>
                        <Grid item>
                          <Card sx={{ borderRadius: '10%', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}>
                            <CardHeader subheader="May 3, 2023" />
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                Lorem Ipsum
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                        <Grid item>
                          <Card sx={{ borderRadius: '10%', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}>
                            <CardHeader subheader="May 3, 2023" />
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                Lorem Ipsum
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
              </Container>
      </BodyContainer>
      <Footer />
    </ModContainer>
   </> 
  )
  
}

export default Home

