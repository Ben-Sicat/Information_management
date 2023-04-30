import { Box, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { Navbar } from '../components';
import { config } from '../config/config';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { AgeGroup, BarStat } from '../components/mainMenu';

const firebaseApp = initializeApp(config.firebaseConfig);
const db = getFirestore(firebaseApp);

const barStatConfig = [
  { statusField: 'status', size: 6, title: 'Status' },
  { statusField: 'civilstatus', size: 6, title: ' Civil Status' },
  { statusField: 'voter', size: 6, title: 'Voter' },
  { statusField: 'gender', size: 6, title: 'Gender' },
];

const Main: React.FC = () => {
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

  return (
    <>
      <Navbar burger={false} updateSearchTerm={(term: string) => {}} />
      <Box sx={{ height: '60vh', width: '100vw', backgroundColor: 'skyblue', display: 'flex' }}>
        <Box sx={{ flex: '0 0 50%' }}>
          <AgeGroup />
        </Box>
        <Grid container sx={{ flex: '0 0 40%', margin: '-20px' }}>
          <Grid container spacing={2} sx={{ margin: '30px' }}>
            {barStatConfig.slice(0, 2).map((config, index) => (
              <Grid item key={index} xs={config.size} sx={{ padding: '5x' }}>
                <BarStat statusField={config.statusField} title={config.title} />
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={2} sx={{ margin: '0 30px' }}>
            {barStatConfig.slice(2, 4).map((config, index) => (
              <Grid item key={index} xs={config.size} sx={{ padding: '5px' }}>
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
