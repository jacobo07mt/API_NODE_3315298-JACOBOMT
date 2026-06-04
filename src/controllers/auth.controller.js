const authService = require ('../services/auth.service');
const registro = async (req, res) => {
    try {
        const usuario = await authService.registrar(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const login = async (req, res) =>{
    try {
        const data = await authService.login(
            req.body.correo,
            req.body.password
        );
        res.json(data);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const perfil = async(req,res)=>{
    res.json({usuario:req.usuario});

};

module.exports = {
    registro,
    login,
    perfil
};