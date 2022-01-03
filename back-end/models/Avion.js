const mongoose=require('mongoose')
const avionSchema= mongoose.Schema({
    aircraft_type:{
        type:String,
        required:false
    },
    engine_type:{
        type:String,
        required:false
    },
    issue_date:{
        type:String,
        required:false
    },
    engine_type:{
        type:String,
        required:false
    },
    manufacturer:{
        type:String,
        required:false
    },
    model:{
        type:String,
        required:false
    },
    status:{
        type:String,
        required:false
    },
    tailnum:{
        type:String,
        required:false
    },
    type:{
        type:String,
        required:false
    },
    year:{
        type:String,
        required:false
    },

}, { collection: 'plane_data' },{database:'vuelos'});




module.exports=mongoose.model('Avion',avionSchema);