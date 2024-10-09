const Grade = require('../modelos/grade'); // Importa el modelo de calificación

// Función asíncrona para crear una calificación
async function crearCalificacion(body) {
    // Verificar si ya existe una calificación con el mismo ID
    const calificacionExistente = await Grade.findOne({ idGrade: body.idGrade });
    if (calificacionExistente) {
        throw new Error('La calificación con este ID ya existe');
    }
    // Crear una nueva instancia de calificación
    let calificacion = new Grade({
        idGrade: body.idGrade,
        idReport: body.idReport,
        approved: body.approved,
        observationGrade: body.observationGrade,
        report: body.report,
        studentGrades: body.studentGrades
    });
    // Guardar la calificación en la base de datos
    return await calificacion.save();
}

// Función asíncrona para actualizar una calificación
async function actualizarCalificacion(id, body) {
    // Actualizar la calificación por ID
    let calificacion = await Grade.findByIdAndUpdate(id, {
        $set: {
            idReport: body.idReport,
            approved: body.approved,
            observationGrade: body.observationGrade,
            report: body.report,
            studentGrades: body.studentGrades
        }
    }, { new: true }); // Devuelve la nueva versión del documento
    return calificacion;
}

// Función asíncrona para listar todas las calificaciones
async function listarCalificaciones() {
    // Obtener todas las calificaciones de la base de datos
    let calificaciones = await Grade.find();
    return calificaciones;
}

// Función asíncrona para buscar una calificación por ID
async function buscarCalificacionPorId(id) {
    try {
        // Buscar la calificación por ID
        const calificacion = await Grade.findById(id);
        if (!calificacion) {
            throw new Error(`Calificación con ID ${id} no encontrada`);
        }
        return calificacion;
    } catch (err) {
        console.error(`Error al buscar la calificación por ID: ${err.message}`);
        throw err;
    }
}

// Función asíncrona para eliminar una calificación
async function eliminarCalificacion(id) {
    // Eliminar la calificación por ID
    const calificacion = await Grade.findByIdAndDelete(id);
    if (!calificacion) {
        throw new Error(`Calificación con ID ${id} no encontrada`);
    }
    return calificacion;
}

module.exports = {
    crearCalificacion,
    actualizarCalificacion,
    listarCalificaciones,
    buscarCalificacionPorId,
    eliminarCalificacion
};