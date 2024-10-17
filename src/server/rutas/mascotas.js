const express = require('express');
const router = express.Router();

// Importamos controlador
const controladorMascota = require('../controladores/mascotasControlador');

// Definición de rutas
router.get('/', controladorMascota.getAllMascotas);
router.get('/:id', controladorMascota.getMascotaById);
router.post('/', controladorMascota.crearMascotas); 
router.put('/:id', controladorMascota.actualizarMascota);
router.delete('/:id', controladorMascota.eliminarMascota);

// Exportar el router
module.exports = router;

