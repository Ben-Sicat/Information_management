import React, { useState, useEffect } from 'react'; 
import { DataGrid, GridColDef } from '@mui/x-data-grid';
// import { 
//   Box, 
//   Typography, 
//   TextField, 
//   Button, 
//   Paper } 
//   from '@mui/material';

import { useNavigate } from 'react-router-dom';
import 'firebase/firestore';
import {db}from '../firebase-config'
import {collection, getDocs,} from 'firebase/firestore'
import {SearchBar, Navbar} from '../components/index';


interface Citizen {
  id: string;
  name: string;
  age: number;
  birthday: string;
  contactNumber: string;
  email: string;
  address: string;
  gender: string;
  actions: any;
}

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'age', headerName: 'Age', width: 100 },
  { field: 'birthday', headerName: 'Birthday', width: 150 },
  { field: 'contactNumber', headerName: 'Contact Num.', width: 150 },
  { field: 'email', headerName: 'Email', width: 250 },
  { field: 'address', headerName: 'Address', width: 250 },
  { field: 'gender', headerName: 'Gender', width  : 150 },
];


const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [filterField, setFilterField] = useState('');
  const [citizens, setCitizens] = useState<Citizen[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const citizenCollectionRef = collection(db, 'citizens');



  const handleDeleteUser = () => {

  }
  const handleEditUser = () => {

  }

  useEffect(() => {
    const getCitizens = async () => {
      const data = await getDocs(citizenCollectionRef)
      setCitizens(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Citizen[]);
    }
    getCitizens();
  }, []);
    

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  console.log(filterField)
  
  const filteredCitizens = citizens.filter(
    (citizen) =>
      citizen.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      citizen.age.toString().includes(searchTerm) ||
      citizen.birthday.toLowerCase().includes(searchTerm.toLowerCase()) ||
      citizen.contactNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      citizen.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      citizen.address.toLowerCase().includes(searchTerm.toLowerCase()) 

  );

  const handleRowClick = (params: any) => {
    const citizenId = params.row.id;
    navigate(`/user-profile/${citizenId}`);
  }

  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
 <Navbar theme={theme} toggleTheme={toggleTheme} filterData={setFilterField}/>
<SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
  <div style={{ height: '100vh', width: '100%'}}>
  <DataGrid
    rows={filteredCitizens}
    columns={columns}
    // 35
    sx={{
      boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      padding: '10px',
      justifyContent: 'center',
      alignItems: 'center',
      '& .MuiDataGrid-cell:hover': {
        color: 'dark blue',
      },
      margin: '20px'
    }}
  
    onRowClick={handleRowClick}
  />
  
</div>

    </>
  );
};

export default Dashboard;
