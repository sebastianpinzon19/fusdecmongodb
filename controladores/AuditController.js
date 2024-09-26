const AuditLogic = require('../logic/AuditLogic'); // Importa la lógica de auditoría

// Controlador para crear una auditoría
async function crearAuditoria(req, res) {
    try {
        // Llama a la lógica para crear una auditoría
        const auditoria = await AuditLogic.crearAuditoria(req.body);
        res.status(201).json(auditoria); // Devuelve la auditoría creada
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para actualizar una auditoría
async function actualizarAuditoria(req, res) {
    try {
        // Llama a la lógica para actualizar la auditoría
        const auditoria = await AuditLogic.actualizarAuditoria(req.params.id, req.body);
        res.json(auditoria); // Devuelve la auditoría actualizada
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para listar todas las auditorías
async function listarAuditorias(req, res) {
    try {
        // Llama a la lógica para listar auditorías
        const auditorias = await AuditLogic.listarAuditorias();
        res.json(auditorias); // Devuelve la lista de auditorías
    } catch (error) {
        res.status(500).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para buscar una auditoría por ID
async function buscarAuditoriaPorId(req, res) {
    try {
        // Llama a la lógica para buscar la auditoría por ID
        const auditoria = await AuditLogic.buscarAuditoriaPorId(req.params.id);
        res.json(auditoria); // Devuelve la auditoría encontrada
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para eliminar una auditoría
async function eliminarAuditoria(req, res) {
    try {
        // Llama a la lógica para eliminar la auditoría
        const auditoria = await AuditLogic.eliminarAuditoria(req.params.id);
        res.json({ message: 'Auditoría eliminada', auditoria }); // Confirma la eliminación
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

module.exports = {
    crearAuditoria,
    actualizarAuditoria,
    listarAuditorias,
    buscarAuditoriaPorId,
    eliminarAuditoria
};