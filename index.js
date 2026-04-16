const express = require('express');
const path = require('path');
const app = express();

// Servir carpeta "src" como estática
app.use(express.static(path.join(__dirname, 'docs')));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs/index.html'));
});

// Puerto
const PORT = 4040;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
