const Student = require('../modelos/student'); // Importa el modelo de estudiante

// Función asíncrona para crear un estudiante
async function crearEstudiante(body) {
    // Verificar si ya existe un estudiante con el mismo ID
    const estudianteExistente = await Student.findOne({ idStudent: body.idStudent });
    if (estudianteExistente) {
        throw new Error('El estudiante con este ID ya existe');
    }
    // Crear una nueva instancia de estudiante
    let estudiante = new Student({
        idStudent: body.idStudent,
        studentName: body.studentName,
        studentLastName: body.studentLastName,
        documentType: body.documentType,
        documentNumber: body.documentNumber,
        studentDateBirth: body.studentDateBirth,
        studentGender: body.studentGender,
        idUnit: body.idUnit,
        idSchool: body.idSchool,
        studentStatus: body.studentStatus,
        studentEditions: body.studentEditions,
        studentGrades: body.studentGrades,
        studentNonAttendances: body.studentNonAttendances,
        studentAttendances: body.studentAttendances,
        certificates: body.certificates
    });
    // Guardar el estudiante en la base de datos
    return await estudiante.save();
}

// Función asíncrona para actualizar un estudiante
async function actualizarEstudiante(id, body) {
    // Actualizar el estudiante por ID
    let estudiante = await Student.findByIdAndUpdate(id, {
        $set: {
            studentName: body.studentName,
            studentLastName: body.studentLastName,
            documentType: body.documentType,
            documentNumber: body.documentNumber,
            studentDateBirth: body.studentDateBirth,
            studentGender: body.studentGender,
            idUnit: body.idUnit,
            idSchool: body.idSchool,
            studentStatus: body.studentStatus,
            studentEditions: body.studentEditions,
            studentGrades: body.studentGrades,
            studentNonAttendances: body.studentNonAttendances,
            studentAttendances: body.studentAttendances,
            certificates: body.certificates
        }
    }, { new: true }); // Devuelve la nueva versión del documento
    return estudiante;
}

// Función asíncrona para listar todos los estudiantes
async function listarEstudiantes() {
    // Obtener todos los estudiantes de la base de datos
    let estudiantes = await Student.find();
    return estudiantes;
}

// Función asíncrona para buscar un estudiante por ID
async function buscarEstudiantePorId(id) {
    try {
        // Buscar el estudiante por ID
        const estudiante = await Student.findById(id);
        if (!estudiante) {
            throw new Error(`Estudiante con ID ${id} no encontrado`);
        }
        return estudiante;
    } catch (err) {
        console.error(`Error al buscar el estudiante por ID: ${err.message}`);
        throw err;
    }
}

// Función asíncrona para eliminar un estudiante
async function eliminarEstudiante(id) {
    // Eliminar el estudiante por ID
    const estudiante = await Student.findByIdAndDelete(id);
    if (!estudiante) {
        throw new Error(`Estudiante con ID ${id} no encontrado`);
    }
    return estudiante;
}

module.exports = {
    crearEstudiante,
    actualizarEstudiante,
    listarEstudiantes,
    buscarEstudiantePorId,
    eliminarEstudiante
};