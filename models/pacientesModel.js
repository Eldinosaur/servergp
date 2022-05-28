const mongoose = require('mongoose')
const PacienteSchema = mongoose.Schema({
    cedula:{
        type:String,
        required:true
    },
    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    fechanacimiento:{
        type:Date,
        required:true
    },
    celular:{
        type:String,
        required:true
    },
    correo:{
        type:String,
        required:true
    },
    creationDate:{
        type:Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('paciente',PacienteSchema)