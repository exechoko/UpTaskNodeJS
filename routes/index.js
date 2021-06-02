const express = require('express');
const router = express.Router();

//importar el express validator
const { body } = require('express-validator/check');

//importar el controlador
const proyectosController = require('../controllers/proyectosController');

module.exports = function() {
    //ruta para el home
    router.get('/', proyectosController.proyectosHome);
    //router.get('/nosotros', proyectosController.nosotros);
    router.get('/nuevo-proyecto', proyectosController.formularioProyecto);
    router.post('/nuevo-proyecto',
        //para sanitizar el campo nombre de nuevo proyecto
        body('nombre').not().isEmpty().trim().escape(),
        proyectosController.nuevoProyecto);
    return router;
}