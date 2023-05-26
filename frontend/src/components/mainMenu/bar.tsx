import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Box, Typography } from '@mui/material';

interface BarStatProps {
  statusField: string;
  title: string;
}

const API_URL = 'http://locahost:3000'; 

const BarStat: React.FC<BarStatProps> = ({ statusField, title }) => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/citizens`);
        const data: any = {};

        response.data.forEach((citizen: any) => {
          const status = citizen[statusField];
          data[status] = (data[status] || 0) + 1;
        });

        const chartData = Object.keys(data).map((status, index) => ({
          status,
          count: data[status],
          fill: COLORS[index % COLORS.length],
        }));

        setChartData(chartData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [statusField]);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ width: '100%' }}>
      <Box
        width="100%"
        height={300}
        sx={{
          p: 2,
          // backgroundColor: '#9747FF',
          borderRadius: '10px',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h6" component="div" sx={{ marginBottom: '10px', textAlign: 'center' }}>
          {title}
        </Typography>
        <ResponsiveContainer width="100%" height="80%">
          <BarChart data={chartData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" tickLine={false} />
            <YAxis dataKey="status" type="category" tickLine={false} width={50} fontSize={10} />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" radius={[0, 10, 10, 0]}>
              {chartData.map((entry: any[], index: any) => (
                <Cell key={`cell-${index}`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </div>
  );
};

const COLORS = ['#FF6B6B', '#FF9F1C', '#FFCD56', '#4ECDC4', '#36A2EB', '#9966FF'];

export default BarStat;
