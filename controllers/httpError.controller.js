// Importa los módulos necesarios
const express = require('express');

// Crea una instancia del router de Express
const router = express.Router();

// Controlador para el error 404
router.use((req, res) => {
  res.status(404).render('error', {
    title: 'Error 404 - Página no encontrada',
    message: 'La página que estás buscando no existe.'
  });
});

// Controlador para otros errores
router.use((err, req, res, next) => {
  // Puedes personalizar este controlador para diferentes tipos de errores
  res.status(500).render('error', {
    title: 'Error en el servidor',
    message: 'Ha ocurrido un error en el servidor. Por favor, intenta nuevamente más tarde.'
  });
});

// Exporta el módulo del controlador
module.exports = router;

