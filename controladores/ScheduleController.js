const ScheduleLogic = require('../logic/ScheduleLogic'); // Importa la lógica de horario

// Controlador para crear un horario
async function crearHorario(req, res) {
    try {
        // Llama a la lógica para crear un horario
        const horario = await ScheduleLogic.crearHorario(req.body);
        res.status(201).json(horario); // Devuelve el horario creado
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para actualizar un horario
async function actualizarHorario(req, res) {
    try {
        // Llama a la lógica para actualizar el horario
        const horario = await ScheduleLogic.actualizarHorario(req.params.id, req.body);
        res.json(horario); // Devuelve el horario actualizado
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para listar todos los horarios
async function listarHorarios(req, res) {
    try {
        // Llama a la lógica para listar horarios
        const horarios = await ScheduleLogic.listarHorarios();
        res.json(horarios); // Devuelve la lista de horarios
    } catch (error) {
        res.status(500).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para buscar un horario por ID
async function buscarHorarioPorId(req, res) {
    try {
        // Llama a la lógica para buscar el horario por ID
        const horario = await ScheduleLogic.buscarHorarioPorId(req.params.id);
        res.json(horario); // Devuelve el horario encontrado
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para eliminar un horario
async function eliminarHorario(req, res) {
    try {
        // Llama a la lógica para eliminar el horario
        const horario = await ScheduleLogic.eliminarHorario(req.params.id);
        res.json({ message: 'Horario eliminado', horario }); // Confirma la eliminación
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

module.exports = {
    crearHorario,
    actualizarHorario,
    listarHorarios,
    buscarHorarioPorId,
    eliminarHorario
};