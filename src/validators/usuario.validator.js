const { body } = require ('express-validator');
const crearUsuarioValidator = [
    body('nombre')
    .notEmpty()
    .withMessage('Nombre Requerido.'),

    body('apellido')
    .notEmpty()
    .withMessage('Apellido Requerido.'),
    
    body('correo')
    .isEmail()
    .withMessage('Correo Invalido.'),
    
    body('password')
    .isLength({min: 6})
    .withMessage('Password minimo 6 Caracteres.')
];

module.exports = {crearUsuarioValidator};