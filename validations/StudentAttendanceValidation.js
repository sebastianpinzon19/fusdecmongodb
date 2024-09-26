const Joi = require('@hapi/joi');

// Validaciones para el objeto asistencia de estudiante
const studentAttendanceSchemaValidation = Joi.object({
    idStudent: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID del estudiante debe ser un texto',
            'any.required': 'El ID del estudiante es un campo requerido'
        }),
    idAttendance: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID de la asistencia debe ser un texto',
            'any.required': 'El ID de la asistencia es un campo requerido'
        }),
    student: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID del estudiante debe ser un texto',
            'any.required': 'El ID del estudiante es un campo requerido'
        }),
    attendance: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID de la asistencia debe ser un texto',
            'any.required': 'El ID de la asistencia es un campo requerido'
        })
});

module.exports = { studentAttendanceSchemaValidation };