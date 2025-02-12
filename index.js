const express = require('express');
require('dotenv').config();

// Crear el servidor de express
const app = express();

// Servir directorio público
app.use(express.static('public'));

// Middleware de rutas
app.use('/api/auth',  require("./routes/auth"));

// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
