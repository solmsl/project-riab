const express = require('express');
const router = express.Router();
const {
  crearMascotas,
  getAllMascotas,
  getMascotaById,
  actualizarMascota,
  eliminarMascota,
  validarMascota
} = require('../controladores/mascotasControlador');

// Rutas para mascotas
router.post('/mascotas', validarMascota, crearMascotas);
router.get('/mascotas', getAllMascotas);
router.get('/mascotas/:id', getMascotaById);
router.put('/mascotas/:id', validarMascota, actualizarMascota);
router.delete('/mascotas/:id', eliminarMascota);

module.exports = router;
