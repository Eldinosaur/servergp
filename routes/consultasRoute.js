//Rutas para el modulo Agencia
const express = require('express')
const router = express.Router()
const consultasController = require('../controllers/consultasController')

//api/agencias
router.post('/', consultasController.addConsulta)
router.get('/', consultasController.loadConsultas)
router.get('/:id', consultasController.loadconsulta)
router.put('/:id', consultasController.updateConsulta)
router.delete('/:id', consultasController.deleteConsulta)

module.exports = router