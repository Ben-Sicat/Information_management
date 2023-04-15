import React from 'react';
import './App.css';
import { Login, Dashboard , CreateUser, Registration } from './pages';
import { Route, Routes } from 'react-router-dom';
import {initializeApp} from 'firebase/app';
import { config } from './config/config';
import AuthRoute from './components/AuthRoute';

export const Firebase = initializeApp(config.firebaseConfig)

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<AuthRoute><Dashboard /></AuthRoute>} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="*" element={<h1>404</h1>} />
        <Route path = "/signup" element = {<Registration />} />
        

      </Routes>
    
    </>
  );
}

export default App;
