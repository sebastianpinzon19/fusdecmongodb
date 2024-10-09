const StudentLogic = require('../logic/StudentLogic'); // Importa la lógica de estudiante

// Controlador para crear un estudiante
async function crearEstudiante(req, res) {
    try {
        // Llama a la lógica para crear un estudiante
        const estudiante = await StudentLogic.crearEstudiante(req.body);
        res.status(201).json(estudiante); // Devuelve el estudiante creado
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para actualizar un estudiante
async function actualizarEstudiante(req, res) {
    try {
        // Llama a la lógica para actualizar el estudiante
        const estudiante = await StudentLogic.actualizarEstudiante(req.params.id, req.body);
        res.json(estudiante); // Devuelve el estudiante actualizado
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para listar todos los estudiantes
async function listarEstudiantes(req, res) {
    try {
        // Llama a la lógica para listar estudiantes
        const estudiantes = await StudentLogic.listarEstudiantes();
        res.json(estudiantes); // Devuelve la lista de estudiantes
    } catch (error) {
        res.status(500).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para buscar un estudiante por ID
async function buscarEstudiantePorId(req, res) {
    try {
        // Llama a la lógica para buscar el estudiante por ID
        const estudiante = await StudentLogic.buscarEstudiantePorId(req.params.id);
        res.json(estudiante); // Devuelve el estudiante encontrado
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para eliminar un estudiante
async function eliminarEstudiante(req, res) {
    try {
        // Llama a la lógica para eliminar el estudiante
        const estudiante = await StudentLogic.eliminarEstudiante(req.params.id);
        res.json({ message: 'Estudiante eliminado', estudiante }); // Confirma la eliminación
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

module.exports = {
    crearEstudiante,
    actualizarEstudiante,
    listarEstudiantes,
    buscarEstudiantePorId,
    eliminarEstudiante
};