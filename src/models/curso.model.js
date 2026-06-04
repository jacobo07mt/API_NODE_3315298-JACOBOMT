const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Docente= require('./docente.model');
//const Usuario = require('./usuario.model');
const Curso = sequelize.define('Curso',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
   nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado:{
        type: DataTypes.BOOLEAN,
        defaultValue:true
    }
    


},{
    tableName: 'curso',
    timestamps: true,

});

Docente.hasMany(Curso,{foreignKey:'docente_id'});
Curso.belongsTo(Docente,{foreignKey: 'docente_id'});


module.exports = Curso;