import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Box, Typography } from '@mui/material';

const API_URL = 'http://your-api-url'; // Replace with your MySQL API endpoint

interface AgeData {
  range: string;
  count: number;
  roundedPercentage: number;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AgeGroup: React.FC = () => {
  const [ageData, setAgeData] = useState<AgeData[]>([]);

  const getCachedAgeData = (): AgeData[] => {
    const cachedData = localStorage.getItem('ageData');
    return cachedData ? JSON.parse(cachedData) : [];
  };

  const setCachedAgeData = (data: AgeData[]) => {
    localStorage.setItem('ageData', JSON.stringify(data));
  };

  useEffect(() => {
    const fetchData = async () => {
      const cachedAgeData = getCachedAgeData();

      if (cachedAgeData.length > 0) {
        setAgeData(cachedAgeData);
      } else {
        try {
          const response = await axios.get(`${API_URL}/citizens`);
          const citizens = response.data;

          const ageRanges = [
            { range: '60-70', min: 60, max: 70 },
            { range: '70-80', min: 70, max: 80 },
            { range: '80-90', min: 80, max: 90 },
            { range: '90-99+', min: 90, max: 150 },
          ];

          const ageData = ageRanges.map((ageRange) => {
            const filteredCitizens = citizens.filter((citizen: any) => {
              const age = citizen.age;
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
          setCachedAgeData(ageData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <Box
      sx={{
        width: '90%',
        display: 'flex',
        justifyContent: 'flex-start',
        padding: '10px',
        marginBottom: '0',
        '@media screen and (max-width: 768px)': {
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '2rem',
          marginTop: '2rem',
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '400px',
          border: '1px solid #ccc',
          borderRadius: '35px',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        }}
      >
        <Typography variant="h6" component="div">
          Age Distribution
        </Typography>
        <Box sx={{ width: '100%', height: '90%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={ageData}
                dataKey="roundedPercentage"
                nameKey="range"
                cx="50%"
                cy="50%"
                outerRadius="70%"
                fill="#8884d8"
                label
              >
                {ageData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default AgeGroup;
