const Course = require('../modelos/courses'); // Importa el modelo de curso

// Función asíncrona para crear un curso
async function crearCurso(body) {
    // Verificar si ya existe un curso con el mismo ID
    const cursoExistente = await Course.findOne({ idCourse: body.idCourse });
    if (cursoExistente) {
        throw new Error('El curso con este ID ya existe');
    }
    // Crear una nueva instancia de curso
    let curso = new Course({
        idCourse: body.idCourse,
        courseName: body.courseName,
        courseDescription: body.courseDescription,
        courseHourlyIntensity: body.courseHourlyIntensity,
        courseEstatus: body.courseEstatus,
        idFundation: body.idFundation,
        editions: body.editions,
        certificates: body.certificates
    });
    // Guardar el curso en la base de datos
    return await curso.save();
}

// Función asíncrona para actualizar un curso
async function actualizarCurso(id, body) {
    // Actualizar el curso por ID
    let curso = await Course.findByIdAndUpdate(id, {
        $set: {
            courseName: body.courseName,
            courseDescription: body.courseDescription,
            courseHourlyIntensity: body.courseHourlyIntensity,
            courseEstatus: body.courseEstatus,
            idFundation: body.idFundation,
            editions: body.editions,
            certificates: body.certificates
        }
    }, { new: true }); // Devuelve la nueva versión del documento
    return curso;
}

// Función asíncrona para listar todos los cursos
async function listarCursos() {
    // Obtener todos los cursos de la base de datos
    let cursos = await Course.find();
    return cursos;
}

// Función asíncrona para buscar un curso por ID
async function buscarCursoPorId(id) {
    try {
        // Buscar el curso por ID
        const curso = await Course.findById(id);
        if (!curso) {
            throw new Error(`Curso con ID ${id} no encontrado`);
        }
        return curso;
    } catch (err) {
        console.error(`Error al buscar el curso por ID: ${err.message}`);
        throw err;
    }
}

// Función asíncrona para eliminar un curso
async function eliminarCurso(id) {
    // Eliminar el curso por ID
    const curso = await Course.findByIdAndDelete(id);
    if (!curso) {
        throw new Error(`Curso con ID ${id} no encontrado`);
    }
    return curso;
}

module.exports = {
    crearCurso,
    actualizarCurso,
    listarCursos,
    buscarCursoPorId,
    eliminarCurso
};