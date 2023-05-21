import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Page404.css';

const Error404 = () => {
	const navigate = useNavigate();

	const handleDashboardClick = () => {
		navigate('./Dashboard.tsx');
	};

	const handleMainMenuClick = () => {
		navigate('./MainMenu.tsx');
	};

	return (
		<div className='page-404-container'>
			<h1>404 Error: Page Not Found</h1>
			<p>We're sorry, the page you requested could not be found.</p>
			<div>
				<button onClick={handleDashboardClick}>Go to Dashboard</button>
				<button onClick={handleMainMenuClick}>Go to Main Menu</button>
			</div>
		</div>
	);
};

export default Error404;
