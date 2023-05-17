import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Typography, Paper, Grid, Button } from '@mui/material';
import { Navbar, Footer } from '../components';
import { doc, getDoc, getFirestore, deleteDoc } from 'firebase/firestore';
import { config } from '../config/config';
import { initializeApp } from 'firebase/app';
import { styled } from '@mui/system';

const app = initializeApp(config.firebaseConfig);
const db = getFirestore(app);

interface Field {
  label: string;
  name: string;
  type?: string;
  options?: string[];
  defaultValue?: string;
  [key: string]: any;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  suffix?: string;
}
const fields: Field[] = [
  { label: 'FIRST NAME', name: 'firstName' },
  { label: 'MIDDLE NAME', name: 'middleName' },
  { label: 'LAST NAME', name: 'lastName' },
  { label: 'SUFFIX', name: 'suffix' },

  { label: 'BUILDING NUMBER', name: 'bldgNo' },
  { label: 'STREET NAME', name: 'streetName' },
  { label: 'DISTRICT NUMBER', name: 'districtNo', defaultValue: '5' },
  { label: 'DISTRICT NAME', name: 'districtName' },

  { label: 'AGE', name: 'age', type: 'number' },
  { label: 'BIRTH MONTH', name: 'birthMonth' },
  { label: 'BIRTH DAY', name: 'birthDay' },
  { label: 'BIRTH YEAR', name: 'birthYear' },
  { label: 'EMAIL', name: 'email' },
  { label: 'CONTACT NUMBER', name: 'contactNumber' },
 

  { label: 'ZONE', name: 'zone', defaultValue: '72' },
  { label: 'GENDER', name: 'gender', options: ['Male', 'Female', 'Other'] },
  { label: 'CIVIL STATUS', name: 'civilstatus' ,options: ['Single', 'Married', 'Divorced', 'Widowed']},
  { label: 'VOTER', name: 'voter' ,options: ['Yes', 'No'],},
  { label: 'STATUS', name: 'status', options: ['Active', 'Inactive', 'Deceased','Bedridden']},
];


const UserProfile: React.FC = () => {
  const navigate = useNavigate();
  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<Field | null>(null);
  // const [ editUser, setEditUser ] = useState<Field | null>(null);
  


  useEffect(() => {
    const getUser = async () => {
      try {
        const userRef = doc(db, 'citizens', userId);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          const userData = { ...userDoc.data(), id: userDoc.id } as unknown as Field;
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
  }, [userId]);

  const getFullName = (): string => {
    if (user) {
      const { firstName, middleName, lastName, suffix } = user;
      const fullName = [firstName, middleName, lastName, suffix].filter(Boolean).join(' ');
      return fullName || 'User Profile';
    }
    return 'User Profile';
  };

    const handleEditClick = () => {
      navigate(`/DataGrid/create-user/${userId}`, { state: { userId, edit: true } });
    };
    
  

  const handleDeleteClick = async () => {
    try{
      const userRef = doc(db, 'citizens', userId);
      await deleteDoc(userRef);
      navigate('/Datagrid');
    }
    catch(error){
        console.error("Error delete user:", error)
    }
  };

  const Container = styled('div')`
  position: relative;
  height: 100vh;
`;
  const BodyContainer = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 150px 20px 20px 20px;
`;

  return (
    <>
    <Navbar burger={false} updateSearchTerm={(term: string) => {}} />
    <Container>
    <BodyContainer>
    <Box sx={{ padding: { xs: '12px', sm: '24px' }, marginBottom: '3rem' }}>
  <Typography variant="h4" sx={{ marginBottom: '20px' }}>
    {getFullName()} - SENIOR PROFILE
  </Typography>
  <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
      <Paper sx={{ padding: '16px', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}>
        {fields.slice(0, 4).map((field) => (
          <Typography variant="body1" sx={{ marginBottom: '8px' }}>
            <strong>{field.label}:</strong> {user?.[field.name] || '-'}
          </Typography>
        ))}
      </Paper>
    </Grid>
    <Grid item xs={12} md={6}>
      <Paper sx={{ padding: '16px', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}>
        {fields.slice(4, 8).map((field) => (
          <Typography variant="body1" sx={{ marginBottom: '8px' }}>
            <strong>{field.label}:</strong> {user?.[field.name] || '-'}
          </Typography>
        ))}
      </Paper>
    </Grid>
    <Grid item xs={12} md={6}>
      <Paper sx={{ padding: '16px', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}>
        {fields.slice(8, 12).map((field) => (
          <Typography variant="body1" sx={{ marginBottom: '8px' }}>
            <strong>{field.label}:</strong> {user?.[field.name] || '-'}
          </Typography>
        ))}
      </Paper>
    </Grid>
    <Grid item xs={12} md={6}>
      <Paper sx={{ padding: '16px', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}>
        {fields.slice(12,19).map((field) => (
          <Typography variant="body1" sx={{ marginBottom: '8px' }}>
            <strong>{field.label}:</strong> {user?.[field.name] || '-'}
          </Typography>
        ))}
      </Paper>
    </Grid>
  </Grid>
</Box>


    <Box sx={{ display: 'flex', gap: '2rem' }}>
      <Button variant="contained" onClick={handleEditClick}>
        Edit
      </Button>
      <Button variant="contained">
        Print
      </Button>
      <Button variant="contained" onClick={handleDeleteClick}>
        Delete
      </Button>
    </Box>
    </BodyContainer>
      <Footer />
      </Container>
    </>
  );
};

export default UserProfile;
