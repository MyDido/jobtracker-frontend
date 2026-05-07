// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';  // ← AJOUTER CETTE LIGNE
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddCandidature from './pages/AddCandidature';
import PrivateRoute from './components/PrivateRoute';
import authService from './services/authService';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route page d'accueil */}
        <Route path="/" element={<Home />} />  {/* ← AJOUTER CETTE LIGNE */}

        {/* Route publique : Login */}
        <Route 
          path="/login" 
          element={
            authService.isAuthenticated() ? 
              <Navigate to="/dashboard" replace /> : 
              <Login />
          } 
        />

        {/* Routes protégées */}
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } 
        />

        <Route 
          path="/add" 
          element={
            <PrivateRoute>
              <AddCandidature />
            </PrivateRoute>
          } 
        />

        <Route 
          path="/edit/:id" 
          element={
            <PrivateRoute>
              <AddCandidature />
            </PrivateRoute>
          } 
        />

        {/* Route 404 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;