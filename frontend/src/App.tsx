import React from 'react';
import './App.css';
import { Login, Dashboard , CreateUser } from './pages';
import { Route, Routes, redirect } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-user" element={<CreateUser />} />

      </Routes>
    
    </>
  );
}

export default App;
