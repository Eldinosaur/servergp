const Consulta = require ('../models/consultasModel')

exports.addConsulta = async(request, response) => {
    try{
        let consulta
        consulta = new Consulta(request.body)
        await consulta.save()
        response.send(consulta)

    }catch(error){
        console.log(error)
        response.status(500).send('Error al insertar el registro')
    }
}

exports.loadConsultas = async(request, response) => {
    try{
        const consultas = await Consulta.find()
        response.json(consultas)

    }catch(error){
        console.log(error)
        response.status(500).send('Error al cargar los registros')
    }
}

exports.loadConsulta = async(request, response) => {
    try{
        let consulta = await Consulta.findById(request.params.id)
        if(!consulta){
         response.status(500).send('No existe la agencia')
        }
        response.json(consulta)
 
     }catch(error){
         console.log(error)
         response.status(500).send('Error al cargar el registro')
     }
}

exports.updateConsulta = async(request, response) => {
    try{
        const {cedula,nombre,apellido,diagnostico} = request.body
        let consulta = await Consulta.findById(request.params.id)
        if(!consulta){
            response.status(500).send('No existe la agencia')
        }
        consulta.cedula = cedula
        consulta.nombre = nombre
        consulta.apellido = apellido
        consulta.diagnostico = diagnostico
        consulta = await Consulta.findOneAndUpdate({_id: request.params.id},consulta, {new:true})
        response.json(consulta)
    }catch(error){
        console.log(error)
        response.status(500).send('Error al actualizar el registro')
    }
}

exports.deleteConsulta = async(request, response) => {
    try{
        let consulta = await Consulta.findById(request.params.id)
        if(!consulta){
         response.status(500).send('No existe la agencia')
        }
        await Consulta.findOneAndRemove({_id: request.params.id})
        response.json({msg: 'Agencia Eliminada'})
 
     }catch(error){
         console.log(error)
         response.status(500).send('Error al eliminar el registro')
     }
}