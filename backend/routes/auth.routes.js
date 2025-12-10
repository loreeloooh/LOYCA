const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// @route   POST /api/auth/register
router.post('/register', async (req, res) => {
  console.log('Solicitud de registro recibida:', req.body);
  
  try {
    const { username, email, password } = req.body;
    
    // Validar campos requeridos
    if (!username || !email || !password) {
      console.log('Faltan campos requeridos');
      return res.status(400).json({ 
        success: false,
        message: 'Por favor, proporcione nombre de usuario, correo electrónico y contraseña' 
      });
    }

    console.log('Buscando usuario existente...');
    let user = await User.findOne({ email });
    if (user) {
      console.log('Usuario ya existe:', user.email);
      return res.status(400).json({ 
        success: false,
        message: 'El usuario ya existe' 
      });
    }

    console.log('Creando nuevo usuario...');
    user = new User({ 
      username: username.trim(),
      email: email.toLowerCase().trim(),
      password: password
    });
    
    console.log('Guardando usuario...');
    await user.save();
    console.log('Usuario guardado exitosamente');

    const payload = { id: user.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET || 'secret', {
      expiresIn: process.env.JWT_EXPIRES_IN || '24h'
    });

    console.log('Usuario registrado exitosamente');
    res.status(201).json({ 
      success: true,
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    console.error('Error en el registro:', err);
    res.status(500).json({ 
      success: false,
      message: 'Error en el servidor',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
});

// @route   POST /api/auth/login
router.post('/login', async (req, res) => {
  console.log('Solicitud de inicio de sesión recibida:', req.body.email);
  
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Por favor proporcione correo electrónico y contraseña'
      });
    }

    console.log('Buscando usuario...');
    const user = await User.findOne({ email: email.toLowerCase().trim() });
    
    if (!user) {
      console.log('Usuario no encontrado');
      return res.status(400).json({ 
        success: false,
        message: 'Credenciales inválidas' 
      });
    }

    console.log('Verificando contraseña...');
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      console.log('Contraseña incorrecta');
      return res.status(400).json({ 
        success: false,
        message: 'Credenciales inválidas' 
      });
    }

    const payload = { id: user.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET || 'secret', {
      expiresIn: process.env.JWT_EXPIRES_IN || '24h'
    });

    console.log('Inicio de sesión exitoso');
    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    console.error('Error en el inicio de sesión:', err);
    res.status(500).json({ 
      success: false,
      message: 'Error en el servidor',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
});

module.exports = router;