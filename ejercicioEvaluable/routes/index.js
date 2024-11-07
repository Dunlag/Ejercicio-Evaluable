// Importa el módulo de Express y crea un enrutador
var express = require('express');
var router = express.Router();

// Importa el archivo `dataprovider` que contiene los datos de los juegos
var datos = require('../data/dataprovider');

// Ruta para la página principal
// Renderiza la vista `home.ejs` y le pasa un título
router.get('/', function(req, res, next) { 
  res.render('home', {title: "Principal"});
});

// Ruta para la galería de juegos
// Llama a `getJuegos()` para obtener todos los juegos desde el dataprovider
// Renderiza la vista `juegos.ejs` y le pasa el título y los datos de juegos
router.get('/juegos', function(req, res, next) { 
  const juegos = datos.getJuegos();
  res.render('juegos', {title: "Galeria de juegos", juegos: juegos});
});

// Ruta para ver un juego específico
// Usa un parámetro de ruta (`:id`) para identificar el juego solicitado
// Llama a `getItemJuegos()` del dataprovider para obtener los detalles de un juego específico
// Renderiza la vista `juego.ejs` y le pasa el título y los datos del juego
router.get('/juegos/:id', function(req, res) {
  const juego = datos.getItemJuegos(req.params.id);
  res.render('juego', {title: 'Juego', juego: juego});
});

// Exporta el enrutador para que se pueda utilizar en el archivo principal de la aplicación (app.js)
module.exports = router;
