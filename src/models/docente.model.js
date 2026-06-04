const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Sede = require('./sede.model');
const Usuario = require('./usuario.model');
const Docente = sequelize.define('Docente',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
   especialidad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    profesion:{
        type: DataTypes.STRING,
        allowNull: false,
    }
    


},{
    tableName: 'docente',
    timestamps: true,

});

Usuario.hasOne(Docente,{foreignKey:'usuario_id'});
Docente.belongsTo(Usuario,{foreignKey: 'usuario_id'});

module.exports = Usuario;