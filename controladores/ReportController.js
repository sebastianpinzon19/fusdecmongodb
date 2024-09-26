const ReportLogic = require('../logic/ReportLogic'); // Importa la lógica de reporte

// Controlador para crear un reporte
async function crearReporte(req, res) {
    try {
        // Llama a la lógica para crear un reporte
        const reporte = await ReportLogic.crearReporte(req.body);
        res.status(201).json(reporte); // Devuelve el reporte creado
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para actualizar un reporte
async function actualizarReporte(req, res) {
    try {
        // Llama a la lógica para actualizar el reporte
        const reporte = await ReportLogic.actualizarReporte(req.params.id, req.body);
        res.json(reporte); // Devuelve el reporte actualizado
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para listar todos los reportes
async function listarReportes(req, res) {
    try {
        // Llama a la lógica para listar reportes
        const reportes = await ReportLogic.listarReportes();
        res.json(reportes); // Devuelve la lista de reportes
    } catch (error) {
        res.status(500).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para buscar un reporte por ID
async function buscarReportePorId(req, res) {
    try {
        // Llama a la lógica para buscar el reporte por ID
        const reporte = await ReportLogic.buscarReportePorId(req.params.id);
        res.json(reporte); // Devuelve el reporte encontrado
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para eliminar un reporte
async function eliminarReporte(req, res) {
    try {
        // Llama a la lógica para eliminar el reporte
        const reporte = await ReportLogic.eliminarReporte(req.params.id);
        res.json({ message: 'Reporte eliminado', reporte }); // Confirma la eliminación
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

module.exports = {
    crearReporte,
    actualizarReporte,
    listarReportes,
    buscarReportePorId,
    eliminarReporte
};