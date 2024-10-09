const StudentEdition = require('../modelos/studentEdition'); // Importa el modelo de edición de estudiante

// Función asíncrona para crear un registro de edición de estudiante
async function crearEdicionEstudiante(body) {
    // Verificar si ya existe un registro de edición con el mismo ID
    const edicionEstudianteExistente = await StudentEdition.findOne({ idStudent: body.idStudent, idEdition: body.idEdition });
    if (edicionEstudianteExistente) {
        throw new Error('El registro de edición de estudiante con este ID ya existe');
    }
    // Crear una nueva instancia de edición de estudiante
    let edicionEstudiante = new StudentEdition({
        idStudent: body.idStudent,
        idEdition: body.idEdition,
        edition: body.edition,
        student: body.student
    });
    // Guardar el registro de edición en la base de datos
    return await edicionEstudiante.save();
}

// Función asíncrona para actualizar un registro de edición de estudiante
async function actualizarEdicionEstudiante(id, body) {
    // Actualizar el registro de edición por ID
    let edicionEstudiante = await StudentEdition.findByIdAndUpdate(id, {
        $set: {
            idStudent: body.idStudent,
            idEdition: body.idEdition,
            edition: body.edition,
            student: body.student
        }
    }, { new: true }); // Devuelve la nueva versión del documento
    return edicionEstudiante;
}

// Función asíncrona para listar todos los registros de edición de estudiantes
async function listarEdicionesEstudiantes() {
    // Obtener todos los registros de edición de la base de datos
    let edicionesEstudiantes = await StudentEdition.find();
    return edicionesEstudiantes;
}

// Función asíncrona para buscar un registro de edición de estudiante por ID
async function buscarEdicionEstudiantePorId(id) {
    try {
        // Buscar el registro de edición por ID
        const edicionEstudiante = await StudentEdition.findById(id);
        if (!edicionEstudiante) {
            throw new Error(`Registro de edición de estudiante con ID ${id} no encontrado`);
        }
        return edicionEstudiante;
    } catch (err) {
        console.error(`Error al buscar el registro de edición de estudiante por ID: ${err.message}`);
        throw err;
    }
}

// Función asíncrona para eliminar un registro de edición de estudiante
async function eliminarEdicionEstudiante(id) {
    // Eliminar el registro de edición por ID
    const edicionEstudiante = await StudentEdition.findByIdAndDelete(id);
    if (!edicionEstudiante) {
        throw new Error(`Registro de edición de estudiante con ID ${id} no encontrado`);
    }
    return edicionEstudiante;
}

module.exports = {
    crearEdicionEstudiante,
    actualizarEdicionEstudiante,
    listarEdicionesEstudiantes,
    buscarEdicionEstudiantePorId,
    eliminarEdicionEstudiante
};