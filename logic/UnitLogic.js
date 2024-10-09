const Unit = require('../modelos/unit'); // Importa el modelo de unidad

// Función asíncrona para crear una unidad
async function crearUnidad(body) {
    // Verificar si ya existe una unidad con el mismo ID
    const unidadExistente = await Unit.findOne({ idUnit: body.idUnit });
    if (unidadExistente) {
        throw new Error('La unidad con este ID ya existe');
    }
    // Crear una nueva instancia de unidad
    let unidad = new Unit({
        idUnit: body.idUnit,
        unitName: body.unitName,
        unitState: body.unitState,
        unitLocation: body.unitLocation,
        idBrigade: body.idBrigade,
        brigade: body.brigade,
        students: body.students
    });
    // Guardar la unidad en la base de datos
    return await unidad.save();
}

// Función asíncrona para actualizar una unidad
async function actualizarUnidad(id, body) {
    // Actualizar la unidad por ID
    let unidad = await Unit.findByIdAndUpdate(id, {
        $set: {
            unitName: body.unitName,
            unitState: body.unitState,
            unitLocation: body.unitLocation,
            idBrigade: body.idBrigade,
            brigade: body.brigade,
            students: body.students
        }
    }, { new: true }); // Devuelve la nueva versión del documento
    return unidad;
}

// Función asíncrona para listar todas las unidades
async function listarUnidades() {
    // Obtener todas las unidades de la base de datos
    let unidades = await Unit.find();
    return unidades;
}

// Función asíncrona para buscar una unidad por ID
async function buscarUnidadPorId(id) {
    try {
        // Buscar la unidad por ID
        const unidad = await Unit.findById(id);
        if (!unidad) {
            throw new Error(`Unidad con ID ${id} no encontrada`);
        }
        return unidad;
    } catch (err) {
        console.error(`Error al buscar la unidad por ID: ${err.message}`);
        throw err;
    }
}

// Función asíncrona para eliminar una unidad
async function eliminarUnidad(id) {
    // Eliminar la unidad por ID
    const unidad = await Unit.findByIdAndDelete(id);
    if (!unidad) {
        throw new Error(`Unidad con ID ${id} no encontrada`);
    }
    return unidad;
}

module.exports = {
    crearUnidad,
    actualizarUnidad,
    listarUnidades,
    buscarUnidadPorId,
    eliminarUnidad
};