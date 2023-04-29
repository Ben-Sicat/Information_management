import React, { useState, useEffect } from 'react';
import { config } from '../../config/config';
import { initializeApp } from 'firebase/app';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Box, Typography } from '@mui/material';

const firebaseApp = initializeApp(config.firebaseConfig);
const citizenCollectionRef = collection(db, 'citizens');

const Location: React.FC = () => {
  const [ageData, setAgeData] = useState<any[]>([]);

  useEffect(() => {
    const getCitizens = async () => {
      const querySnapshot = await getDocs(citizenCollectionRef);
      const citizens = querySnapshot.docs.map((doc) => doc.data());

      const ageRanges = [
        { range: '60-70', min: 60, max: 70 },
        { range: '70-80', min: 70, max: 80 },
        { range: '80-90', min: 80, max: 90 },
        { range: '90-99+', min: 90, max: 150 },
      ];

      // Calculate the count and percentage for each age range
      const ageData = ageRanges.map((ageRange) => {
        const filteredCitizens = citizens.filter((citizen: any) => {
          const age = citizen.age; // Replace 'age' with the actual field name that stores the age
          return age >= ageRange.min && age <= ageRange.max;

        });

        const count = filteredCitizens.length;
        const percentage = (count / citizens.length) * 100;
        const roundedPercentage = Math.round(percentage * 100) / 100;

        return {
          range: ageRange.range,
          count,
          roundedPercentage,
        };
      });

      setAgeData(ageData);
    };

    getCitizens();
  }, []);


  return (
    <Box
      sx={{
        width: '30%',
        height: '300px',
        border: '1px solid #ccc',
        borderRadius: '30px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}
    >
      <Typography variant="h6" component="div">
        Age Distribution
      </Typography>
      <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          <Pie
            data={ageData}
            dataKey="roundedPercentage"
            nameKey="range"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {ageData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default Location;
