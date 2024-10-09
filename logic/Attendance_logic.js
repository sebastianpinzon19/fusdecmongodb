const Attendance = require('../modelos/Attendance'); // Asegúrate de que la ruta sea correcta

// Función asíncrona para crear una asistencia
async function crearAsistencia(body) {
    const asistenciaExistente = await Attendance.findOne({ idAttendance: body.idAttendance });
    if (asistenciaExistente) {
        throw new Error('La asistencia con este ID ya existe');
    }
    let asistencia = new Attendance({
        idAttendance: body.idAttendance,
        attendanceDate: body.attendanceDate,
        attendanceStatus: body.attendanceStatus,
        nonAttendance: body.nonAttendance,
        studentAttendances: body.studentAttendances
    });
    return await asistencia.save();
}

// Función asíncrona para actualizar una asistencia
async function actualizarAsistencia(id, body) {
    let asistencia = await Attendance.findByIdAndUpdate(id, {
        $set: {
            attendanceDate: body.attendanceDate,
            attendanceStatus: body.attendanceStatus,
            nonAttendance: body.nonAttendance,
            studentAttendances: body.studentAttendances
        }
    }, { new: true });
    return asistencia;
}

// Función asíncrona para listar todas las asistencias
async function listarAsistencias() {
    let asistencias = await Attendance.find();
    return asistencias;
}

// Función asíncrona para buscar una asistencia por ID
async function buscarAsistenciaPorId(id) {
    try {
        const asistencia = await Attendance.findById(id);
        if (!asistencia) {
            throw new Error(`Asistencia con ID ${id} no encontrada`);
        }
        return asistencia;
    } catch (err) {
        console.error(`Error al buscar la asistencia por ID: ${err.message}`);
        throw err;
    }
}

// Función asíncrona para eliminar una asistencia
async function eliminarAsistencia(id) {
    const asistencia = await Attendance.findByIdAndDelete(id);
    if (!asistencia) {
        throw new Error(`Asistencia con ID ${id} no encontrada`);
    }
    return asistencia;
}

module.exports = {
    crearAsistencia,
    actualizarAsistencia,
    listarAsistencias,
    buscarAsistenciaPorId,
    eliminarAsistencia
};