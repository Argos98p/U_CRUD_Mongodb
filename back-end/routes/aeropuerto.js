
const express = require('express')
const aeropuertoController=require('../controllers/aeropuertoController')
const router = express.Router()

router.post('/',aeropuertoController.crearAeropuerto)
router.get('/', aeropuertoController.obtenerAeropuertos)
router.put('/:id', aeropuertoController.actualizarAeropuertos)
router.get('/:id', aeropuertoController.obtenerAeropuerto)
router.delete('/:id', aeropuertoController.eliminarAeropuerto)


module.exports = router;