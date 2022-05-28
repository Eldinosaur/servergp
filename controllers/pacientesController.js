const Paciente = require ('../models/pacientesModel')

exports.addPaciente = async(request, response) => {
    try{
        let paciente
        paciente = new Paciente(request.body)
        await paciente.save()
        response.send(paciente)

    }catch(error){
        console.log(error)
        response.status(500).send('Error al insertar el registro')
    }
}

exports.loadPacientes = async(request, response) => {
    try{
        const pacientes = await Paciente.find()
        response.json(pacientes)

    }catch(error){
        console.log(error)
        response.status(500).send('Error al cargar los registros')
    }
}

exports.loadPaciente = async(request, response) => {
    try{
        let paciente = await Paciente.findById(request.params.id)
        if(!paciente){
         response.status(500).send('No existe la agencia')
        }
        response.json(paciente)
 
     }catch(error){
         console.log(error)
         response.status(500).send('Error al cargar el registro')
     }
}

exports.updatePaciente = async(request, response) => {
    try{
        const {cedula,nombre,apellido,fechanacimiento,celular,correo} = request.body
        let paciente = await Paciente.findById(request.params.id)
        if(!paciente){
            response.status(500).send('No existe la agencia')
        }
        paciente.cedula = cedula
        paciente.nombre = nombre
        paciente.apellido = apellido
        paciente.fechanacimiento = fechanacimiento
        paciente.celular = celular
        paciente.correo = correo
        paciente = await Paciente.findOneAndUpdate({_id: request.params.id},paciente, {new:true})
        response.json(paciente)
    }catch(error){
        console.log(error)
        response.status(500).send('Error al actualizar el registro')
    }
}

exports.deletePaciente = async(request, response) => {
    try{
        let paciente = await Paciente.findById(request.params.id)
        if(!paciente){
         response.status(500).send('No existe la agencia')
        }
        await paciente.findOneAndRemove({_id: request.params.id})
        response.json({msg: 'Agencia Eliminada'})
 
     }catch(error){
         console.log(error)
         response.status(500).send('Error al eliminar el registro')
     }
}