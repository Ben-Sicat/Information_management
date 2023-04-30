import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { Box, Typography } from '@mui/material';

interface BarStatProps {
  statusField: string;
  title: string;
}

const citizenCollectionRef = collection(db, 'citizens');

const BarStat: React.FC<BarStatProps> = ({ statusField, title }) => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(citizenCollectionRef);
        const data: any = {};

        querySnapshot.forEach((doc) => {
          const status = doc.data()[statusField];
          data[status] = (data[status] || 0) + 1;
        });

        const chartData = Object.keys(data).map((status) => ({
          status,
          count: data[status],
        }));

        setChartData(chartData);
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    };

    fetchData();
  }, [statusField]);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <Box width="100%" height={200} sx={{ p: 2, backgroundColor: '#fff', borderRadius: '20px', overflow: 'hidden' }}>
      <Typography variant="h6" component="div" sx={{ marginBottom: '10px' }}>
        {title}
      </Typography>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="status" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default BarStat;
