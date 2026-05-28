const jwt = require ('jsonwebtoken');
const validarJWT = (req, res, next) => {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({msg: 'No hay token'});
    }

    try{
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = payload;
        next()
    }catch  (error) {
        return res.status(401).json({msg: 'token invalido'});
    }
};

module.exports = {
    validarJWT
};