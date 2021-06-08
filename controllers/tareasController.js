const Proyectos = require('../models/Proyectos');
const Tareas = require('../models/Tareas');

exports.agregarTarea = async(req, res, next) => {
    //obtenemos el proyecto
    const proyecto = await Proyectos.findOne({ where: { url: req.params.url } });

    //leer el valor del input
    const { tarea } = req.body;

    //estado 0 = incompleto
    const estado = 0;

    //Id del proyecto donde agregamos la tarea
    const proyectoId = proyecto.id;

    //Insertar en la base de datos
    const resultado = await Tareas.create({ tarea, estado, proyectoId });

    //si no hay resultado next al siguiente midleware
    if (!resultado) {
        return next();
    }

    //redireccionar
    res.redirect(`/proyectos/${req.params.url}`);

}