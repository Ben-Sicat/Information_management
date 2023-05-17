import React, { useState, useEffect, useMemo, useCallback, ChangeEvent } from 'react'; 
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import 'firebase/firestore';
import {db}from '../firebase-config'
import {collection, getDocs,} from 'firebase/firestore'
import {SearchBar, Navbar, Footer} from '../components/index';
import { Button} from '@mui/material';
import { debounce } from 'lodash';


interface Citizen {
  id: string;
  rowNumber: number;
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
  { field: 'rowNumber', headerName: '#', width: 50 },
  { field: 'lastName', headerName: 'Last Name', headerAlign: 'center', align:'center', width: 150 },
  { field: 'firstName', headerName: 'First Name', headerAlign: 'center', align:'center', width: 150 },
  { field: 'middleName', headerName: 'Middle Name', headerAlign: 'center', align:'center', width: 150 },
  { field: 'suffix', headerName: 'Suffix', headerAlign: 'center', align:'center', width: 80 },
  { field: 'birthMonth', headerName: 'Birth Month', headerAlign: 'center', align:'center', width: 150 },
  { field: 'birthDay', headerName: 'Birth Day', headerAlign: 'center', align:'center', width: 100 },
  { field: 'birthYear', headerName: 'Birth Year', headerAlign: 'center', align:'center', width: 150 },
  { field: 'contactNumber', headerName: 'Contact Num.', headerAlign: 'center', align:'center',width: 180 },
  { field: 'age', headerName: 'Age', headerAlign: 'center', align:'center', width: 100 },
  { field: 'bldgNo', headerName: 'Building No.', headerAlign: 'center', align:'center', width: 150 },
  { field: 'streetName', headerName: 'Street Name', headerAlign: 'center', align:'center', width: 200 },
  { field: 'districtNo', headerName: 'District No.', headerAlign: 'center', align:'center', width: 150 },
  { field: 'districtName', headerName: 'District Name', headerAlign: 'center', align:'center', width: 150 },
  { field: 'zone', headerName: 'Zone', headerAlign: 'center', align:'center', width: 100 },
  { field: 'gender', headerName: 'Gender', headerAlign: 'center', align:'center', width: 100 },
  { field: 'civilStatus', headerName: 'Civil Status', headerAlign: 'center', align:'center', width: 150 },
  { field: 'voter', headerName: 'Voter', headerAlign: 'center', align:'center', width: 100 },
  { field: 'status', headerName: 'Status', headerAlign: 'center', align:'center', width: 150 },
  { field: 'email', headerName: 'Email', headerAlign: 'center', align:'center', width: 250 },
  { field: 'address', headerName: 'Address', headerAlign: 'center', align:'center',width: 250 },
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


const DataPageGrid: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [citizens, setCitizens] = useState<Citizen[]>([]);
  const [lastFetched, setLastFetched] = useState<number>(0);

  const citizenCollectionRef = collection(db, 'citizens');

  useEffect(() => {
    const cacheExpiry = 1120 * 60 * 1000; // 1 day
    const currentTime = Date.now();

    if (citizens.length === 0 || currentTime - lastFetched >= cacheExpiry) {
      const getCitizens = async () => {
        try {
          const data = await getDocs(citizenCollectionRef);
          const newData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Citizen[];
          setCitizens(newData);
          setLastFetched(Date.now());
        } catch (error) {
          console.error('Error fetching citizens:', error);
        }
      };

      getCitizens();
    }
  }, [citizens, lastFetched, citizenCollectionRef]);

  const handleSearch = useCallback(
    debounce((event: ChangeEvent<HTMLInputElement>) => {
      const term = event.target.value;
      setSearchTerm(term);
    }, 300),
    []
  );

  const updateSearchTerm = (term: string) => {
    handleSearch({ target: { value: term } } as ChangeEvent<HTMLInputElement>);
  };

  const filteredCitizens = useMemo(() => {
    const searchTermLower = searchTerm.toLowerCase();
    return citizens.filter((citizen) => {
      return Object.values(citizen).some((value) => {
        if (typeof value === 'string') {
          return value.toLowerCase().includes(searchTermLower);
        } else if (typeof value === 'number') {
          return value.toString().includes(searchTerm);
        }
        return false;
      });
    });
  }, [citizens, searchTerm]);

  const handleRowClick = (params: any) => {
    const citizenId = params.row.id;
    navigate(`/user-profile/${citizenId}`);
  }
  const handleAddNowClick = () => {
    navigate('/Datagrid/create-user/');
  };

  const Container = styled('div')`
  position: relative;
  height: 100vh;
`;
  const BodyContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;
const ButtonContainer = styled('div')`
  position: sticky;
  bottom: 1.5rem;
  left: 100rem;
  z-index: 999;
  '@media (max-width: 600px)': {
    bottom: 1.5rem;
  },
`;
  

  return (
    <>
 <Navbar updateSearchTerm={updateSearchTerm} burger ={true}/>
 <Container>
 <BodyContainer>
<SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
<div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ height: 'calc(100% - 40px)', width: '100%', margin: 'auto', marginBottom: '20px' }}>
        <DataGrid
          rows={filteredCitizens}
          columns={visibleColumns}
          sx={{
            '& .MuiDataGrid-cell': {
              overflow: 'visible',
              whiteSpace: 'normal',
              wordWrap: 'break-word',
            },
            '& .MuiDataGrid-cell:hover': {
              color: 'darkblue',
            },
            '& .MuiDataGrid-root': {
              minHeight: '200px',
              width: '100%',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              '@media (max-width: 600px)': {
                boxShadow: 'none',
                border: '1px solid #ccc',
                borderRadius: '4px',
              },
            },
          }}
          onRowClick={handleRowClick}
          autoHeight
        />
      </div>
    </div>
    <ButtonContainer>
        <Button variant="contained" onClick={handleAddNowClick} sx={{
          py: 2,
          fontSize: '2rem',
          padding:0,
          borderRadius: '50%'
        }}>+</Button>
      </ButtonContainer>
    </BodyContainer>
    <Footer/>
    </Container>
    
    </>
  );
};

export default DataPageGrid;