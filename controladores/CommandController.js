const CommandLogic = require('../logic/CommandLogic'); // Importa la lógica de comando

// Controlador para crear un comando
async function crearComando(req, res) {
    try {
        // Llama a la lógica para crear un comando
        const comando = await CommandLogic.crearComando(req.body);
        res.status(201).json(comando); // Devuelve el comando creado
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para actualizar un comando
async function actualizarComando(req, res) {
    try {
        // Llama a la lógica para actualizar el comando
        const comando = await CommandLogic.actualizarComando(req.params.id, req.body);
        res.json(comando); // Devuelve el comando actualizado
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para listar todos los comandos
async function listarComandos(req, res) {
    try {
        // Llama a la lógica para listar comandos
        const comandos = await CommandLogic.listarComandos();
        res.json(comandos); // Devuelve la lista de comandos
    } catch (error) {
        res.status(500).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para buscar un comando por ID
async function buscarComandoPorId(req, res) {
    try {
        // Llama a la lógica para buscar el comando por ID
        const comando = await CommandLogic.buscarComandoPorId(req.params.id);
        res.json(comando); // Devuelve el comando encontrado
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para eliminar un comando
async function eliminarComando(req, res) {
    try {
        // Llama a la lógica para eliminar el comando
        const comando = await CommandLogic.eliminarComando(req.params.id);
        res.json({ message: 'Comando eliminado', comando }); // Confirma la eliminación
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

module.exports = {
    crearComando,
    actualizarComando,
    listarComandos,
    buscarComandoPorId,
    eliminarComando
};