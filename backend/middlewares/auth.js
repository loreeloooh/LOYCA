const jwt = require('jsonwebtoken');
const User = require('../models/User');

const API_URL = '/api';  // Usar ruta relativa

// const auth = async (req, res, next) => {
const auth = (req, res, next) => {
  try {
    // Verificar que next sea una función
    // if (typeof next !== 'function') {
    //   console.error('Error: next no es una función');
    //   return res.status(500).json({ message: 'Error interno del servidor' });
    // }

    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // const user = await User.findById(decoded.id).select('-password');
    User.findById(decoded.id)
      .select('-password')
      .then(user => {
        if (!user) {
          return res.status(401).json({ message: 'Token is not valid' });
        }
        req.user = user;
        next();
      })
      .catch(err => {
        throw err;
      });
  } catch (err) {
    console.error('Error en middleware auth:', err);
    res.status(401).json({ message: 'Token is not valid', error: err.message });
  }
};

const isAdmin = (req, res, next) => {
  // Verificar que next sea una función
  //if (typeof next !== 'function') {
  //  console.error('Error: next no es una función en isAdmin');
  //  return res.status(500).json({ message: 'Error interno del servidor' });
  //}
  if (!req.user) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  if (req.user && req.user.role === 'admin') {
    return next();
  }
  return res.status(403).json({ message: 'Admin access required' });
};

module.exports = { auth, isAdmin };