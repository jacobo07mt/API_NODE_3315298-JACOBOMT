const {body} = require ('express-validator');
const registerValidator = [
    body('nombre')
    .notEmpty()
    .withMessage('Nombre requerido'),

    body('apellido')
    .notEmpty()
    .withMessage('Apellido requerido'),

    body('correo')
    .isEmail()
    .withMessage('Correo invalido'),

    body('password')
    .isLength({min: 6})
    .withMessage('Contraseña minimo 6 caracteres')
];

module.exports = {registerValidator};