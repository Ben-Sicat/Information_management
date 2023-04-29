import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export interface IAuthRouteProps {
  children: React.ReactNode;
}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
  const { children } = props;
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        navigate('/dashboard');
      } else {
        navigate('/login');
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth, navigate]);

  if (loading) {
    // You can display a loading indicator here if needed
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default AuthRoute;
