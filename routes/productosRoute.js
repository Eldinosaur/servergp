//Rutas para el modulo Agencia
const express = require('express')
const router = express.Router()
const productosController = require('../controllers/productosController')

//api/agencias
router.post('/', productosController.addProducto)
router.get('/', productosController.loadProductos)
router.get('/:id', productosController.loadProducto)
router.put('/:id', productosController.updateProducto)
router.delete('/:id', productosController.deleteProducto)

module.exports = router