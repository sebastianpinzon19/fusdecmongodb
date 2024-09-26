const FundationLogic = require('../logic/FundationLogic'); // Importa la lógica de fundación

// Controlador para crear una fundación
async function crearFundacion(req, res) {
    try {
        // Llama a la lógica para crear una fundación
        const fundacion = await FundationLogic.crearFundacion(req.body);
        res.status(201).json(fundacion); // Devuelve la fundación creada
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para actualizar una fundación
async function actualizarFundacion(req, res) {
    try {
        // Llama a la lógica para actualizar la fundación
        const fundacion = await FundationLogic.actualizarFundacion(req.params.id, req.body);
        res.json(fundacion); // Devuelve la fundación actualizada
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para listar todas las fundaciones
async function listarFundaciones(req, res) {
    try {
        // Llama a la lógica para listar fundaciones
        const fundaciones = await FundationLogic.listarFundaciones();
        res.json(fundaciones); // Devuelve la lista de fundaciones
    } catch (error) {
        res.status(500).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para buscar una fundación por ID
async function buscarFundacionPorId(req, res) {
    try {
        // Llama a la lógica para buscar la fundación por ID
        const fundacion = await FundationLogic.buscarFundacionPorId(req.params.id);
        res.json(fundacion); // Devuelve la fundación encontrada
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para eliminar una fundación
async function eliminarFundacion(req, res) {
    try {
        // Llama a la lógica para eliminar la fundación
        const fundacion = await FundationLogic.eliminarFundacion(req.params.id);
        res.json({ message: 'Fundación eliminada', fundacion }); // Confirma la eliminación
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

module.exports = {
    crearFundacion,
    actualizarFundacion,
    listarFundaciones,
    buscarFundacionPorId,
    eliminarFundacion
};