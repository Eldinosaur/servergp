const Producto = require ('../models/productosModel')

exports.addProducto = async(request, response) => {
    try{
        let producto
        producto = new Producto(request.body)
        await producto.save()
        response.send(producto)

    }catch(error){
        console.log(error)
        response.status(500).send('Error al insertar el registro')
    }
}

exports.loadProductos = async(request, response) => {
    try{
        const productos = await Producto.find()
        response.json(productos)

    }catch(error){
        console.log(error)
        response.status(500).send('Error al cargar los registros')
    }
}

exports.loadProducto = async(request, response) => {
    try{
        let producto = await Producto.findById(request.params.id)
        if(!producto){
         response.status(500).send('No existe la agencia')
        }
        response.json(producto)
 
     }catch(error){
         console.log(error)
         response.status(500).send('Error al cargar el registro')
     }
}

exports.updateProducto = async(request, response) => {
    try{
        const {codigo,nombre,descripciom} = request.body
        let producto = await Producto.findById(request.params.id)
        if(!producto){
            response.status(500).send('No existe la agencia')
        }
        producto.codigo = codigo
        producto.nombre = nombre
        producto.descripcion = descripcion
        producto = await producto.findOneAndUpdate({_id: request.params.id},producto, {new:true})
        response.json(producto)
    }catch(error){
        console.log(error)
        response.status(500).send('Error al actualizar el registro')
    }
}

exports.deleteProducto = async(request, response) => {
    try{
        let producto = await Producto.findById(request.params.id)
        if(!producto){
         response.status(500).send('No existe la agencia')
        }
        await Producto.findOneAndRemove({_id: request.params.id})
        response.json({msg: 'Agencia Eliminada'})
 
     }catch(error){
         console.log(error)
         response.status(500).send('Error al eliminar el registro')
     }
}