const Edition = require('../modelos/edition'); // Importa el modelo de edición

// Función asíncrona para crear una edición
async function crearEdicion(body) {
    // Verificar si ya existe una edición con el mismo ID
    const edicionExistente = await Edition.findOne({ idEdition: body.idEdition });
    if (edicionExistente) {
        throw new Error('La edición con este ID ya existe');
    }
    // Crear una nueva instancia de edición
    let edicion = new Edition({
        idEdition: body.idEdition,
        title: body.title,
        editionStartDate: body.editionStartDate,
        editionEndDate: body.editionEndDate,
        editionStatus: body.editionStatus,
        idCourse: body.idCourse,
        course: body.course,
        editionSchedules: body.editionSchedules,
        studentEditions: body.studentEditions
    });
    // Guardar la edición en la base de datos
    return await edicion.save();
}

// Función asíncrona para actualizar una edición
async function actualizarEdicion(id, body) {
    // Actualizar la edición por ID
    let edicion = await Edition.findByIdAndUpdate(id, {
        $set: {
            title: body.title,
            editionStartDate: body.editionStartDate,
            editionEndDate: body.editionEndDate,
            editionStatus: body.editionStatus,
            idCourse: body.idCourse,
            course: body.course,
            editionSchedules: body.editionSchedules,
            studentEditions: body.studentEditions
        }
    }, { new: true }); // Devuelve la nueva versión del documento
    return edicion;
}

// Función asíncrona para listar todas las ediciones
async function listarEdiciones() {
    // Obtener todas las ediciones de la base de datos
    let ediciones = await Edition.find();
    return ediciones;
}

// Función asíncrona para buscar una edición por ID
async function buscarEdicionPorId(id) {
    try {
        // Buscar la edición por ID
        const edicion = await Edition.findById(id);
        if (!edicion) {
            throw new Error(`Edición con ID ${id} no encontrada`);
        }
        return edicion;
    } catch (err) {
        console.error(`Error al buscar la edición por ID: ${err.message}`);
        throw err;
    }
}

// Función asíncrona para eliminar una edición
async function eliminarEdicion(id) {
    // Eliminar la edición por ID
    const edicion = await Edition.findByIdAndDelete(id);
    if (!edicion) {
        throw new Error(`Edición con ID ${id} no encontrada`);
    }
    return edicion;
}

module.exports = {
    crearEdicion,
    actualizarEdicion,
    listarEdiciones,
    buscarEdicionPorId,
    eliminarEdicion
};