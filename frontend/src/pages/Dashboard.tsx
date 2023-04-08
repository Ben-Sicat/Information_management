import React from 'react';
import {Datagrid} from '../components/index';
import {getAuth, signOut} from 'firebase/auth';
import { Button } from '@mui/material';

const Dashboard: React.FC = () => {
  const auth = getAuth();
  return (
    <>
      
      <Datagrid />
      <Button onClick = {()=> signOut(auth)}> Sign Out</Button>
      
    </>
  );
}

export default Dashboard;
