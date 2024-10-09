const CourseLogic = require('../logic/CourseLogic'); // Importa la lógica de curso

// Controlador para crear un curso
async function crearCurso(req, res) {
    try {
        // Llama a la lógica para crear un curso
        const curso = await CourseLogic.crearCurso(req.body);
        res.status(201).json(curso); // Devuelve el curso creado
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para actualizar un curso
async function actualizarCurso(req, res) {
    try {
        // Llama a la lógica para actualizar el curso
        const curso = await CourseLogic.actualizarCurso(req.params.id, req.body);
        res.json(curso); // Devuelve el curso actualizado
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para listar todos los cursos
async function listarCursos(req, res) {
    try {
        // Llama a la lógica para listar cursos
        const cursos = await CourseLogic.listarCursos();
        res.json(cursos); // Devuelve la lista de cursos
    } catch (error) {
        res.status(500).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para buscar un curso por ID
async function buscarCursoPorId(req, res) {
    try {
        // Llama a la lógica para buscar el curso por ID
        const curso = await CourseLogic.buscarCursoPorId(req.params.id);
        res.json(curso); // Devuelve el curso encontrado
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para eliminar un curso
async function eliminarCurso(req, res) {
    try {
        // Llama a la lógica para eliminar el curso
        const curso = await CourseLogic.eliminarCurso(req.params.id);
        res.json({ message: 'Curso eliminado', curso }); // Confirma la eliminación
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

module.exports = {
    crearCurso,
    actualizarCurso,
    listarCursos,
    buscarCursoPorId,
    eliminarCurso
};