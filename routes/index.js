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
        proyectosController.nuevoProyecto
    );

    //Listar proyecto
    router.get('/proyectos/:url', proyectosController.proyectoPorUrl);

    //Actualizar el proyecto
    router.get('/proyectos/editar/:id', proyectosController.formularioEditar);
    router.post('/nuevo-proyecto/:id',
        //para sanitizar el campo nombre de nuevo proyecto
        body('nombre').not().isEmpty().trim().escape(),
        proyectosController.actualizarProyecto
    );

    return router;
}