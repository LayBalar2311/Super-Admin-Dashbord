// src/components/Login.jsx
import React, { useState, useContext } from 'react';
import { AuthContext } from '../src/context/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const userData = simulateLogin(email, password);
      login(userData);
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  const simulateLogin = (email, password) => {
    const users = {
      'admin@example.com': {
        id: 'admin001',
        name: 'Admin User',
        role: 'admin',
        email: 'admin@example.com',
        permissions: { pages: [], stores: [] },
      },
      'employee1@example.com': {
        id: 'emp001',
        name: 'Rohan Sharma',
        role: 'Reviewer',
        email: 'employee1@example.com',
        permissions: {
          pages: ['Dashboard', 'User Management'],
          stores: ['s001', 'Mumbai'],
        },
      },
      'employee2@example.com': {
        id: 'emp002',
        name: 'Priya Patel',
        role: 'Reviewer',
        email: 'employee2@example.com',
        permissions: {
          pages: ['Dashboard', 'Manage Stores'],
          stores: ['s002', 'Ahmedabad'],
        },
      },
    };
    if (users[email] && password === '123') {
      return users[email];
    }
    throw new Error('Authentication failed');
  };

  return (
    <div className="flex items-center justify-center min-h-[100dvh] w-full bg-gradient-to-tr from-white to-gray-100">
      <div className="w-full max-w-md max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-8 sm:p-10">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Sign in to your account</h2>
        
        {error && (
          <div className="mb-4 text-center text-sm text-red-600 bg-red-100 p-2 rounded-lg">
            {error}
          </div>
        )}
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-black font-semibold rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Log In
            </button>
          </div>
        </form>

        <p className="mt-6 text-sm text-center text-gray-500">
          Demo login: <span className="font-medium">admin@example.com / 123</span>
        </p>
      </div>
    </div>
  );
};

export default Login;