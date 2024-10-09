const Brigade = require('../modelos/brigade'); // Importa el modelo de brigada

// Función asíncrona para crear una brigada
async function crearBrigada(body) {
    // Verificar si ya existe una brigada con el mismo ID
    const brigadaExistente = await Brigade.findOne({ idBrigade: body.idBrigade });
    if (brigadaExistente) {
        throw new Error('La brigada con este ID ya existe');
    }
    // Crear una nueva instancia de brigada
    let brigada = new Brigade({
        idBrigade: body.idBrigade,
        brigadeName: body.brigadeName,
        brigadeLocation: body.brigadeLocation,
        brigadeStatus: body.brigadeStatus,
        idCommand: body.idCommand,
        command: body.command,
        units: body.units
    });
    // Guardar la brigada en la base de datos
    return await brigada.save();
}

// Función asíncrona para actualizar una brigada
async function actualizarBrigada(id, body) {
    // Actualizar la brigada por ID
    let brigada = await Brigade.findByIdAndUpdate(id, {
        $set: {
            brigadeName: body.brigadeName,
            brigadeLocation: body.brigadeLocation,
            brigadeStatus: body.brigadeStatus,
            idCommand: body.idCommand,
            command: body.command,
            units: body.units
        }
    }, { new: true }); // Devuelve la nueva versión del documento
    return brigada;
}

// Función asíncrona para listar todas las brigadas
async function listarBrigadas() {
    // Obtener todas las brigadas de la base de datos
    let brigadas = await Brigade.find();
    return brigadas;
}

// Función asíncrona para buscar una brigada por ID
async function buscarBrigadaPorId(id) {
    try {
        // Buscar la brigada por ID
        const brigada = await Brigade.findById(id);
        if (!brigada) {
            throw new Error(`Brigada con ID ${id} no encontrada`);
        }
        return brigada;
    } catch (err) {
        console.error(`Error al buscar la brigada por ID: ${err.message}`);
        throw err;
    }
}

// Función asíncrona para eliminar una brigada
async function eliminarBrigada(id) {
    // Eliminar la brigada por ID
    const brigada = await Brigade.findByIdAndDelete(id);
    if (!brigada) {
        throw new Error(`Brigada con ID ${id} no encontrada`);
    }
    return brigada;
}

module.exports = {
    crearBrigada,
    actualizarBrigada,
    listarBrigadas,
    buscarBrigadaPorId,
    eliminarBrigada
};