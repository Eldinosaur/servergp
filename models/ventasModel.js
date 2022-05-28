const mongoose = require('mongoose')
const VentaSchema = mongoose.Schema({
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
    descripcion:{
        type:String,
        required:true
    },
    monto:{
        type:Number,
        required:true
    },
    creationDate:{
        type:Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('venta',VentaSchema)