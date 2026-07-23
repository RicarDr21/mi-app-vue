const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/mensaje', (req, res) => {
  res.json({ mensaje: 'Hola Mundo' });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});