//Rutas para el modulo Paciente
const express = require('express')
const router = express.Router()
const pacientesController = require('../controllers/pacientesController')

//api/pacientes
router.post('/', pacientesController.addPaciente)
router.get('/', pacientesController.loadPacientes)
router.get('/:id', pacientesController.loadPaciente)
router.put('/:id', pacientesController.updatePaciente)
router.delete('/:id', pacientesController.deletePaciente)

module.exports = router