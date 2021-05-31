const express = require('express');
const routes = require('./routes');

//crear una app de express
const app = express();

const productos = [{
    producto: 'Libro',
    precio: 20
}, {
    producto: 'Computadora',
    precio: 10000
}];

app.use('/', routes());

app.listen(3000); //puerto de escucha