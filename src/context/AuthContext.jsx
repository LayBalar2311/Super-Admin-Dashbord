// src/context/AuthContext.jsx
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser({
      id: userData.id,
      name: userData.name, // Added name
      role: userData.role,
      email: userData.email,
      permissions: {
        pages: userData.permissions?.pages || [],
        stores: userData.permissions?.stores || [],
      },
    });
  };

  const logout = () => setUser(null);

  const hasPageAccess = (page) => {
    if (!user) return false;
    if (user.role === 'admin') return true;
    return user.permissions.pages.includes(page);
  };

  const hasStoreAccess = (store) => {
    if (!user) return false;
    if (user.role === 'admin') return true;
    return (
      user.permissions.stores.includes(store.id) ||
      user.permissions.stores.includes(store.city)
    );
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, hasPageAccess, hasStoreAccess }}>
      {children}
    </AuthContext.Provider>
  );
};