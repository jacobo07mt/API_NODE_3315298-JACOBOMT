const institucionRepository=require('../repositories/institucion.repostory');
const crearInstitucion=async(data)=>{
    return await institucionRepository.crear(data);

};
const listarInstituciones=async()=>{
    return await institucionRepository.listar();

};
const actualizarInstitucion=async(id,data)=>{
    return await institucionRepository.listar(id,data);

};
const buscarInstitucion=async(id)=>{
    return await institucionRepository.buscarPorId(id);

};
module.exports={
    crearInstitucion,
    listarInstituciones,
    actualizarInstitucion,
    buscarInstitucion
};

