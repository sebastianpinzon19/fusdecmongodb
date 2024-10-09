const GradeLogic = require('../logic/GradeLogic'); // Importa la lógica de calificación

// Controlador para crear una calificación
async function crearCalificacion(req, res) {
    try {
        // Llama a la lógica para crear una calificación
        const calificacion = await GradeLogic.crearCalificacion(req.body);
        res.status(201).json(calificacion); // Devuelve la calificación creada
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para actualizar una calificación
async function actualizarCalificacion(req, res) {
    try {
        // Llama a la lógica para actualizar la calificación
        const calificacion = await GradeLogic.actualizarCalificacion(req.params.id, req.body);
        res.json(calificacion); // Devuelve la calificación actualizada
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para listar todas las calificaciones
async function listarCalificaciones(req, res) {
    try {
        // Llama a la lógica para listar calificaciones
        const calificaciones = await GradeLogic.listarCalificaciones();
        res.json(calificaciones); // Devuelve la lista de calificaciones
    } catch (error) {
        res.status(500).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para buscar una calificación por ID
async function buscarCalificacionPorId(req, res) {
    try {
        // Llama a la lógica para buscar la calificación por ID
        const calificacion = await GradeLogic.buscarCalificacionPorId(req.params.id);
        res.json(calificacion); // Devuelve la calificación encontrada
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para eliminar una calificación
async function eliminarCalificacion(req, res) {
    try {
        // Llama a la lógica para eliminar la calificación
        const calificacion = await GradeLogic.eliminarCalificacion(req.params.id);
        res.json({ message: 'Calificación eliminada', calificacion }); // Confirma la eliminación
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

module.exports = {
    crearCalificacion,
    actualizarCalificacion,
    listarCalificaciones,
    buscarCalificacionPorId,
    eliminarCalificacion
};