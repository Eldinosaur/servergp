const mongoose = require('mongoose')
const ProductoSchema = mongoose.Schema({
    codigo:{
        type:String,
        required:true
    },
    nombre:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    creationDate:{
        type:Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('producto',ProductoSchema)