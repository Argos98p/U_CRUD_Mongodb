const express = require('express')
const avionController=require('../controllers/avionController')
const router = express.Router()

router.post('/',avionController.crearAvion)
router.get('/', avionController.obtenerAviones)
router.put('/:id', avionController.actualizarAviones)
router.get('/:id', avionController.obtenerAvion)
router.delete('/:id', avionController.eliminarAvion)


module.exports = router;