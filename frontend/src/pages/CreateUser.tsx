import React, { useState, ChangeEvent, useEffect } from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';
import {
	Container,
	Grid,
	MenuItem,
	TextField,
	Typography,
} from '@mui/material';
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
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
	required?: boolean;
}

const fields: Field[] = [
	// field definitions...
	{ label: 'Last Name', name: 'lastName', required: true },
	{ label: 'First Name', name: 'firstName', required: true },
	{ label: 'Middle Name', name: 'middleName', required: true },
	{ label: 'Suffix', name: 'suffix', required: true },
	{ label: 'Age', name: 'age', type: 'number', required: true },
	{ label: 'Birth Month', name: 'birthMonth', required: true, 
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
	{ label: 'Birth Day', name: 'birthDay', required: true },
	{ label: 'Birth Year', name: 'birthYear', required: true },
	{ label: 'Building Number', name: 'bldgNo', required: true,
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
		required: true,
	},
	
	{
		label: 'District Number',
		name: 'districtNo',
		defaultValue: '5',
		required: true,
	},
	{ label: 'District Name', name: 'districtName', required: true },
	{ label: 'Zone', name: 'zone', defaultValue: '72', required: true },
	{
		label: 'Gender',
		name: 'gender',
		options: ['Male', 'Female', 'Other'],
		required: true,
	},
	{
		label: 'Civil Status',
		name: 'civilstatus',
		options: ['Single', 'Married', 'Divorced', 'Widowed'],
		required: true,
	},
	{ label: 'Voter', name: 'voter', options: ['Yes', 'No'], required: true },
	{
		label: 'Status',
		name: 'status',
		options: ['Active', 'Inactive', 'Deceased', 'Bedridden'],
		required: true,
	},
	{ label: 'Email', name: 'email', required: true },
	{ label: 'Contact Number', name: 'contactNumber', required: true },
	
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
    // Fetch the user data from the database based on the userId
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
  }, [userId]);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setUser((prevUser) => ({
			...prevUser,
			[name]: value || 'N/A',
		}));
	};

	const handleSubmit = async () => {
		try {
		  const requiredFields = fields.filter((field) => field.required);
		  const missingFields = requiredFields.filter((field) => !editedUser[field.name]);
		  if (missingFields.length > 0) {
			console.error(`Missing required fields: ${missingFields.map((field) => field.label).join(', ')}`);
			return;
		  }
	
		  const userDoc = doc(userCollectionRef, userId);
		  await setDoc(userDoc, editedUser);
		  console.log('User updated successfully!');
		  setUser(editedUser);
		} catch (error) {
		  console.error('Error updating user:', error);
		}
		navigate('/dashboard');
	  };

	return (
		<Container maxWidth="xl" sx={{
			marginTop: '20px',
			marginBottom: '20px',
			padding: '20px',
			border: '1px solid #ccc',
			borderRadius: '5px',
			boxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)',
			width: '100%',
			maxWidth: '600px',
		}}>
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
          <button onClick={handleSubmit}>{buttonTitle}</button>
        </Grid>
      </Grid>
    </Container>
	);
};

export default AddProfile;
