const StudentAttendance = require('../modelos/studentAttendance'); // Importa el modelo de asistencia de estudiantes

// Función asíncrona para crear un registro de asistencia de estudiante
async function crearAsistenciaEstudiante(body) {
    // Verificar si ya existe un registro de asistencia con el mismo ID
    const asistenciaExistente = await StudentAttendance.findOne({ idAttendance: body.idAttendance, idStudent: body.idStudent });
    if (asistenciaExistente) {
        throw new Error('El registro de asistencia de estudiante con este ID ya existe');
    }
    // Crear una nueva instancia de asistencia de estudiante
    let asistenciaEstudiante = new StudentAttendance({
        idStudent: body.idStudent,
        student: body.student,
        idAttendance: body.idAttendance,
        attendance: body.attendance
    });
    // Guardar el registro de asistencia en la base de datos
    return await asistenciaEstudiante.save();
}

// Función asíncrona para actualizar un registro de asistencia de estudiante
async function actualizarAsistenciaEstudiante(id, body) {
    // Actualizar el registro de asistencia por ID
    let asistenciaEstudiante = await StudentAttendance.findByIdAndUpdate(id, {
        $set: {
            idStudent: body.idStudent,
            student: body.student,
            idAttendance: body.idAttendance,
            attendance: body.attendance
        }
    }, { new: true }); // Devuelve la nueva versión del documento
    return asistenciaEstudiante;
}

// Función asíncrona para listar todos los registros de asistencia de estudiantes
async function listarAsistenciasEstudiantes() {
    // Obtener todos los registros de asistencia de la base de datos
    let asistenciasEstudiantes = await StudentAttendance.find();
    return asistenciasEstudiantes;
}

// Función asíncrona para buscar un registro de asistencia de estudiante por ID
async function buscarAsistenciaEstudiantePorId(id) {
    try {
        // Buscar el registro de asistencia por ID
        const asistenciaEstudiante = await StudentAttendance.findById(id);
        if (!asistenciaEstudiante) {
            throw new Error(`Registro de asistencia de estudiante con ID ${id} no encontrado`);
        }
        return asistenciaEstudiante;
    } catch (err) {
        console.error(`Error al buscar el registro de asistencia de estudiante por ID: ${err.message}`);
        throw err;
    }
}

// Función asíncrona para eliminar un registro de asistencia de estudiante
async function eliminarAsistenciaEstudiante(id) {
    // Eliminar el registro de asistencia por ID
    const asistenciaEstudiante = await StudentAttendance.findByIdAndDelete(id);
    if (!asistenciaEstudiante) {
        throw new Error(`Registro de asistencia de estudiante con ID ${id} no encontrado`);
    }
    return asistenciaEstudiante;
}

module.exports = {
    crearAsistenciaEstudiante,
    actualizarAsistenciaEstudiante,
    listarAsistenciasEstudiantes,
    buscarAsistenciaEstudiantePorId,
    eliminarAsistenciaEstudiante
};