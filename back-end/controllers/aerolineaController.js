const Aerolinea = require("../models/Aerolinea");

exports.crearAerolinea = async (req,res)=>{
    try {
        let aerolinea;
        aerolinea = new Aerolinea(req.body)
        await aerolinea.save();
        res.send(aerolinea)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }

}

exports.obtenerAerolineas= async (req,res)=>{
    try {
        const aerolineas= await Aerolinea.find();
        res.json(aerolineas)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
        
    }
}

exports.actualizarAerolineas= async (req,res)=>{
    try {
        const { Code,Description} = req.body;

        let aerolinea = await Aerolinea.findById(req.params.id);

        if(!aerolinea){
            res.status(404).json({msg:"no existe la aeroliena"})
        }

        aerolinea.Code=Code;
        aerolinea.Description=Description;

        aerolinea=await Aerolinea.findOneAndUpdate({_id:req.params.id},aerolinea,{new:true})
        res.json(aerolinea);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
        
    }
}

exports.obtenerAerolinea= async (req,res)=>{
    try {
        let aerolinea = await Aerolinea.findById(req.params.id);

        if(!aerolinea){
            res.status(404).json({msg:"no existe la aerolinea"})
        }

        res.json(aerolinea);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
        
    }
}


exports.eliminarAerolinea= async (req,res)=>{
    try {
        let aerolinea = await Aerolinea.findById(req.params.id);

        if(!aerolinea){
            res.status(404).json({msg:"no existe la aerolinea"})
        }

        await Aerolinea.findOneAndRemove({_id:req.params.id})
        res.json({msg:"producto eliminado con exito"})
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
        
    }
}