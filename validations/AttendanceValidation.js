const Joi = require('@hapi/joi');

// Validaciones para el objeto asistencia
const attendanceSchemaValidation = Joi.object({
    idAttendance: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID de asistencia debe ser un texto',
            'any.required': 'El ID de asistencia es un campo requerido'
        }),
    date: Joi.date()
        .required()
        .messages({
            'date.base': 'La fecha debe ser una fecha válida',
            'any.required': 'La fecha es un campo requerido'
        }),
    status: Joi.boolean()
        .default(true)
        .messages({
            'boolean.base': 'El estado debe ser un valor booleano, verdadero o falso'
        }),
    studentId: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID del estudiante debe ser un texto',
            'any.required': 'El ID del estudiante es un campo requerido'
        })
});

module.exports = { attendanceSchemaValidation };