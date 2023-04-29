import React, { useState, useEffect } from 'react';
import { config } from '../../config/config';
import { initializeApp } from 'firebase/app';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';

const firebaseApp = initializeApp(config.firebaseConfig);
const citizenCollectionRef = collection(db, 'citizens');

interface LocationProps {
  minAge: number;
  maxAge: number;
}

const AgeGroup: React.FC<LocationProps> = ({ minAge, maxAge }) => {
  const [userCount, setUserCount] = useState<number>(0);

  useEffect(() => {
    const getCitizens = async () => {
      const querySnapshot = await getDocs(citizenCollectionRef);
      const citizens = querySnapshot.docs.map((doc) => doc.data());

      // Filter citizens within the specified age range
      const filteredCitizens = citizens.filter((citizen: any) => {
        const age = citizen.age; // Replace 'age' with the actual field name that stores the age

        return age >= minAge && age <= maxAge;
      });

      // Set the user count
      setUserCount(filteredCitizens.length);
    };

    getCitizens();
  }, [minAge, maxAge]);

  return (
    <Box
      sx={{
        width: '150px',
        height: '150px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h6" component="div">
        Age Range
      </Typography>
      <Typography variant="body1" component="div" sx={{ marginTop: '10px' }}>
        {minAge} - {maxAge} year olds:
      </Typography>
      <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
        {userCount}
      </Typography>
    </Box>
  );
};

export default AgeGroup;
