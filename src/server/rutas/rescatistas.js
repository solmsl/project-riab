const express = require('express');
const router = express.Router();

//importamos el controlador
const resController = require('../controladores/rescatistasControlador');

//importamos middleware
const autorizar = require('../middlewares/auth');

/**rutas con middleware */
router.get('/', resController.obtenerTodos);
router.get('/:dni', autorizar.verificacion, resController.obtener);
router.put('/:dni', autorizar.verificacion, resController.actualizar);
router.delete('/:dni', autorizar.verificacion, resController.borrar);

router.post('/registro', resController.crear);

router.post('/login', resController.login);
router.post('/logout', autorizar.verificacion, resController.logout);

module.exports = router