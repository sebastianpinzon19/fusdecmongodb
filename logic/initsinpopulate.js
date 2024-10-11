const Unidad = require('../models/unidad_model');
const Brigada = require('../models/brigada_model');
const Usuario = require('../models/usuario_model');
const unidadSchemaValidation = require('../validations/unidad_validations');

// Función asíncrona para crear unidades
async function crearUnidad(body) {
    // Validar los datos de entrada
    const { error } = unidadSchemaValidation.validate(body);
    if (error) {
        throw new Error(error.details[0].message);
    }

    const unidad = new Unidad({
        nombreUnidad: body.nombreUnidad,
        estadoUnidad: body.estadoUnidad,
        brigadaId: body.brigadaId,
        usuarioId: body.usuarioId,
        estudiantes: body.estudiantes || [] // Asegurarse de que estudiantes sea un array
    });

    return await unidad.save();
}

// Función asíncrona para listar unidades
async function listarUnidades() {
    const unidades = await Unidad.find();
    const unidadesConDatos = await Promise.all(unidades.map(async (unidad) => {
        const brigada = await Brigada.findById(unidad.brigadaId);
        const usuario = await Usuario.findById(unidad.usuarioId);
        return {
            ...unidad.toObject(),
            brigadaNombre: brigada ? brigada.nombreComando : null, // Asumiendo que el modelo Brigada tiene un campo nombreComando
            usuarioEmail: usuario ? usuario.email : null // Asumiendo que el modelo Usuario tiene un campo email
        };
    }));
    return unidadesConDatos;
}

// Función asíncrona para buscar una unidad por su ID
async function buscarUnidadPorId(id) {
    const unidad = await Unidad.findById(id);
    if (!unidad) {
        throw new Error(`Unidad con ID ${id} no encontrada`);
    }
    const brigada = await Brigada.findById(unidad.brigadaId);
    const usuario = await Usuario.findById(unidad.usuarioId);
    return {
        ...unidad.toObject(),
        brigadaNombre: brigada ? brigada.nombreComando : null,
        usuarioEmail: usuario ? usuario.email : null
    };
}

// Función asíncrona para buscar unidades por brigadaId
async function buscarUnidadesPorBrigadaId(brigadaId) {
    const unidades = await Unidad.find({ brigadaId });
    if (unidades.length === 0) {
        throw new Error(`No se encontraron unidades para la brigada con ID ${brigadaId}`);
    }
    const unidadesConDatos = await Promise.all(unidades.map(async (unidad) => {
        const usuario = await Usuario.findById(unidad.usuarioId);
        return {
            ...unidad.toObject(),
            usuarioEmail: usuario ? usuario.email : null
        };
    }));
    return unidadesConDatos;
}

// Función asíncrona para buscar unidades por usuarioId
async function buscarUnidadesPorUsuarioId(usuarioId) {
    const unidades = await Unidad.find({ usuarioId });
    if (unidades.length === 0) {
        throw new Error(`No se encontraron unidades para el usuario con ID ${usuarioId}`);
    }
    const unidadesConDatos = await Promise.all(unidades.map(async (unidad) => {
        const brigada = await Brigada.findById(unidad.brigadaId);
        return {
            ...unidad.toObject(),
            brigadaNombre: brigada ? brigada.nombreComando : null
        };
    }));
    return unidadesConDatos;
}

// Función asíncrona para editar una unidad
async function editarUnidad(id, body) {
    const unidad = await Unidad.findByIdAndUpdate(id, body, { new: true });
    if (!unidad) {
        throw new Error(`Unidad con ID ${id} no encontrada`);
    }
    const brigada = await Brigada.findById(unidad.brigadaId);
    const usuario = await Usuario.findById(unidad.usuarioId);
    return {
        ...unidad.toObject(),
        brigadaNombre: brigada ? brigada.nombreComando : null,
        usuarioEmail: usuario ? usuario.email : null
    };
}

// Función asíncrona para eliminar una unidad
async function eliminarUnidad(id) {
    const unidad = await Unidad.findByIdAndDelete(id);
    if (!unidad) {
        throw new Error(`Unidad con ID ${id} no encontrada`);
    }
    return unidad;
}

module.exports = {
    crearUnidad,
    listarUnidades,
    buscarUnidadPorId,
    buscarUnidadesPorBrigadaId,
    buscarUnidadesPorUsuarioId,
    editarUnidad,
    eliminarUnidad
};
