const mongoose=require('mongoose')
const aerolineaSchema= mongoose.Schema({
    Code:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:false
    }
}, { collection: 'carriers' },{database:'vuelos'});



module.exports=mongoose.model('Aerolinea',aerolineaSchema);