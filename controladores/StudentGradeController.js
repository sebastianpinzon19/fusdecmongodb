const StudentGradeLogic = require('../logic/StudentGradeLogic'); // Importa la lógica de calificación de estudiante

// Controlador para crear un registro de calificación de estudiante
async function crearCalificacionEstudiante(req, res) {
    try {
        // Llama a la lógica para crear un registro de calificación
        const calificacionEstudiante = await StudentGradeLogic.crearCalificacionEstudiante(req.body);
        res.status(201).json(calificacionEstudiante); // Devuelve el registro de calificación creado
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para actualizar un registro de calificación de estudiante
async function actualizarCalificacionEstudiante(req, res) {
    try {
        // Llama a la lógica para actualizar el registro de calificación
        const calificacionEstudiante = await StudentGradeLogic.actualizarCalificacionEstudiante(req.params.id, req.body);
        res.json(calificacionEstudiante); // Devuelve el registro de calificación actualizado
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para listar todos los registros de calificación de estudiantes
async function listarCalificacionesEstudiantes(req, res) {
    try {
        // Llama a la lógica para listar registros de calificación
        const calificacionesEstudiantes = await StudentGradeLogic.listarCalificacionesEstudiantes();
        res.json(calificacionesEstudiantes); // Devuelve la lista de registros de calificación
    } catch (error) {
        res.status(500).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para buscar un registro de calificación de estudiante por ID
async function buscarCalificacionEstudiantePorId(req, res) {
    try {
        // Llama a la lógica para buscar el registro de calificación por ID
        const calificacionEstudiante = await StudentGradeLogic.buscarCalificacionEstudiantePorId(req.params.id);
        res.json(calificacionEstudiante); // Devuelve el registro de calificación encontrado
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para eliminar un registro de calificación de estudiante
async function eliminarCalificacionEstudiante(req, res) {
    try {
        // Llama a la lógica para eliminar el registro de calificación
        const calificacionEstudiante = await StudentGradeLogic.eliminarCalificacionEstudiante(req.params.id);
        res.json({ message: 'Registro de calificación de estudiante eliminado', calificacionEstudiante }); // Confirma la eliminación
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

module.exports = {
    crearCalificacionEstudiante,
    actualizarCalificacionEstudiante,
    listarCalificacionesEstudiantes,
    buscarCalificacionEstudiantePorId,
    eliminarCalificacionEstudiante
};