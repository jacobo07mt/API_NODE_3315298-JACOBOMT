const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const authRoutes = require('./routes/auth.routes');

//Ruta de usuario
const usuarioRoutes = require('./routes/usuario.routes');
const institucionRoutes = require('./routes/institucion.routes');
const app = express();
const limiter = rateLimit({windowMs: 15 * 60 * 1000, max: 100});
app.use(limiter);
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

//Middelware paraJSON
app.use(express.json());
app.use('/api/auth', authRoutes);

//Indicamos la ruta usuario
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/instituciones', institucionRoutes);

app.get('/',(req,res)=> {
    res.send('🆗 API Funcionando Correctamente')
}
);

const PORT = 3000;
app.listen(PORT,()=>{
    console.log("Servidor activo")
});

module.exports = app;