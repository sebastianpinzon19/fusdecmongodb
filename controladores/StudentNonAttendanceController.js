const StudentNonAttendanceLogic = require('../logic/StudentNonAttendanceLogic'); // Importa la lógica de no asistencia de estudiante

// Controlador para crear un registro de no asistencia de estudiante
async function crearNoAsistenciaEstudiante(req, res) {
    try {
        // Llama a la lógica para crear un registro de no asistencia
        const noAsistenciaEstudiante = await StudentNonAttendanceLogic.crearNoAsistenciaEstudiante(req.body);
        res.status(201).json(noAsistenciaEstudiante); // Devuelve el registro de no asistencia creado
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para actualizar un registro de no asistencia de estudiante
async function actualizarNoAsistenciaEstudiante(req, res) {
    try {
        // Llama a la lógica para actualizar el registro de no asistencia
        const noAsistenciaEstudiante = await StudentNonAttendanceLogic.actualizarNoAsistenciaEstudiante(req.params.id, req.body);
        res.json(noAsistenciaEstudiante); // Devuelve el registro de no asistencia actualizado
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para listar todos los registros de no asistencia de estudiantes
async function listarNoAsistenciasEstudiantes(req, res) {
    try {
        // Llama a la lógica para listar registros de no asistencia
        const noAsistenciasEstudiantes = await StudentNonAttendanceLogic.listarNoAsistenciasEstudiantes();
        res.json(noAsistenciasEstudiantes); // Devuelve la lista de registros de no asistencia
    } catch (error) {
        res.status(500).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para buscar un registro de no asistencia de estudiante por ID
async function buscarNoAsistenciaEstudiantePorId(req, res) {
    try {
        // Llama a la lógica para buscar el registro de no asistencia por ID
        const noAsistenciaEstudiante = await StudentNonAttendanceLogic.buscarNoAsistenciaEstudiantePorId(req.params.id);
        res.json(noAsistenciaEstudiante); // Devuelve el registro de no asistencia encontrado
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para eliminar un registro de no asistencia de estudiante
async function eliminarNoAsistenciaEstudiante(req, res) {
    try {
        // Llama a la lógica para eliminar el registro de no asistencia
        const noAsistenciaEstudiante = await StudentNonAttendanceLogic.eliminarNoAsistenciaEstudiante(req.params.id);
        res.json({ message: 'Registro de no asistencia de estudiante eliminado', noAsistenciaEstudiante }); // Confirma la eliminación
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

module.exports = {
    crearNoAsistenciaEstudiante,
    actualizarNoAsistenciaEstudiante,
    listarNoAsistenciasEstudiantes,
    buscarNoAsistenciaEstudiantePorId,
    eliminarNoAsistenciaEstudiante
};