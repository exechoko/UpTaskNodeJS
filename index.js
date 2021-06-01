const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

//crear una app de express
const app = express();

//donde cargar los archivos estaticos por ejemplo css
app.use(express.static('public'));

//habilitar Pug
app.set('view engine', 'pug');

//agregar carpeta de vistas
app.set('views', path.join(__dirname, './views'));

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