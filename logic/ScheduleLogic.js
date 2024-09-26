const Schedule = require('../modelos/schedule'); // Importa el modelo de horario

// Función asíncrona para crear un horario
async function crearHorario(body) {
    // Verificar si ya existe un horario con el mismo ID
    const horarioExistente = await Schedule.findOne({ idSchedule: body.idSchedule });
    if (horarioExistente) {
        throw new Error('El horario con este ID ya existe');
    }
    // Crear una nueva instancia de horario
    let horario = new Schedule({
        idSchedule: body.idSchedule,
        scheduleTitle: body.scheduleTitle,
        scheduleStartDate: body.scheduleStartDate,
        scheduleEndDate: body.scheduleEndDate,
        scheduleStatus: body.scheduleStatus,
        studentSchedules: body.studentSchedules
    });
    // Guardar el horario en la base de datos
    return await horario.save();
}

// Función asíncrona para actualizar un horario
async function actualizarHorario(id, body) {
    // Actualizar el horario por ID
    let horario = await Schedule.findByIdAndUpdate(id, {
        $set: {
            scheduleTitle: body.scheduleTitle,
            scheduleStartDate: body.scheduleStartDate,
            scheduleEndDate: body.scheduleEndDate,
            scheduleStatus: body.scheduleStatus,
            studentSchedules: body.studentSchedules
        }
    }, { new: true }); // Devuelve la nueva versión del documento
    return horario;
}

// Función asíncrona para listar todos los horarios
async function listarHorarios() {
    // Obtener todos los horarios de la base de datos
    let horarios = await Schedule.find();
    return horarios;
}

// Función asíncrona para buscar un horario por ID
async function buscarHorarioPorId(id) {
    try {
        // Buscar el horario por ID
        const horario = await Schedule.findById(id);
        if (!horario) {
            throw new Error(`Horario con ID ${id} no encontrado`);
        }
        return horario;
    } catch (err) {
        console.error(`Error al buscar el horario por ID: ${err.message}`);
        throw err;
    }
}

// Función asíncrona para eliminar un horario
async function eliminarHorario(id) {
    // Eliminar el horario por ID
    const horario = await Schedule.findByIdAndDelete(id);
    if (!horario) {
        throw new Error(`Horario con ID ${id} no encontrado`);
    }
    return horario;
}

module.exports = {
    crearHorario,
    actualizarHorario,
    listarHorarios,
    buscarHorarioPorId,
    eliminarHorario
};