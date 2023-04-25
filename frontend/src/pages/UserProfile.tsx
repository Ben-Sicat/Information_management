import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Paper } from '@mui/material';
import { collection, doc, getDoc, getFirestore } from 'firebase/firestore';
import { config } from '../config/config';
import { initializeApp } from 'firebase/app';

const app = initializeApp(config.firebaseConfig);
const db = getFirestore(app);

interface User {
  id: string;
  name: string;
  age: number;
  birthday: string;
  contactNumber: string;
  email: string;
  address: string;
  gender: string;
}

const UserProfile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  console.log(userId);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const userRef = doc(db, 'citizens', userId);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          const userData = { ...userDoc.data(), id: userDoc.id } as User;
          console.log('userData:', userData);
          setUser(userData);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error retrieving user:', error);
      }
    };

    getUser();
  }, [userId, db]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <Paper
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: '20px' }}>
          {user?.name || 'User Profile'}
        </Typography>
        <Typography variant="body1">
          <strong>Age:</strong> {user?.age || '-'}
        </Typography>
        <Typography variant="body1">
          <strong>Birthday:</strong> {user?.birthday || '-'}
        </Typography>
        <Typography variant="body1">
          <strong>Contact Number:</strong> {user?.contactNumber || '-'}
        </Typography>
        <Typography variant="body1">
          <strong>Email:</strong> {user?.email || '-'}
        </Typography>
        <Typography variant="body1">
          <strong>Address:</strong> {user?.address || '-'}
        </Typography>
        <Typography variant="body1">
          <strong>Gender:</strong> {user?.gender || '-'}
        </Typography>
      </Paper>
    </Box>
  );
};

export default UserProfile;
