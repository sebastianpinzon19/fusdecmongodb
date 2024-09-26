const StudentGrade = require('../modelos/studentGrade'); // Importa el modelo de calificación de estudiante

// Función asíncrona para crear un registro de calificación de estudiante
async function crearCalificacionEstudiante(body) {
    // Verificar si ya existe un registro de calificación con el mismo ID
    const calificacionEstudianteExistente = await StudentGrade.findOne({ idStudent: body.idStudent, idGrade: body.idGrade });
    if (calificacionEstudianteExistente) {
        throw new Error('El registro de calificación de estudiante con este ID ya existe');
    }
    // Crear una nueva instancia de calificación de estudiante
    let calificacionEstudiante = new StudentGrade({
        idStudent: body.idStudent,
        idGrade: body.idGrade,
        grade: body.grade,
        student: body.student
    });
    // Guardar el registro de calificación en la base de datos
    return await calificacionEstudiante.save();
}

// Función asíncrona para actualizar un registro de calificación de estudiante
async function actualizarCalificacionEstudiante(id, body) {
    // Actualizar el registro de calificación por ID
    let calificacionEstudiante = await StudentGrade.findByIdAndUpdate(id, {
        $set: {
            idStudent: body.idStudent,
            idGrade: body.idGrade,
            grade: body.grade,
            student: body.student
        }
    }, { new: true }); // Devuelve la nueva versión del documento
    return calificacionEstudiante;
}

// Función asíncrona para listar todos los registros de calificación de estudiantes
async function listarCalificacionesEstudiantes() {
    // Obtener todos los registros de calificación de la base de datos
    let calificacionesEstudiantes = await StudentGrade.find();
    return calificacionesEstudiantes;
}

// Función asíncrona para buscar un registro de calificación de estudiante por ID
async function buscarCalificacionEstudiantePorId(id) {
    try {
        // Buscar el registro de calificación por ID
        const calificacionEstudiante = await StudentGrade.findById(id);
        if (!calificacionEstudiante) {
            throw new Error(`Registro de calificación de estudiante con ID ${id} no encontrado`);
        }
        return calificacionEstudiante;
    } catch (err) {
        console.error(`Error al buscar el registro de calificación de estudiante por ID: ${err.message}`);
        throw err;
    }
}

// Función asíncrona para eliminar un registro de calificación de estudiante
async function eliminarCalificacionEstudiante(id) {
    // Eliminar el registro de calificación por ID
    const calificacionEstudiante = await StudentGrade.findByIdAndDelete(id);
    if (!calificacionEstudiante) {
        throw new Error(`Registro de calificación de estudiante con ID ${id} no encontrado`);
    }
    return calificacionEstudiante;
}

module.exports = {
    crearCalificacionEstudiante,
    actualizarCalificacionEstudiante,
    listarCalificacionesEstudiantes,
    buscarCalificacionEstudiantePorId,
    eliminarCalificacionEstudiante
};