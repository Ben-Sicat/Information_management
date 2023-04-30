import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { config } from './config/config';
import { Login, Dashboard, CreateUser, Main, About, UserProfile } from './pages';
import AuthRoute from './components/AuthRoute';

export const Firebase = initializeApp(config.firebaseConfig);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/main-menu" element={<AuthRoute><Main /></AuthRoute>} />
      <Route path="/dashboard/" element={<AuthRoute><Dashboard /></AuthRoute>} />
      <Route path="/dashboard/create-user/:userId?" element={<AuthRoute><CreateUser /></AuthRoute>} />
      <Route path="/about" element={<About />} />
      <Route path="/user-profile/:userId" element={<UserProfile />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}

export default App;
