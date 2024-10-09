const NonAttendanceLogic = require('../logic/NonAttendanceLogic'); // Importa la lógica de no asistencia

// Controlador para crear un registro de no asistencia
async function crearNoAsistencia(req, res) {
    try {
        // Llama a la lógica para crear un registro de no asistencia
        const noAsistencia = await NonAttendanceLogic.crearNoAsistencia(req.body);
        res.status(201).json(noAsistencia); // Devuelve el registro de no asistencia creado
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para actualizar un registro de no asistencia
async function actualizarNoAsistencia(req, res) {
    try {
        // Llama a la lógica para actualizar el registro de no asistencia
        const noAsistencia = await NonAttendanceLogic.actualizarNoAsistencia(req.params.id, req.body);
        res.json(noAsistencia); // Devuelve el registro de no asistencia actualizado
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para listar todos los registros de no asistencia
async function listarNoAsistencias(req, res) {
    try {
        // Llama a la lógica para listar registros de no asistencia
        const noAsistencias = await NonAttendanceLogic.listarNoAsistencias();
        res.json(noAsistencias); // Devuelve la lista de registros de no asistencia
    } catch (error) {
        res.status(500).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para buscar un registro de no asistencia por ID
async function buscarNoAsistenciaPorId(req, res) {
    try {
        // Llama a la lógica para buscar el registro de no asistencia por ID
        const noAsistencia = await NonAttendanceLogic.buscarNoAsistenciaPorId(req.params.id);
        res.json(noAsistencia); // Devuelve el registro de no asistencia encontrado
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para eliminar un registro de no asistencia
async function eliminarNoAsistencia(req, res) {
    try {
        // Llama a la lógica para eliminar el registro de no asistencia
        const noAsistencia = await NonAttendanceLogic.eliminarNoAsistencia(req.params.id);
        res.json({ message: 'Registro de no asistencia eliminado', noAsistencia }); // Confirma la eliminación
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

module.exports = {
    crearNoAsistencia,
    actualizarNoAsistencia,
    listarNoAsistencias,
    buscarNoAsistenciaPorId,
    eliminarNoAsistencia
};