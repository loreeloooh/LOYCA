const express = require('express');
const router = express.Router();
const { auth, isAdmin } = require('../middlewares/auth');
const User = require('../models/User');

// @route   GET /api/users
router.get('/', auth, isAdmin, async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error en el servidor');
  }
});

module.exports = router;
