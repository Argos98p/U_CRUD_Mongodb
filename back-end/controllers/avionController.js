const Avion = require("../models/Avion");

exports.crearAvion = async (req,res)=>{
    try {
        let avion;
        avion = new Avion(req.body)
        await avion.save();
        res.send(avion)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }

}

exports.obtenerAviones= async (req,res)=>{
    try {
        const aviones= await Avion.find();
        res.json(aviones)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
        
    }
}

exports.actualizarAviones= async (req,res)=>{
    try {
        const { Code,Description} = req.body;

        let avion = await Avion.findById(req.params.id);

        if(!avion){
            res.status(404).json({msg:"no existe la aeroliena"})
        }

        avion.Code=Code;
        avion.Description=Description;

        avion=await Avion.findOneAndUpdate({_id:req.params.id},avion,{new:true})
        res.json(avion);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
        
    }
}

exports.obtenerAvion= async (req,res)=>{
    try {
        let avion = await Avion.findById(req.params.id);

        if(!avion){
            res.status(404).json({msg:"no existe la avion"})
        }

        res.json(avion);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
        
    }
}


exports.eliminarAvion= async (req,res)=>{
    try {
        let avion = await Avion.findById(req.params.id);

        if(!avion){
            res.status(404).json({msg:"no existe la avion"})
        }

        await Avion.findOneAndRemove({_id:req.params.id})
        res.json({msg:"producto eliminado con exito"})
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
        
    }
}