//rutas aerolinea

const express = require('express')
const aerolineaController=require('../controllers/aerolineaController')
const router = express.Router()

router.post('/',aerolineaController.crearAerolinea)
router.get('/', aerolineaController.obtenerAerolineas)
router.put('/:id', aerolineaController.actualizarAerolineas)
router.get('/:id', aerolineaController.obtenerAerolinea)
router.delete('/:id', aerolineaController.eliminarAerolinea)


module.exports = router;