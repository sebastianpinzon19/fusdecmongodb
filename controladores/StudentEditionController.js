const StudentEditionLogic = require('../logic/StudentEditionLogic'); // Importa la lógica de edición de estudiante

// Controlador para crear un registro de edición de estudiante
async function crearEdicionEstudiante(req, res) {
    try {
        // Llama a la lógica para crear un registro de edición
        const edicionEstudiante = await StudentEditionLogic.crearEdicionEstudiante(req.body);
        res.status(201).json(edicionEstudiante); // Devuelve el registro de edición creado
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para actualizar un registro de edición de estudiante
async function actualizarEdicionEstudiante(req, res) {
    try {
        // Llama a la lógica para actualizar el registro de edición
        const edicionEstudiante = await StudentEditionLogic.actualizarEdicionEstudiante(req.params.id, req.body);
        res.json(edicionEstudiante); // Devuelve el registro de edición actualizado
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para listar todos los registros de edición de estudiantes
async function listarEdicionesEstudiantes(req, res) {
    try {
        // Llama a la lógica para listar registros de edición
        const edicionesEstudiantes = await StudentEditionLogic.listarEdicionesEstudiantes();
        res.json(edicionesEstudiantes); // Devuelve la lista de registros de edición
    } catch (error) {
        res.status(500).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para buscar un registro de edición de estudiante por ID
async function buscarEdicionEstudiantePorId(req, res) {
    try {
        // Llama a la lógica para buscar el registro de edición por ID
        const edicionEstudiante = await StudentEditionLogic.buscarEdicionEstudiantePorId(req.params.id);
        res.json(edicionEstudiante); // Devuelve el registro de edición encontrado
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para eliminar un registro de edición de estudiante
async function eliminarEdicionEstudiante(req, res) {
    try {
        // Llama a la lógica para eliminar el registro de edición
        const edicionEstudiante = await StudentEditionLogic.eliminarEdicionEstudiante(req.params.id);
        res.json({ message: 'Registro de edición de estudiante eliminado', edicionEstudiante }); // Confirma la eliminación
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

module.exports = {
    crearEdicionEstudiante,
    actualizarEdicionEstudiante,
    listarEdicionesEstudiantes,
    buscarEdicionEstudiantePorId,
    eliminarEdicionEstudiante
};