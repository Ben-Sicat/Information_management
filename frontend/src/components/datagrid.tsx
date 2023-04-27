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
  lastName: string;
  firstName: string;
  middleName: string;
  suffix: string;
  birthMonth: string;
  birthDay: string;
  birthYear: string;
  contactNumber: string;
  age: number;
  bldgNo: string;
  streetName: string;
  districtNo: string;
  districtName: string;
  zone: string;
  gender: string;
  civilStatus: string;
  voter: boolean;
  status: string;
  email: string;
  address: string;
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'lastName', headerName: 'Last Name', width: 100 },
  { field: 'firstName', headerName: 'First Name', width: 100 },
  { field: 'middleName', headerName: 'Middle Name', width: 100 },
  { field: 'suffix', headerName: 'Suffix', width: 80 },
  { field: 'birthMonth', headerName: 'Birth Month', width: 150 },
  { field: 'birthDay', headerName: 'Birth Day', width: 100 },
  { field: 'birthYear', headerName: 'Birth Year', width: 150 },
  { field: 'contactNumber', headerName: 'Contact Num.', width: 180 },
  { field: 'age', headerName: 'Age', width: 100 },
  { field: 'bldgNo', headerName: 'Building No.', width: 150 },
  { field: 'streetName', headerName: 'Street Name', width: 150 },
  { field: 'districtNo', headerName: 'District No.', width: 150 },
  { field: 'districtName', headerName: 'District Name', width: 150 },
  { field: 'zone', headerName: 'Zone', width: 100 },
  { field: 'gender', headerName: 'Gender', width: 100 },
  { field: 'civilStatus', headerName: 'Civil Status', width: 150 },
  { field: 'voter', headerName: 'Voter', width: 100 },
  { field: 'status', headerName: 'Status', width: 150 },
  { field: 'email', headerName: 'Email', width: 250 },
  { field: 'address', headerName: 'Address', width: 250 },
];


const hiddenColumns = [
  'id',
  'bldgNo',
  'streetName',
  'districtNo',
  'civilStatus',
  'voter',
  'status',
  'address',
];

const visibleColumns = columns.filter((column) => !hiddenColumns.includes(column.field));


const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [filterField, setFilterField] = useState('');
  const [citizens, setCitizens] = useState<Citizen[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const citizenCollectionRef = collection(db, 'citizens');



  // const handleDeleteUser = () => {

  // }
  // const handleEditUser = () => {

  // }

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
  const updateSearchTerm = (term: string) => {
    setSearchTerm(term);
  };

  
  const filteredCitizens = citizens.filter((citizen) => {
    const searchTermLower = searchTerm.toLowerCase();
    return Object.values(citizen).some((value) => {
      if (typeof value === 'string') {
        return value.toLowerCase().includes(searchTermLower);
      } else if (typeof value === 'number') {
        return value.toString().includes(searchTerm);
      }
      return false;

      {/* 
        Object.values(citizen).some((value) is a function that checks if the value of the object is a string or a number
        its the same as doing this:
           (citizen.firstName && citizen.firstName.toLowerCase().includes(searchTermLower)) 
    */}
    });
  });
  

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
 <Navbar theme={theme} toggleTheme={toggleTheme} updateSearchTerm={updateSearchTerm}/>
<SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
<div style={{ height: 'calc(100vh - 128px)', width: '100%' }}>
          <DataGrid
            rows={filteredCitizens}
            columns={visibleColumns}
            sx={{
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              padding: '10px',
              justifyContent: 'center',
              alignItems: 'center',
              '& .MuiDataGrid-cell:hover': {
                color: 'dark blue',
              },
              margin: '20px'
            }}
            onRowClick={handleRowClick}
            autoHeight
          />
      </div>


    </>
  );
};

export default Dashboard;
