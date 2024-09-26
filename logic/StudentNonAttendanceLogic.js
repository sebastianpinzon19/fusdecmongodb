const StudentNonAttendance = require('../modelos/studentNonAttendance'); // Importa el modelo de no asistencia de estudiante

// Función asíncrona para crear un registro de no asistencia de estudiante
async function crearNoAsistenciaEstudiante(body) {
    // Verificar si ya existe un registro de no asistencia con el mismo ID
    const noAsistenciaEstudianteExistente = await StudentNonAttendance.findOne({ idStudent: body.idStudent, idNonAttendance: body.idNonAttendance });
    if (noAsistenciaEstudianteExistente) {
        throw new Error('El registro de no asistencia de estudiante con este ID ya existe');
    }
    // Crear una nueva instancia de no asistencia de estudiante
    let noAsistenciaEstudiante = new StudentNonAttendance({
        idStudent: body.idStudent,
        idNonAttendance: body.idNonAttendance,
        student: body.student,
        nonAttendance: body.nonAttendance
    });
    // Guardar el registro de no asistencia en la base de datos
    return await noAsistenciaEstudiante.save();
}

// Función asíncrona para actualizar un registro de no asistencia de estudiante
async function actualizarNoAsistenciaEstudiante(id, body) {
    // Actualizar el registro de no asistencia por ID
    let noAsistenciaEstudiante = await StudentNonAttendance.findByIdAndUpdate(id, {
        $set: {
            idStudent: body.idStudent,
            idNonAttendance: body.idNonAttendance,
            student: body.student,
            nonAttendance: body.nonAttendance
        }
    }, { new: true }); // Devuelve la nueva versión del documento
    return noAsistenciaEstudiante;
}

// Función asíncrona para listar todos los registros de no asistencia de estudiantes
async function listarNoAsistenciasEstudiantes() {
    // Obtener todos los registros de no asistencia de la base de datos
    let noAsistenciasEstudiantes = await StudentNonAttendance.find();
    return noAsistenciasEstudiantes;
}

// Función asíncrona para buscar un registro de no asistencia de estudiante por ID
async function buscarNoAsistenciaEstudiantePorId(id) {
    try {
        // Buscar el registro de no asistencia por ID
        const noAsistenciaEstudiante = await StudentNonAttendance.findById(id);
        if (!noAsistenciaEstudiante) {
            throw new Error(`Registro de no asistencia de estudiante con ID ${id} no encontrado`);
        }
        return noAsistenciaEstudiante;
    } catch (err) {
        console.error(`Error al buscar el registro de no asistencia de estudiante por ID: ${err.message}`);
        throw err;
    }
}

// Función asíncrona para eliminar un registro de no asistencia de estudiante
async function eliminarNoAsistenciaEstudiante(id) {
    // Eliminar el registro de no asistencia por ID
    const noAsistenciaEstudiante = await StudentNonAttendance.findByIdAndDelete(id);
    if (!noAsistenciaEstudiante) {
        throw new Error(`Registro de no asistencia de estudiante con ID ${id} no encontrado`);
    }
    return noAsistenciaEstudiante;
}

module.exports = {
    crearNoAsistenciaEstudiante,
    actualizarNoAsistenciaEstudiante,
    listarNoAsistenciasEstudiantes,
    buscarNoAsistenciaEstudiantePorId,
    eliminarNoAsistenciaEstudiante
};