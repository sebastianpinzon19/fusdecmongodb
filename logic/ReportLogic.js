const Report = require('../modelos/report'); // Importa el modelo de reporte

// Función asíncrona para crear un reporte
async function crearReporte(body) {
    // Verificar si ya existe un reporte con el mismo ID
    const reporteExistente = await Report.findOne({ idReport: body.idReport });
    if (reporteExistente) {
        throw new Error('El reporte con este ID ya existe');
    }
    // Crear una nueva instancia de reporte
    let reporte = new Report({
        idReport: body.idReport,
        observation: body.observation
    });
    // Guardar el reporte en la base de datos
    return await reporte.save();
}

// Función asíncrona para actualizar un reporte
async function actualizarReporte(id, body) {
    // Actualizar el reporte por ID
    let reporte = await Report.findByIdAndUpdate(id, {
        $set: {
            observation: body.observation
        }
    }, { new: true }); // Devuelve la nueva versión del documento
    return reporte;
}

// Función asíncrona para listar todos los reportes
async function listarReportes() {
    // Obtener todos los reportes de la base de datos
    let reportes = await Report.find();
    return reportes;
}

// Función asíncrona para buscar un reporte por ID
async function buscarReportePorId(id) {
    try {
        // Buscar el reporte por ID
        const reporte = await Report.findById(id);
        if (!reporte) {
            throw new Error(`Reporte con ID ${id} no encontrado`);
        }
        return reporte;
    } catch (err) {
        console.error(`Error al buscar el reporte por ID: ${err.message}`);
        throw err;
    }
}

// Función asíncrona para eliminar un reporte
async function eliminarReporte(id) {
    // Eliminar el reporte por ID
    const reporte = await Report.findByIdAndDelete(id);
    if (!reporte) {
        throw new Error(`Reporte con ID ${id} no encontrado`);
    }
    return reporte;
}

module.exports = {
    crearReporte,
    actualizarReporte,
    listarReportes,
    buscarReportePorId,
    eliminarReporte
};