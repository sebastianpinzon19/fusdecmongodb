const EditionLogic = require('../logic/EditionLogic'); // Importa la lógica de edición

// Controlador para crear una edición
async function crearEdicion(req, res) {
    try {
        // Llama a la lógica para crear una edición
        const edicion = await EditionLogic.crearEdicion(req.body);
        res.status(201).json(edicion); // Devuelve la edición creada
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para actualizar una edición
async function actualizarEdicion(req, res) {
    try {
        // Llama a la lógica para actualizar la edición
        const edicion = await EditionLogic.actualizarEdicion(req.params.id, req.body);
        res.json(edicion); // Devuelve la edición actualizada
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para listar todas las ediciones
async function listarEdiciones(req, res) {
    try {
        // Llama a la lógica para listar ediciones
        const ediciones = await EditionLogic.listarEdiciones();
        res.json(ediciones); // Devuelve la lista de ediciones
    } catch (error) {
        res.status(500).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para buscar una edición por ID
async function buscarEdicionPorId(req, res) {
    try {
        // Llama a la lógica para buscar la edición por ID
        const edicion = await EditionLogic.buscarEdicionPorId(req.params.id);
        res.json(edicion); // Devuelve la edición encontrada
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para eliminar una edición
async function eliminarEdicion(req, res) {
    try {
        // Llama a la lógica para eliminar la edición
        const edicion = await EditionLogic.eliminarEdicion(req.params.id);
        res.json({ message: 'Edición eliminada', edicion }); // Confirma la eliminación
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

module.exports = {
    crearEdicion,
    actualizarEdicion,
    listarEdiciones,
    buscarEdicionPorId,
    eliminarEdicion
};