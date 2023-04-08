import React from 'react';
import './App.css';
import { Login, Dashboard , CreateUser } from './pages';
import { Route, Routes, redirect } from 'react-router-dom';
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
        

      </Routes>
    
    </>
  );
}

export default App;
