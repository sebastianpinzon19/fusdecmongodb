const EditionSchedule = require('../modelos/editionSchedule'); // Importa el modelo de programación de ediciones

// Función asíncrona para crear una programación de edición
async function crearProgramacionEdicion(body) {
    // Verificar si ya existe una programación de edición con el mismo ID
    const programacionExistente = await EditionSchedule.findOne({ idEdition: body.idEdition, idSchedule: body.idSchedule });
    if (programacionExistente) {
        throw new Error('La programación de edición con este ID ya existe');
    }
    // Crear una nueva instancia de programación de edición
    let programacion = new EditionSchedule({
        idEdition: body.idEdition,
        idSchedule: body.idSchedule,
        schedule: body.schedule,
        edition: body.edition
    });
    // Guardar la programación en la base de datos
    return await programacion.save();
}

// Función asíncrona para actualizar una programación de edición
async function actualizarProgramacionEdicion(id, body) {
    // Actualizar la programación de edición por ID
    let programacion = await EditionSchedule.findByIdAndUpdate(id, {
        $set: {
            idEdition: body.idEdition,
            idSchedule: body.idSchedule,
            schedule: body.schedule,
            edition: body.edition
        }
    }, { new: true }); // Devuelve la nueva versión del documento
    return programacion;
}

// Función asíncrona para listar todas las programaciones de ediciones
async function listarProgramacionesEdicion() {
    // Obtener todas las programaciones de ediciones de la base de datos
    let programaciones = await EditionSchedule.find();
    return programaciones;
}

// Función asíncrona para buscar una programación de edición por ID
async function buscarProgramacionEdicionPorId(id) {
    try {
        // Buscar la programación de edición por ID
        const programacion = await EditionSchedule.findById(id);
        if (!programacion) {
            throw new Error(`Programación de edición con ID ${id} no encontrada`);
        }
        return programacion;
    } catch (err) {
        console.error(`Error al buscar la programación de edición por ID: ${err.message}`);
        throw err;
    }
}

// Función asíncrona para eliminar una programación de edición
async function eliminarProgramacionEdicion(id) {
    // Eliminar la programación de edición por ID
    const programacion = await EditionSchedule.findByIdAndDelete(id);
    if (!programacion) {
        throw new Error(`Programación de edición con ID ${id} no encontrada`);
    }
    return programacion;
}

module.exports = {
    crearProgramacionEdicion,
    actualizarProgramacionEdicion,
    listarProgramacionesEdicion,
    buscarProgramacionEdicionPorId,
    eliminarProgramacionEdicion
};