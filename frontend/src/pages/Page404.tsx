import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page404 = () => {
	const navigate = useNavigate();

	const handleDashboardClick = () => {
		navigate('./Dashboard');
	};

	const handleMainMenuClick = () => {
		navigate('./MainMenu');
	};

	return (
		<div>
			<h1>404 Error: Page Not Found</h1>
			<p>We're sorry, the page you requested could not be found.</p>
			<div>
				<button onClick={handleDashboardClick}>Go to Dashboard</button>
				<button onClick={handleMainMenuClick}>Go to Main Menu</button>
			</div>
		</div>
	);
};

export default Page404;
