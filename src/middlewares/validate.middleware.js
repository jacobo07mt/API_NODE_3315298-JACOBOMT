const {validationResult} = require('express-validator');
const validarCampos = (req, res, next) =>{
    const errrors = validationResult(req);
    if (!errrors.isEmpty()) {
        return res.status(400).json(
            {
                errors: errors.array()
            }
        );
    }
    next();
};

module.exports = {
    validarCampos
};