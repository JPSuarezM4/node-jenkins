const express = require('express');
const app = express();
const cors = require('cors');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configuración de CORS
app.use(cors());
app.use(cors({
  origin: '*'
}))


// Rutas
const proyecto = require('./routes/proyecto');

app.use('/api/proyectos', proyecto);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error interno del servidor');
});

module.exports = app;
