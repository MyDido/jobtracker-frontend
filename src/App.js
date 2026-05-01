// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddCandidature from './pages/AddCandidature';
import PrivateRoute from './components/PrivateRoute';
import authService from './services/authService';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route publique : Login */}
        <Route 
          path="/login" 
          element={
            // Si déjà connecté, rediriger vers dashboard
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

        {/* Route par défaut : rediriger vers dashboard si connecté, sinon login */}
        <Route 
          path="/" 
          element={
            <Navigate 
              to={authService.isAuthenticated() ? "/dashboard" : "/login"} 
              replace 
            />
          } 
        />

        {/* Route 404 : toute autre URL */}
        <Route 
          path="*" 
          element={
            <Navigate 
              to={authService.isAuthenticated() ? "/dashboard" : "/login"} 
              replace 
            />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;