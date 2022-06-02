//Rutas para el modulo Consultas
const express = require('express')
const router = express.Router()
const consultasController = require('../controllers/consultasController')

//api/consultas
router.post('/', consultasController.addConsulta)
router.get('/', consultasController.loadConsultas)
router.get('/:id', consultasController.loadConsulta)
router.put('/:id', consultasController.updateConsulta)
router.delete('/:id', consultasController.deleteConsulta)

module.exports = router