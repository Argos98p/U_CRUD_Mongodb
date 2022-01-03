const Aeropuerto = require("../models/Aeropuerto");

exports.crearAeropuerto = async (req,res)=>{
    try {
        let aeropuerto;
        aeropuerto = new Aeropuerto(req.body)
        await aeropuerto.save();
        res.send(aeropuerto)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }

}

exports.obtenerAeropuertos= async (req,res)=>{
    try {
        const aeropuertos= await Aeropuerto.find();
        res.json(aeropuertos)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
        
    }
}

exports.actualizarAeropuertos= async (req,res)=>{
    try {
        const { Code,Description} = req.body;

        let aeropuerto = await Aeropuerto.findById(req.params.id);

        if(!aeropuerto){
            res.status(404).json({msg:"no existe la aeroliena"})
        }

        aeropuerto.Code=Code;
        aeropuerto.Description=Description;

        aeropuerto=await Aeropuerto.findOneAndUpdate({_id:req.params.id},aeropuerto,{new:true})
        res.json(aeropuerto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
        
    }
}

exports.obtenerAeropuerto= async (req,res)=>{
    try {
        let aeropuerto = await Aeropuerto.findById(req.params.id);

        if(!aeropuerto){
            res.status(404).json({msg:"no existe la aeropuerto"})
        }

        res.json(aeropuerto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
        
    }
}


exports.eliminarAeropuerto= async (req,res)=>{
    try {
        let aeropuerto = await Aeropuerto.findById(req.params.id);

        if(!aeropuerto){
            res.status(404).json({msg:"no existe la aeropuerto"})
        }

        await Aeropuerto.findOneAndRemove({_id:req.params.id})
        res.json({msg:"producto eliminado con exito"})
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
        
    }
}