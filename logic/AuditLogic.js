const Audit = require('../modelos/Audit'); // Importa el modelo de auditoría

// Función asíncrona para crear una auditoría
async function crearAuditoria(body) {
    // Verificar si ya existe una auditoría con el mismo ID
    const auditoriaExistente = await Audit.findOne({ idAudit: body.idAudit });
    if (auditoriaExistente) {
        throw new Error('La auditoría con este ID ya existe');
    }
    // Crear una nueva instancia de auditoría
    let auditoria = new Audit({
        idAudit: body.idAudit,
        auditDate: body.auditDate,
        nameOfIssuerAudit: body.nameOfIssuerAudit,
        idCertificate: body.idCertificate,
        certificate: body.certificate
    });
    // Guardar la auditoría en la base de datos
    return await auditoria.save();
}

// Función asíncrona para actualizar una auditoría
async function actualizarAuditoria(id, body) {
    // Actualizar la auditoría por ID
    let auditoria = await Audit.findByIdAndUpdate(id, {
        $set: {
            auditDate: body.auditDate,
            nameOfIssuerAudit: body.nameOfIssuerAudit,
            idCertificate: body.idCertificate,
            certificate: body.certificate
        }
    }, { new: true }); // Devuelve la nueva versión del documento
    return auditoria;
}

// Función asíncrona para listar todas las auditorías
async function listarAuditorias() {
    // Obtener todas las auditorías de la base de datos
    let auditorias = await Audit.find();
    return auditorias;
}

// Función asíncrona para buscar una auditoría por ID
async function buscarAuditoriaPorId(id) {
    try {
        // Buscar la auditoría por ID
        const auditoria = await Audit.findById(id);
        if (!auditoria) {
            throw new Error(`Auditoría con ID ${id} no encontrada`);
        }
        return auditoria;
    } catch (err) {
        console.error(`Error al buscar la auditoría por ID: ${err.message}`);
        throw err;
    }
}

// Función asíncrona para eliminar una auditoría
async function eliminarAuditoria(id) {
    // Eliminar la auditoría por ID
    const auditoria = await Audit.findByIdAndDelete(id);
    if (!auditoria) {
        throw new Error(`Auditoría con ID ${id} no encontrada`);
    }
    return auditoria;
}

module.exports = {
    crearAuditoria,
    actualizarAuditoria,
    listarAuditorias,
    buscarAuditoriaPorId,
    eliminarAuditoria
};