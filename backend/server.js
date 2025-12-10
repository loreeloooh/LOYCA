require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/users.routes');

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Puerto de Vite por defecto
  credentials: true
}));
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Ruta raíz
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API' });
});

// Ruta de la API
app.get('/api', (req, res) => {
  res.json({ message: 'Bienvenido a la API' });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});