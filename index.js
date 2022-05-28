const express = require('express')
const conectarDB = require('./config/db')
const cors = require('cors')

//crear el servidor
const app = express()

//colectar BD
conectarDB()
app.use(express.json())
app.use(cors())

/*app.use('/api/consultas', require('./routes/consultasRoute'))
app.use('/api/optometras', require('./routes/optometrasRoute'))
app.use('/api/pacientes', require('./routes/pacientesRoute'))
app.use('/api/productos', require('./routes/productosRoute'))
app.use('/api/ventas', require('./routes/ventasRoute'))*/

const port = process.env.PORT  || 8000

//Ruta inicial del servidor
app.get('/',(request, response)=>{
    response.send("Server API Rest")
})

//Levantar el servidor
app.listen(port, ()=> console.log('Server listening on port', port))