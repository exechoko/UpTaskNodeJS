//importamos el modelo
const Proyectos = require('../models/Proyectos');

exports.proyectosHome = async(req, res) => {
    const proyectos = await Proyectos.findAll(); //realiza una consulta en la bd y los trae a la vista

    res.render('index', {
        nombrePagina: 'Proyectos',
        proyectos
    });
}

exports.formularioProyecto = async(req, res) => {
    const proyectos = await Proyectos.findAll();

    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto',
        proyectos
    });
}

exports.nuevoProyecto = async(req, res) => {
    //res.send('Enviaste el formulario');
    //Enviar a la consola lo que el usuario envia
    //console.log(req.body);

    const proyectos = await Proyectos.findAll();

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
            errores,
            proyectos
        })
    } else {
        //no hay errores
        //Debemos insertar en la BD
        const proyecto = await Proyectos.create({ nombre });
        res.redirect('/');
    }
}

exports.proyectoPorUrl = async(req, res, next) => {
    const proyectosPromise = Proyectos.findAll();

    const proyectoPromise = Proyectos.findOne({
        where: {
            url: req.params.url
        }
    });
    const [proyectos, proyecto] = await Promise.all([proyectosPromise, proyectoPromise]);

    if (!proyecto) return next();

    //render a la vista
    res.render('tareas', {
        nombrePagina: 'Tareas del Proyecto',
        proyecto,
        proyectos
    })
}

exports.formularioEditar = async(req, res) => {
    const proyectosPromise = Proyectos.findAll();

    const proyectoPromise = Proyectos.findOne({
        where: {
            id: req.params.id
        }
    });
    const [proyectos, proyecto] = await Promise.all([proyectosPromise, proyectoPromise]);



    res.render('nuevoProyecto', {
        nombrePagina: 'Editar Proyecto',
        proyectos,
        proyecto
    })
}