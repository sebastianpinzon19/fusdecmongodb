const StudentAttendanceLogic = require('../logic/StudentAttendanceLogic'); // Importa la lógica de asistencia de estudiantes

// Controlador para crear un registro de asistencia de estudiante
async function crearAsistenciaEstudiante(req, res) {
    try {
        // Llama a la lógica para crear un registro de asistencia
        const asistenciaEstudiante = await StudentAttendanceLogic.crearAsistenciaEstudiante(req.body);
        res.status(201).json(asistenciaEstudiante); // Devuelve el registro de asistencia creado
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para actualizar un registro de asistencia de estudiante
async function actualizarAsistenciaEstudiante(req, res) {
    try {
        // Llama a la lógica para actualizar el registro de asistencia
        const asistenciaEstudiante = await StudentAttendanceLogic.actualizarAsistenciaEstudiante(req.params.id, req.body);
        res.json(asistenciaEstudiante); // Devuelve el registro de asistencia actualizado
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para listar todos los registros de asistencia de estudiantes
async function listarAsistenciasEstudiantes(req, res) {
    try {
        // Llama a la lógica para listar registros de asistencia
        const asistenciasEstudiantes = await StudentAttendanceLogic.listarAsistenciasEstudiantes();
        res.json(asistenciasEstudiantes); // Devuelve la lista de registros de asistencia
    } catch (error) {
        res.status(500).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para buscar un registro de asistencia de estudiante por ID
async function buscarAsistenciaEstudiantePorId(req, res) {
    try {
        // Llama a la lógica para buscar el registro de asistencia por ID
        const asistenciaEstudiante = await StudentAttendanceLogic.buscarAsistenciaEstudiantePorId(req.params.id);
        res.json(asistenciaEstudiante); // Devuelve el registro de asistencia encontrado
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para eliminar un registro de asistencia de estudiante
async function eliminarAsistenciaEstudiante(req, res) {
    try {
        // Llama a la lógica para eliminar el registro de asistencia
        const asistenciaEstudiante = await StudentAttendanceLogic.eliminarAsistenciaEstudiante(req.params.id);
        res.json({ message: 'Registro de asistencia de estudiante eliminado', asistenciaEstudiante }); // Confirma la eliminación
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

module.exports = {
    crearAsistenciaEstudiante,
    actualizarAsistenciaEstudiante,
    listarAsistenciasEstudiantes,
    buscarAsistenciaEstudiantePorId,
    eliminarAsistenciaEstudiante
};