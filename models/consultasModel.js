const mongoose = require('mongoose')
const ConsultaSchema = mongoose.Schema({
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
    diagnostico:{
        type:String,
        required:true
    },
    creationDate:{
        type:Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('consulta',ConsultaSchema)