import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/index';
import { config } from '../config/config';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import  AgeGroup  from '../components/mainMenu/ageGroup'
const firebaseApp = initializeApp(config.firebaseConfig);
const db = getFirestore(firebaseApp);

const Main: React.FC = () => {
  const [ageGroups, setAgeGroups] = useState<any[]>([]);
  const [locationStats, setLocationStats] = useState<any[]>([]);

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
      <Box sx={{ height: '60vh', width: '100vw', backgroundColor: 'skyblue' }}>
        <AgeGroup  />
        
        <Typography variant="h1">Main</Typography>
      </Box>
    </>
  );
};

export default Main;
