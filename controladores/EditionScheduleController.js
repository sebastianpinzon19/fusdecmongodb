const EditionScheduleLogic = require('../logic/EditionScheduleLogic'); // Importa la lógica de programación de ediciones

// Controlador para crear una programación de edición
async function crearProgramacionEdicion(req, res) {
    try {
        // Llama a la lógica para crear una programación de edición
        const programacion = await EditionScheduleLogic.crearProgramacionEdicion(req.body);
        res.status(201).json(programacion); // Devuelve la programación creada
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para actualizar una programación de edición
async function actualizarProgramacionEdicion(req, res) {
    try {
        // Llama a la lógica para actualizar la programación de edición
        const programacion = await EditionScheduleLogic.actualizarProgramacionEdicion(req.params.id, req.body);
        res.json(programacion); // Devuelve la programación actualizada
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para listar todas las programaciones de ediciones
async function listarProgramacionesEdicion(req, res) {
    try {
        // Llama a la lógica para listar programaciones de ediciones
        const programaciones = await EditionScheduleLogic.listarProgramacionesEdicion();
        res.json(programaciones); // Devuelve la lista de programaciones
    } catch (error) {
        res.status(500).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para buscar una programación de edición por ID
async function buscarProgramacionEdicionPorId(req, res) {
    try {
        // Llama a la lógica para buscar la programación de edición por ID
        const programacion = await EditionScheduleLogic.buscarProgramacionEdicionPorId(req.params.id);
        res.json(programacion); // Devuelve la programación encontrada
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para eliminar una programación de edición
async function eliminarProgramacionEdicion(req, res) {
    try {
        // Llama a la lógica para eliminar la programación de edición
        const programacion = await EditionScheduleLogic.eliminarProgramacionEdicion(req.params.id);
        res.json({ message: 'Programación de edición eliminada', programacion }); // Confirma la eliminación
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

module.exports = {
    crearProgramacionEdicion,
    actualizarProgramacionEdicion,
    listarProgramacionesEdicion,
    buscarProgramacionEdicionPorId,
    eliminarProgramacionEdicion
};