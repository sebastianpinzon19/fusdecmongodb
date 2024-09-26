const Joi = require('@hapi/joi');

// Validaciones para el objeto no asistencia de estudiante
const studentNonAttendanceSchemaValidation = Joi.object({
    idStudent: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID del estudiante debe ser un texto',
            'any.required': 'El ID del estudiante es un campo requerido'
        }),
    idNonAttendance: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID de no asistencia debe ser un texto',
            'any.required': 'El ID de no asistencia es un campo requerido'
        }),
    student: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID del estudiante debe ser un texto',
            'any.required': 'El ID del estudiante es un campo requerido'
        }),
    nonAttendance: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID de no asistencia debe ser un texto',
            'any.required': 'El ID de no asistencia es un campo requerido'
        })
});

module.exports = { studentNonAttendanceSchemaValidation };