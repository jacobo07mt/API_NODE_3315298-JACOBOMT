const institucionService=require('../services/institucion.service');
const {successResponse,errorResponse}=require('../utils/response');
const { actualizar } = require('./usuario.controller');
const crear = async(req,res)=>{
    try{
        const data=await institucionService.crearInstitucion(req.body);
        return successResponse(res,data,'Institucion creada',201);
    }
    catch(error){
        return errorResponse(res,error.message);
    }
};
const listar = async(req,res)=>{
    try{
        const data= await institucionService.listarInstitucion();
        return successResponse(res,data);
    }catch(error){
        return errorResponse(res,error.message);
    }
};
const buscarPorId = async(req,res)=>{
    try{
        const id= await institucionService.buscarInstitucion(req.params.id);
        return successResponse(res,id);
    }catch(error){
        return errorResponse(res,error.message);
    }
};
const buscar= async(req,res)=>{
    try{
    const data=await institucionService.actualizarInstitucion(data,req.params.id);
    return successResponse(res,id);
    }catch(error){
        return errorResponse(res,error.message);

    }
    
};

module.exports ={
    crear,
    listar,
    buscar,
    actualizar

}

