const Optometra = require ('../models/optometrasModel')

exports.addOptometra = async(request, response) => {
    try{
        let optometra
        optometra = new Optometra(request.body)
        await optometra.save()
        response.send(optometra)

    }catch(error){
        console.log(error)
        response.status(500).send('Error al insertar el registro')
    }
}

exports.loadOptometras = async(request, response) => {
    try{
        const optometras = await optometra.find()
        response.json(optometras)

    }catch(error){
        console.log(error)
        response.status(500).send('Error al cargar los registros')
    }
}

exports.loadOptometra = async(request, response) => {
    try{
        let optometra = await Optometra.findById(request.params.id)
        if(!optometra){
         response.status(500).send('No existe el ooptómetra')
        }
        response.json(optometra)
 
     }catch(error){
         console.log(error)
         response.status(500).send('Error al cargar el registro')
     }
}

exports.updateOptometra = async(request, response) => {
    try{
        const {cedula,nombre,apellido,correo} = request.body
        let optometra = await Optometra.findById(request.params.id)
        if(!optometra){
            response.status(500).send('No existe el optómetra')
        }
        optometra.cedula = cedula
        optometra.nombre = nombre
        optometra.apellido = apellido
        optometra.correo = correo
        optometra = await Optometra.findOneAndUpdate({_id: request.params.id},optometra, {new:true})
        response.json(optometra)
    }catch(error){
        console.log(error)
        response.status(500).send('Error al actualizar el registro')
    }
}

exports.deleteOptometra = async(request, response) => {
    try{
        let optometra = await Optometra.findById(request.params.id)
        if(!optometra){
         response.status(500).send('No existe la agencia')
        }
        await optometra.findOneAndRemove({_id: request.params.id})
        response.json({msg: 'Optómetra Eliminado'})
 
     }catch(error){
         console.log(error)
         response.status(500).send('Error al eliminar el registro')
     }
}