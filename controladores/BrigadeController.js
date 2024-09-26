const BrigadeLogic = require('../logic/BrigadeLogic'); // Importa la lógica de brigada

// Controlador para crear una brigada
async function crearBrigada(req, res) {
    try {
        // Llama a la lógica para crear una brigada
        const brigada = await BrigadeLogic.crearBrigada(req.body);
        res.status(201).json(brigada); // Devuelve la brigada creada
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para actualizar una brigada
async function actualizarBrigada(req, res) {
    try {
        // Llama a la lógica para actualizar la brigada
        const brigada = await BrigadeLogic.actualizarBrigada(req.params.id, req.body);
        res.json(brigada); // Devuelve la brigada actualizada
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para listar todas las brigadas
async function listarBrigadas(req, res) {
    try {
        // Llama a la lógica para listar brigadas
        const brigadas = await BrigadeLogic.listarBrigadas();
        res.json(brigadas); // Devuelve la lista de brigadas
    } catch (error) {
        res.status(500).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para buscar una brigada por ID
async function buscarBrigadaPorId(req, res) {
    try {
        // Llama a la lógica para buscar la brigada por ID
        const brigada = await BrigadeLogic.buscarBrigadaPorId(req.params.id);
        res.json(brigada); // Devuelve la brigada encontrada
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para eliminar una brigada
async function eliminarBrigada(req, res) {
    try {
        // Llama a la lógica para eliminar la brigada
        const brigada = await BrigadeLogic.eliminarBrigada(req.params.id);
        res.json({ message: 'Brigada eliminada', brigada }); // Confirma la eliminación
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

module.exports = {
    crearBrigada,
    actualizarBrigada,
    listarBrigadas,
    buscarBrigadaPorId,
    eliminarBrigada
};