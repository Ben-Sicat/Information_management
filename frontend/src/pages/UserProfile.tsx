import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Typography, Paper, Grid, Button } from '@mui/material';
import { doc, getDoc, getFirestore, deleteDoc } from 'firebase/firestore';
import { config } from '../config/config';
import { initializeApp } from 'firebase/app';

const app = initializeApp(config.firebaseConfig);
const db = getFirestore(app);

interface Field {
  label: string;
  name: string;
  type?: string;
  options?: string[];
  defaultValue?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  suffix?: string;
}
const fields: Field[] = [
  // field definitions...
  { label: 'Last Name', name: 'lastName' },
  { label: 'First Name', name: 'firstName' },
  { label: 'Middle Name', name: 'middleName' },
  { label: 'Suffix', name: 'suffix' },
  { label: 'Age', name: 'age', type: 'number' },
  { label: 'Birth Month', name: 'birthMonth' },
  { label: 'Birth Day', name: 'birthDay' },
  { label: 'Birth Year', name: 'birthYear' },
  { label: 'Building Number', name: 'bldgNo' },
  { label: 'Street Name', name: 'streetName'
 },
  { label: 'District Number', name: 'districtNo', defaultValue: '5' },
  { label: 'District Name', name: 'districtName' },
  { label: 'Zone', name: 'zone', defaultValue: '72' },
  { label: 'Gender', name: 'gender', options: ['Male', 'Female', 'Other'] },
  { label: 'Civil Status', name: 'civilstatus' ,options: ['Single', 'Married', 'Divorced', 'Widowed']},
  { label: 'Voter', name: 'voter' ,options: ['Yes', 'No'],},
  { label: 'Status', name: 'status', options: ['Active', 'Inactive', 'Deceased','Bedridden']},
  { label: 'Email', name: 'email' },
  { label: 'Contact Number', name: 'contactNumber' },
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
  }, [userId, db]);

  const getFullName = (): string => {
    if (user) {
      const { firstName, middleName, lastName, suffix } = user;
      const fullName = [firstName, middleName, lastName, suffix].filter(Boolean).join(' ');
      return fullName || 'User Profile';
    }
    return 'User Profile';
  };

    const handleEditClick = () => {
      navigate(`/dashboard/create-user/${userId}`, { state: { userId, edit: true } });
    };
    
  

  const handleDeleteClick = async () => {
    try{
      const userRef = doc(db, 'citizens', userId);
      await deleteDoc(userRef);
      navigate('/dashboard');
    }
    catch(error){
        console.error("Error delete user:", error)
    }
  };

  return (
    <Box sx={{ padding: { xs: '12px', sm: '24px' },
  }}>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        {getFullName()}
      </Typography>
      <Grid container spacing={2}
     
      >
        {fields.map((field) => (
          <Grid item xs={12} sm={6} md={4} key={field.name}>
            <Paper sx={{ padding: '16px',         boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )', }}>
              <Typography variant="body1" sx={{ marginBottom: '8px' }}>
                <strong>{field.label}:</strong> {user?.[field.name] || '-'}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" onClick={handleEditClick}>
        Edit
      </Button>
      <Button variant="contained" onClick={handleDeleteClick}>
        Delete
      </Button>
    </Box>
  );
};

export default UserProfile;
