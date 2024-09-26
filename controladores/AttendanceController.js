const AttendanceLogic = require('../logic/AttendanceLogic');

// Controlador para crear una asistencia
async function crearAsistencia(req, res) {
    try {
        const asistencia = await AttendanceLogic.crearAsistencia(req.body);
        res.status(201).json(asistencia);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Controlador para actualizar una asistencia
async function actualizarAsistencia(req, res) {
    try {
        const asistencia = await AttendanceLogic.actualizarAsistencia(req.params.id, req.body);
        res.json(asistencia);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Controlador para listar todas las asistencias
async function listarAsistencias(req, res) {
    try {
        const asistencias = await AttendanceLogic.listarAsistencias();
        res.json(asistencias);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Controlador para buscar una asistencia por ID
async function buscarAsistenciaPorId(req, res) {
    try {
        const asistencia = await AttendanceLogic.buscarAsistenciaPorId(req.params.id);
        res.json(asistencia);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Controlador para eliminar una asistencia
async function eliminarAsistencia(req, res) {
    try {
        const asistencia = await AttendanceLogic.eliminarAsistencia(req.params.id);
        res.json({ message: 'Asistencia eliminada', asistencia });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Controlador para obtener la lista de asistencias y el estado de carga
async function obtenerEstadoAsistencias(req, res) {
    try {
        const asistencias = await AttendanceLogic.listarAsistencias();
        res.json({
            listaAsistencias: asistencias,          // Lista de todas las asistencias obtenidas
            cargando: false                          // Estado que indica si se está cargando la información (false)
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    crearAsistencia,
    actualizarAsistencia,
    listarAsistencias,
    buscarAsistenciaPorId,
    eliminarAsistencia,
    obtenerEstadoAsistencias // Nueva función para obtener el estado de las asistencias
};