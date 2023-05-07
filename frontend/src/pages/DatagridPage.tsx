import React, { useState } from 'react';
import { Datagrid } from '../components/index';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';

const ButtonContainer = styled('div')`
  position: static;
  bottom: 1rem;
  right: 1rem;
  z-index: 999;
`;


const DatagridPage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const auth = getAuth();

 
  const handleSignOut = () => {
    signOut(auth);
  };

  const navigate = useNavigate();
    
  return (
    <>
      <Datagrid />  
    </>
  );
};

export default DatagridPage;