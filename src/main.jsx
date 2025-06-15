// main.jsx (for testing)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { AuthProvider } from './context/AuthContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Simulate login for testing
const simulateLogin = (role, permissions) => {
  return {
    id: role === 'admin' ? 'admin001' : 'emp001',
    role,
    email: role === 'admin' ? 'admin@example.com' : 'employee@example.com',
    permissions,
  };
};

// Example users
const adminUser = simulateLogin('admin', { pages: [], stores: [] }); // Admins have all access
const employee1 = simulateLogin('employee', {
  pages: ['Dashboard', 'Verification', 'User Management'],
  stores: ['s001', 'Mumbai'],
});
const employee2 = simulateLogin('employee', {
  pages: ['Dashboard', 'Manage Stores'],
  stores: ['s002', 'Ahmedabad'],
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        {/* Simulate login for testing */}
        <App initialUser={employee1} /> {/* Change to employee2 or adminUser for testing */}
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);