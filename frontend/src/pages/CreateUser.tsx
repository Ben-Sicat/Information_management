import React, { useState, ChangeEvent } from 'react';
import {
	Container,
	Grid,
	MenuItem,
	TextField,
	Typography,
} from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
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
	{ label: 'Birth Month', name: 'birthMonth', required: true },
	{ label: 'Birth Day', name: 'birthDay', required: true },
	{ label: 'Birth Year', name: 'birthYear', required: true },
	{ label: 'Building Number', name: 'bldgNo', required: true },
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
	const [user, setUser] = useState<User>({});

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
			const missingFields = requiredFields.filter((field) => !user[field.name]);
			if (missingFields.length > 0) {
				console.error(
					`Missing required fields: ${missingFields
						.map((field) => field.label)
						.join(', ')}`

					// add styling for errors here
					
				);
				return;
			}

			await addDoc(userCollectionRef, user);
			console.log('User added successfully!');
			setUser({});
		} catch (error) {
			console.error('Error adding user:', error);
		}
	};

	return (
		<Container
			maxWidth='xl'
			sx={{
				marginTop: '20px',
				marginBottom: '20px',
				padding: '20px',
				border: '1px solid #ccc',
				borderRadius: '5px',
				boxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)',
				width: '100%',
				maxWidth: '600px',
			}}
		>
			<Typography variant='h4' component='h1' gutterBottom>
				Add Profile
			</Typography>
			<Grid container spacing={2}>
				{fields.map((field) => (
					<Grid item xs={10} md={3} key={field.name}>
						{field.options ? (
							<TextField
								select
								label={field.label}
								name={field.name}
								value={user[field.name] || ''}
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
								value={user[field.name] || ''}
								onChange={handleInputChange}
								type={field.type || 'text'}
								fullWidth
							/>
						)}
					</Grid>
				))}
				<Grid item xs={12}>
					<button onClick={handleSubmit}>Add User</button>
				</Grid>
			</Grid>
		</Container>
	);
};

export default AddProfile;
