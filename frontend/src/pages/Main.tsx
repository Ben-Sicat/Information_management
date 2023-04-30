import { Box, Grid, Button } from '@mui/material';
import React, { useEffect,} from 'react';
import { Navbar } from '../components';
import { config } from '../config/config';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { AgeGroup, BarStat } from '../components/mainMenu';
import { useNavigate } from 'react-router-dom';

const firebaseApp = initializeApp(config.firebaseConfig);
const db = getFirestore(firebaseApp);

const barStatConfig = [
  { statusField: 'status', size: 6, title: 'Status' },
  { statusField: 'civilstatus', size: 6, title: ' Civil Status' },
  { statusField: 'voter', size: 6, title: 'Voter' },
  { statusField: 'gender', size: 6, title: 'Gender' },
];

const Main: React.FC = () => {
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

  return (
    <>
      <Navbar burger={false} updateSearchTerm={(term: string) => {}} />

      <Box 
      sx={{ 
        height: '70vh',
        width: '100vw', 
        backgroundColor: 'skyblue', 
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        '@media screen and (max-width: 768px)': {
          justifyContent: 'center',
          direction: 'flex',
          flexDirection: 'column',
          height: '120vh'
        },
        }}>
        {/* age distribution */}
        <Box sx={{ 
          flex: '0 0 50%',
          '@media screen and (max-width: 768px)': {
            margin: 0,
            padding: 0,
            justifyContent: 'center',
            alignItems: 'center',
            width: '70%',
          },
          }}> 

          <AgeGroup />
          <Box sx={{ marginTop: '12rem'}}>
              <Button variant="outlined" sx={{
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                borderRadius: '15px'
                
              }}
              onClick={handleSumbit}
              >PROCEED TO DATA</Button>
        </Box>

        </Box>
        <Grid container sx={{ flex: '0 0 50%', margin: '-20px' }}>
          <Grid container spacing={2} sx={{ margin: '30px' }}>

            {barStatConfig.slice(0, 2).map((config, index) => (
              <Grid item key={index} xs={config.size} sx={{ padding: '100px' }}>
                <BarStat statusField={config.statusField} title={config.title} />
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={5} sx={{  marginRigt: '50px', marginTop: '-10px' }}>
            {barStatConfig.slice(0,2).map((config, index) => (
              <Grid item key={index} xs={config.size} sx={{ padding: '100px' }}>
                <BarStat statusField={config.statusField} title = {config.title} />
              </Grid>
            ))}
          </Grid>
        </Grid>

      </Box>
    </>
  );
};

export default Main;
