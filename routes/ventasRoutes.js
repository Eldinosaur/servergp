//Rutas para el modulo Agencia
const express = require('express')
const router = express.Router()
const ventasController = require('../controllers/ventasController')

//api/agencias
router.post('/', ventasController.addVenta)
router.get('/', ventasController.loadVentas)
router.get('/:id', ventasController.loadVenta)
router.put('/:id', ventasController.updateVenta)
router.delete('/:id', ventasController.deleteVenta)

module.exports = router