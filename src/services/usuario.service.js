const Usuario = require('../models/usuario.model');
const {encriptarPassword} = require("../utils/bcrypt");

const crearUsuario = async ( data ) => {
    const existeCorreo = await Usuario.findOne({where: {correo: data.correo}});
    if (existeCorreo){
        throw new Error('Correo ya registrado');
    }
    data.password = await encriptarPassword(data.password);
    return await Usuario.create(data); 
};

const listarUsuarios = async () => {
    return await Usuario.findAll({
        attributes:{exclude: ['password']}
    });
};

module.exports = {
    crearUsuario,
    listarUsuarios
};