const Fundation = require('../modelos/Fundations'); // Importa el modelo de fundación

// Función asíncrona para crear una fundación
async function crearFundacion(body) {
    // Verificar si ya existe una fundación con el mismo ID
    const fundacionExistente = await Fundation.findOne({ idFundation: body.idFundation });
    if (fundacionExistente) {
        throw new Error('La fundación con este ID ya existe');
    }
    // Crear una nueva instancia de fundación
    let fundacion = new Fundation({
        idFundation: body.idFundation,
        fundationName: body.fundationName,
        commands: body.commands,
        courses: body.courses
    });
    // Guardar la fundación en la base de datos
    return await fundacion.save();
}

// Función asíncrona para actualizar una fundación
async function actualizarFundacion(id, body) {
    // Actualizar la fundación por ID
    let fundacion = await Fundation.findByIdAndUpdate(id, {
        $set: {
            fundationName: body.fundationName,
            commands: body.commands,
            courses: body.courses
        }
    }, { new: true }); // Devuelve la nueva versión del documento
    return fundacion;
}

// Función asíncrona para listar todas las fundaciones
async function listarFundaciones() {
    // Obtener todas las fundaciones de la base de datos
    let fundaciones = await Fundation.find();
    return fundaciones;
}

// Función asíncrona para buscar una fundación por ID
async function buscarFundacionPorId(id) {
    try {
        // Buscar la fundación por ID
        const fundacion = await Fundation.findById(id);
        if (!fundacion) {
            throw new Error(`Fundación con ID ${id} no encontrada`);
        }
        return fundacion;
    } catch (err) {
        console.error(`Error al buscar la fundación por ID: ${err.message}`);
        throw err;
    }
}

// Función asíncrona para eliminar una fundación
async function eliminarFundacion(id) {
    // Eliminar la fundación por ID
    const fundacion = await Fundation.findByIdAndDelete(id);
    if (!fundacion) {
        throw new Error(`Fundación con ID ${id} no encontrada`);
    }
    return fundacion;
}

module.exports = {
    crearFundacion,
    actualizarFundacion,
    listarFundaciones,
    buscarFundacionPorId,
    eliminarFundacion
};