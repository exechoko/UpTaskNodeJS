const express = require('express');
const routes = require('./routes');
const path = require('path');

//crear una app de express
const app = express();

//donde cargar los archivos estaticos
app.use(express.static('public'));

//habilitar Pug
app.set('view engine', 'pug');

//agregar carpeta de vistas
app.set('views', path.join(__dirname, './views'));

/*const productos = [{
    producto: 'Libro',
    precio: 20
}, {
    producto: 'Computadora',
    precio: 10000
}]; */

app.use('/', routes());

app.listen(3000); //puerto de escucha