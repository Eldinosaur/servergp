const Venta = require ('../models/ventasModel')

exports.addVenta = async(request, response) => {
    try{
        let venta
        venta = new Venta(request.body)
        await venta.save()
        response.send(venta)

    }catch(error){
        console.log(error)
        response.status(500).send('Error al insertar el registro')
    }
}

exports.loadVentas = async(request, response) => {
    try{
        const ventas = await Venta.find()
        response.json(ventas)

    }catch(error){
        console.log(error)
        response.status(500).send('Error al cargar los registros')
    }
}

exports.loadVenta = async(request, response) => {
    try{
        let venta = await Venta.findById(request.params.id)
        if(!venta){
         response.status(500).send('No existe la agencia')
        }
        response.json(venta)
 
     }catch(error){
         console.log(error)
         response.status(500).send('Error al cargar el registro')
     }
}

exports.updateVenta = async(request, response) => {
    try{
        const {cedula,nombre,apellido,descripcion,monto} = request.body
        let venta = await Venta.findById(request.params.id)
        if(!venta){
            response.status(500).send('No existe la agencia')
        }
        venta.cedula = cedula
        venta.nombre = nombre
        venta.apellido = apellido
        venta.descripcion = descripcion
        venta.monto = monto
        venta = await Venta.findOneAndUpdate({_id: request.params.id},venta, {new:true})
        response.json(venta)
    }catch(error){
        console.log(error)
        response.status(500).send('Error al actualizar el registro')
    }
}

exports.deleteVenta = async(request, response) => {
    try{
        let venta = await Venta.findById(request.params.id)
        if(!venta){
         response.status(500).send('No existe la agencia')
        }
        await Venta.findOneAndRemove({_id: request.params.id})
        response.json({msg: 'Agencia Eliminada'})
 
     }catch(error){
         console.log(error)
         response.status(500).send('Error al eliminar el registro')
     }
}