//importamos el modelo
const Proyectos = require('../models/Proyectos');

exports.proyectosHome = (req, res) => {
    res.render('index', {
        nombrePagina: 'Proyectos'
    });
}

exports.formularioProyecto = (req, res) => {
    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto'
    });
}

exports.nuevoProyecto = async(req, res) => {
    //res.send('Enviaste el formulario');
    //Enviar a la consola lo que el usuario envia
    //console.log(req.body);

    //validar input
    const { nombre } = req.body;

    let errores = [];

    if (!nombre) {
        errores.push({ 'texto': 'Agrega un nombre al proyecto' })
    }

    //si hay errores
    if (errores.length > 0) {
        res.render('nuevoProyecto', {
            nombrePagina: 'Nuevo Proyecto',
            errores
        })
    } else {
        //no hay errores
        //Debemos insertar en la BD
        const proyecto = await Proyectos.create({ nombre });
        res.redirect('/');
    }
}