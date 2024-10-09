const UnitLogic = require('../logic/UnitLogic'); // Importa la lógica de unidad

// Controlador para crear una unidad
async function crearUnidad(req, res) {
    try {
        // Llama a la lógica para crear una unidad
        const unidad = await UnitLogic.crearUnidad(req.body);
        res.status(201).json(unidad); // Devuelve la unidad creada
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para actualizar una unidad
async function actualizarUnidad(req, res) {
    try {
        // Llama a la lógica para actualizar la unidad
        const unidad = await UnitLogic.actualizarUnidad(req.params.id, req.body);
        res.json(unidad); // Devuelve la unidad actualizada
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para listar todas las unidades
async function listarUnidades(req, res) {
    try {
        // Llama a la lógica para listar unidades
        const unidades = await UnitLogic.listarUnidades();
        res.json(unidades); // Devuelve la lista de unidades
    } catch (error) {
        res.status(500).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para buscar una unidad por ID
async function buscarUnidadPorId(req, res) {
    try {
        // Llama a la lógica para buscar la unidad por ID
        const unidad = await UnitLogic.buscarUnidadPorId(req.params.id);
        res.json(unidad); // Devuelve la unidad encontrada
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para eliminar una unidad
async function eliminarUnidad(req, res) {
    try {
        // Llama a la lógica para eliminar la unidad
        const unidad = await UnitLogic.eliminarUnidad(req.params.id);
        res.json({ message: 'Unidad eliminada', unidad }); // Confirma la eliminación
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

module.exports = {
    crearUnidad,
    actualizarUnidad,
    listarUnidades,
    buscarUnidadPorId,
    eliminarUnidad
};