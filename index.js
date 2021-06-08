const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');
//const expressValidator = require('express-validator');

//helpers con algunas funciones
const helpers = require('./helpers');

//Crear conexion a la BD
const db = require('./config/db');
//Importar el modelo
require('./models/Proyectos');
require('./models/Tareas');

db.sync()
    .then(() => console.log('Conectado al Servidor'))
    .catch(error => console.log(error));

//crear una app de express
const app = express();

//Agregamos express validator a toda la aplicacion
//app.use(expressValidator());

//donde cargar los archivos estaticos por ejemplo css
app.use(express.static('public'));

//habilitar Pug
app.set('view engine', 'pug');

//agregar carpeta de vistas
app.set('views', path.join(__dirname, './views'));

//pasar var dump a la aplicacion para mapear nombreProyecto, url
app.use((req, res, next) => {
    res.locals.vardump = helpers.vardump;
    next();
})

//habilitar bobyParser para leer datos del formulario
app.use(bodyParser.urlencoded({
    extended: true
}));

/*const productos = [{
    producto: 'Libro',
    precio: 20
}, {
    producto: 'Computadora',
    precio: 10000
}]; */

app.use('/', routes());

app.listen(3000); //puerto de escucha