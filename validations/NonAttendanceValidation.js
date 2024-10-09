const Joi = require('@hapi/joi');

// Validaciones para el objeto no asistencia
const nonAttendanceSchemaValidation = Joi.object({
    idNonAttendance: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID de no asistencia debe ser un texto',
            'any.required': 'El ID de no asistencia es un campo requerido'
        }),
    studentId: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID del estudiante debe ser un texto',
            'any.required': 'El ID del estudiante es un campo requerido'
        }),
    date: Joi.date()
        .required()
        .messages({
            'date.base': 'La fecha debe ser una fecha válida',
            'any.required': 'La fecha es un campo requerido'
        }),
    reason: Joi.string()
        .optional()
        .allow('')
        .messages({
            'string.base': 'El motivo debe ser un texto'
        })
});

module.exports = { nonAttendanceSchemaValidation };