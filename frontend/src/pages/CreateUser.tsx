import React, { useState, ChangeEvent, useEffect } from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';
import { Navbar, Footer } from '../components';
import '../styles/globalStyles.css';
import {

	Button,
	Container,
	Grid,
	MenuItem,
	TextField,
	Typography,
} from '@mui/material';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase-config';

interface User {
	[key: string]: string;
}

interface Field {
	label: string;
	name: string;
	type?: string;
	options?: string[];
	defaultValue?: string;

}

const fields: Field[] = [
	// field definitions...
	{ label: 'Last Name', name: 'lastName' },
	{ label: 'First Name', name: 'firstName' },
	{ label: 'Middle Name', name: 'middleName' },
	{ label: 'Suffix', name: 'suffix' },
	{ label: 'Age', name: 'age', type: 'number' },
	{ label: 'Birth Month', name: 'birthMonth', 
	options:[
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',

	] },
	{ label: 'Birth Day', name: 'birthDay' },
	{ label: 'Birth Year', name: 'birthYear' },
	{ label: 'Building Number', name: 'bldgNo',
		options:[
			
		]
},
	{
		label: 'Street Name',
		name: 'streetName',
		options: [
			'JORGE BOCOBO ST.',
			'ARKANSAS ST.',
			'MA. OROSA ST.',
			'PADRE FAURA ST.',
			'526 U. N. Ave. cor. A. Mabini St.',
			'A. FLORES ST.',
			'U.N. AVE.',
			'A. MABINI ST.',
			'A. FLORES ST.',
			'PADRE FAURA ST.',
			'GREY ST.',
			'ARQUIZA ST.',
			'A. MABINI ST. COR. UN. AVE.',
			'NBI COMPOUND UN AVE.',
		],

	},
	
	{
		label: 'District Number',
		name: 'districtNo',
		defaultValue: '5',

	},
	{ label: 'District Name', name: 'districtName' },
	{ label: 'Zone', name: 'zone', defaultValue: '72' },
	{
		label: 'Gender',
		name: 'gender',
		options: ['Male', 'Female', 'Other'],

	},
	{
		label: 'Civil Status',
		name: 'civilstatus',
		options: ['Single', 'Married', 'Divorced', 'Widowed'],

	},
	{ label: 'Voter', name: 'voter', options: ['Yes', 'No'] },
	{
		label: 'Status',
		name: 'status',
		options: ['Active', 'Inactive', 'Deceased', 'Bedridden'],

	},
	{ label: 'Email', name: 'email' },
	{ label: 'Contact Number', name: 'contactNumber' },
	
];

const userCollectionRef = collection(db, 'citizens'); // Replace 'users' with your desired collection name


const AddProfile: React.FC = () => {
	const [buttonTitle, setButtonTitle] = useState('Add Profile');
	const navigate = useNavigate();
	const location = useLocation();
	const userId = location.pathname.split('/').pop();
  
	const [user, setUser] = useState<User>({});
	const [editedUser, setEditedUser] = useState<User>({ ...user });
  
	useEffect(() => {
	  if (userId) {
		const fetchUser = async () => {
		  const userDoc = doc(userCollectionRef, userId);
		  const docSnapshot = await getDoc(userDoc);
  
		  if (docSnapshot.exists()) {
			const userData = docSnapshot.data() as User;
			setUser(userData);
			setEditedUser(userData);
			setButtonTitle('Update Profile');
		  }
		};
  
		fetchUser();
	  } else {
		setButtonTitle('Add Profile');
	  }
	}, [userId]);
  
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
	  const { name, value } = e.target;
	  setEditedUser((prevUser) => ({
		...prevUser,
		[name]: value,
	  }));
	  setUser((prevUser) => ({
		...prevUser,
		[name]: value,
	  }));
	};
  
	const handleSubmit = async () => {
	  try{
		if (userId) {
			const userDoc = doc(userCollectionRef, userId);
			await setDoc(userDoc, editedUser);
		}
		else{
			const userDoc = doc(userCollectionRef);
			await setDoc(userDoc, user);
	  }
	} catch (error) {
		console.log(error);
	}
	navigate('/datagrid');
	};


  
		  
	return (
		<>
		<Navbar burger={false} updateSearchTerm={(term: string) => {}} />
		<Container  sx={{ 
			height: '100vh',
			marginTop: '15%',
			justifyContent: 'center',
			alignItems: 'center',
			'@media screen and (max-width: 899px)': {
				height: '100%',
				marginBottom: '30%'
			  },
			 }}>
		<Container maxWidth="xl" sx={{
			padding: '20px',
			border: '1px solid #ccc',
			borderRadius: '20px',
			boxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)',
			background: 'linear-gradient(to bottom, #533A71 5rem, #FFFFFF 5rem)',
			width: '100%',
			maxWidth: '600px',
		}}>
		<Typography variant="h2" align="left"  gutterBottom sx={{
			margin: '0.5rem 0rem 3.5rem',
            fontFamily: 'var(--font-family-bold)',
			fontSize: '2rem',
			fontWeight: '30px',
			color: 'var(--primary-color)'
          }}>
            ADD DATA
        </Typography>
      {/* Render the form fields */}
      <Grid container spacing={2}>
        {fields.map((field) => (
          <Grid item xs={10} md={3} key={field.name}>
            {field.options ? (
              <TextField
                select
                label={field.label}
                name={field.name}
                value={editedUser[field.name] || ''}
                onChange={handleInputChange}
                fullWidth
              >
                {field.options.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            ) : (
              <TextField
                label={field.label}
                name={field.name}
                value={editedUser[field.name] || ''}
                onChange={handleInputChange}
                type={field.type || 'text'}
                fullWidth
              />
            )}
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleSubmit}>{buttonTitle}</Button>
        </Grid>
      </Grid>
    </Container>
	</Container>

	<Footer />

	</>
	);
};

export default AddProfile;


