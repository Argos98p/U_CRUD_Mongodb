const express = require('express');
const conectarDB=require('./config/db')
const app=express()
const cors=require('cors')


conectarDB();
app.use(cors())
app.use(express.json())
app.use('/api/aerolinea',require('./routes/aerolinea'))
app.use('/api/aeropuerto',require('./routes/aeropuerto'))
app.use('/api/avion',require('./routes/avion'))
app.listen(4000,()=>{
    console.log('Server works');
})