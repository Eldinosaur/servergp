//Rutas para el modulo Optometras
const express = require('express')
const router = express.Router()
const optometrasController = require('../controllers/optometrasController')

//api/optometras
router.post('/', optometrasController.addOptometra)
router.get('/', optometrasController.loadOptometras)
router.get('/:id', optometrasController.loadOptometra)
router.put('/:id', optometrasController.updateOptometra)
router.delete('/:id', optometrasController.deleteOptometra)

module.exports = router