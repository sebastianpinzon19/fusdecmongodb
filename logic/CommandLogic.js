const Command = require('../modelos/command'); // Importa el modelo de comando

// Función asíncrona para crear un comando
async function crearComando(body) {
    // Verificar si ya existe un comando con el mismo ID
    const comandoExistente = await Command.findOne({ idCommand: body.idCommand });
    if (comandoExistente) {
        throw new Error('El comando con este ID ya existe');
    }
    // Crear una nueva instancia de comando
    let comando = new Command({
        idCommand: body.idCommand,
        commandName: body.commandName,
        commandStatus: body.commandStatus,
        ubicacionComando: body.ubicacionComando,
        idFundation: body.idFundation,
        brigades: body.brigades
    });
    // Guardar el comando en la base de datos
    return await comando.save();
}

// Función asíncrona para actualizar un comando
async function actualizarComando(id, body) {
    // Actualizar el comando por ID
    let comando = await Command.findByIdAndUpdate(id, {
        $set: {
            commandName: body.commandName,
            commandStatus: body.commandStatus,
            ubicacionComando: body.ubicacionComando,
            idFundation: body.idFundation,
            brigades: body.brigades
        }
    }, { new: true }); // Devuelve la nueva versión del documento
    return comando;
}

// Función asíncrona para listar todos los comandos
async function listarComandos() {
    // Obtener todos los comandos de la base de datos
    let comandos = await Command.find();
    return comandos;
}

// Función asíncrona para buscar un comando por ID
async function buscarComandoPorId(id) {
    try {
        // Buscar el comando por ID
        const comando = await Command.findById(id);
        if (!comando) {
            throw new Error(`Comando con ID ${id} no encontrado`);
        }
        return comando;
    } catch (err) {
        console.error(`Error al buscar el comando por ID: ${err.message}`);
        throw err;
    }
}

// Función asíncrona para eliminar un comando
async function eliminarComando(id) {
    // Eliminar el comando por ID
    const comando = await Command.findByIdAndDelete(id);
    if (!comando) {
        throw new Error(`Comando con ID ${id} no encontrado`);
    }
    return comando;
}

module.exports = {
    crearComando,
    actualizarComando,
    listarComandos,
    buscarComandoPorId,
    eliminarComando
};