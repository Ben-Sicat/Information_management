import React from 'react';
import {Datagrid, SearchBar} from '../components/index';
import {getAuth, signOut} from 'firebase/auth';
import { Button } from '@mui/material';

const Dashboard: React.FC = () => {
  const auth = getAuth();
  return (
    <>
      <Datagrid />
      {/* make this button into a component */}
      <Button onClick = {()=> signOut(auth)}> Sign Out</Button>
      
    </>
  );
}

export default Dashboard;
