const mongoose=require('mongoose')
const aeropuertoSchema= mongoose.Schema({
    airport:{
        type:String,
        required:false
    },
    city:{
        type:String,
        required:false
    },
    country:{
        type:String,
        required:false
    },
    iata:{
        type:String,
        required:false
    },
    lat:{
        type:String,
        required:false
    },
    long:{
        type:String,
        required:false
    },
    state:{
        type:String,
        required:false
    },


}, { collection: 'airports' },{database:'vuelos'});

module.exports=mongoose.model('Aeropuerto',aeropuertoSchema);