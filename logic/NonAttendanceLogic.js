const NonAttendance = require('../modelos/nonAttendance'); // Importa el modelo de no asistencia

// Función asíncrona para crear un registro de no asistencia
async function crearNoAsistencia(body) {
    // Verificar si ya existe un registro de no asistencia con el mismo ID
    const noAsistenciaExistente = await NonAttendance.findOne({ idNonAttendance: body.idNonAttendance });
    if (noAsistenciaExistente) {
        throw new Error('El registro de no asistencia con este ID ya existe');
    }
    // Crear una nueva instancia de no asistencia
    let noAsistencia = new NonAttendance({
        idNonAttendance: body.idNonAttendance,
        idAttendance: body.idAttendance,
        idReport: body.idReport,
        attendance: body.attendance,
        report: body.report,
        studentNonAttendances: body.studentNonAttendances
    });
    // Guardar el registro de no asistencia en la base de datos
    return await noAsistencia.save();
}

// Función asíncrona para actualizar un registro de no asistencia
async function actualizarNoAsistencia(id, body) {
    // Actualizar el registro de no asistencia por ID
    let noAsistencia = await NonAttendance.findByIdAndUpdate(id, {
        $set: {
            idAttendance: body.idAttendance,
            idReport: body.idReport,
            attendance: body.attendance,
            report: body.report,
            studentNonAttendances: body.studentNonAttendances
        }
    }, { new: true }); // Devuelve la nueva versión del documento
    return noAsistencia;
}

// Función asíncrona para listar todos los registros de no asistencia
async function listarNoAsistencias() {
    // Obtener todos los registros de no asistencia de la base de datos
    let noAsistencias = await NonAttendance.find();
    return noAsistencias;
}

// Función asíncrona para buscar un registro de no asistencia por ID
async function buscarNoAsistenciaPorId(id) {
    try {
        // Buscar el registro de no asistencia por ID
        const noAsistencia = await NonAttendance.findById(id);
        if (!noAsistencia) {
            throw new Error(`Registro de no asistencia con ID ${id} no encontrado`);
        }
        return noAsistencia;
    } catch (err) {
        console.error(`Error al buscar el registro de no asistencia por ID: ${err.message}`);
        throw err;
    }
}

// Función asíncrona para eliminar un registro de no asistencia
async function eliminarNoAsistencia(id) {
    // Eliminar el registro de no asistencia por ID
    const noAsistencia = await NonAttendance.findByIdAndDelete(id);
    if (!noAsistencia) {
        throw new Error(`Registro de no asistencia con ID ${id} no encontrado`);
    }
    return noAsistencia;
}

module.exports = {
    crearNoAsistencia,
    actualizarNoAsistencia,
    listarNoAsistencias,
    buscarNoAsistenciaPorId,
    eliminarNoAsistencia
};