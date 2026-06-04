const jwt = require ('jsonwebtoken');
const Usuario = require('../models/usuario.model');
const validarJWT = async (req, res, next) => {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({msg: 'No hay token'});
    }
    try{
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        const usuario = await Usuario.findByPk(payload.uid);
        if(!usuario){
            return res.status(404).json({msg:'usuario no existe'});
        }
        req.usuario = usuario;
        next();
    }catch  (error) {
        return res.status(401).json({msg: 'token invalido'});
    }
};
module.exports = {validarJWT};
