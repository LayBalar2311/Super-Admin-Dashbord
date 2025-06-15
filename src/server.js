// server.js (example)
const express = require('express');
const app = express();

app.use(express.json());

// Middleware to verify user and extract permissions
const authMiddleware = (req, res, next) => {
  // Assume JWT token verification
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  // Mock user data (replace with actual token decoding)
  req.user = {
    id: 1,
    role: 'employee',
    permissions: { stores: [1, 2] },
  }; // For admins: { role: 'admin', permissions: { stores: 'all' } }
  next();
};

app.get('/api/stores', authMiddleware, (req, res) => {
  // Mock store data
  const allStores = [
    { id: 1, name: 'Janta Supermart', location: 'Pune', status: 'Active' },
    { id: 2, name: 'TechTrend Electronics', location: 'Mumbai', status: 'Active' },
    { id: 3, name: 'Fashion Hub', location: 'Delhi', status: 'Pending' },
  ];

  const { role, permissions } = req.user;
  const accessibleStores = role === 'admin' 
    ? allStores 
    : allStores.filter(store => permissions.stores.includes(store.id));

  res.json(accessibleStores);
});

app.listen(3000, () => console.log('Server running on port 3000'));