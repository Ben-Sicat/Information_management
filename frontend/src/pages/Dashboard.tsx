import { Box, Grid, Button } from '@mui/material';
import React, { useEffect,} from 'react';
import { Navbar, Footer } from '../components';
import { config } from '../config/config';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { AgeGroup, BarStat } from '../components/mainMenu';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';

const firebaseApp = initializeApp(config.firebaseConfig);
const db = getFirestore(firebaseApp);

const barStatConfig = [
  { statusField: 'status', size: 6, title: 'Status' },
  { statusField: 'civilstatus', size: 6, title: 'Civil Status' },
  { statusField: 'voter', size: 6, title: 'Voter' },
  { statusField: 'gender', size: 6, title: 'Gender' },
];

const Dashboard: React.FC = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'citizens'));
        let totalCount = 0;

        querySnapshot.forEach((doc) => {
          const fieldValue = doc.get('age');
          if (fieldValue) {
            totalCount += fieldValue;
          }
        });

        console.log('Total count:', totalCount);
      } catch (error) {
        console.log('Error getting documents: ', error);
      }
    };

    fetchData();
  }, []);

  const handleSumbit = () =>{
    navigate('/dashboard')
  }

  const Container = styled('div')`
  position: relative;
  height: 100vh;
`;
  const BodyContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

  return (
    <>
      <Navbar burger={false} updateSearchTerm={(term: string) => {}} />
      <Container>
      <BodyContainer>
      <Box 
        sx={{ 
          height: '100%',
          width: '100%', 
          // backgroundColor: 'skyblue', 
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          '@media screen and (max-width: 768px)': {
            height: 'auto',
            flexDirection: 'column',
          },
        }}>
        {/* age distribution */}
        <Box sx={{ 
          display: 'flex',
          flexDirection: 'column',
          flex: '0 0 50%',
          '@media screen and (max-width: 768px)': {
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          },
        }}> 
          <AgeGroup />
          <Box sx={{ marginTop: { xl: '2rem',xs: '2rem', sm: '10rem'} }}>
            <Button 
              variant="outlined" 
              sx={{
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                borderRadius: '15px'
              }}
              onClick={handleSumbit}
            >
              PROCEED TO DATA
            </Button>
          </Box>
        </Box>

        <Grid 
          container 
          sx={{ 
            flex: '0 0 50%', 
            margin: '-20px',
            '@media screen and (max-width: 768px)': {
              margin: '20px 0',
              width: '100%',
            },
          }}
        >
          <Grid 
            container 
            spacing={2} 
            sx={{ 
              margin: '30px',
              '@media screen and (max-width: 768px)': {
                margin: 0,
              },
            }}
          >
            {barStatConfig.slice(0, 2).map((config, index) => (
              <Grid item key={index} xs={config.size} sx={{ padding: '20px' }}>
                <BarStat statusField={config.statusField} title={config.title} />
              </Grid>
            ))}
          </Grid>
          <Grid 
            container 
            spacing={2} 
            sx={{ 
              margin: '30px',
              '@media screen and (max-width: 768px)': {
                margin: 0,
              },
            }}
          >
            {barStatConfig.slice(2).map((config, index) => (
              <Grid item key={index} xs={config.size} sx={{ padding: '20px' }}>
                <BarStat statusField={config.statusField} title={config.title} />
              </Grid>
            ))}
          </Grid>
        </Grid>

      </Box>
      </BodyContainer>
      <Footer />
      </Container>

  
      
    </>
  );
};

export default Dashboard;
