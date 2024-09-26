const Joi = require('@hapi/joi');

// Validaciones para el objeto calificación de estudiante
const studentGradeSchemaValidation = Joi.object({
    idStudent: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID del estudiante debe ser un texto',
            'any.required': 'El ID del estudiante es un campo requerido'
        }),
    idGrade: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID de la calificación debe ser un texto',
            'any.required': 'El ID de la calificación es un campo requerido'
        }),
    grade: Joi.number()
        .min(0)
        .max(100)
        .required()
        .messages({
            'number.base': 'La calificación debe ser un número',
            'number.min': 'La calificación no puede ser menor que 0',
            'number.max': 'La calificación no puede ser mayor que 100',
            'any.required': 'La calificación es un campo requerido'
        }),
    student: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID del estudiante debe ser un texto',
            'any.required': 'El ID del estudiante es un campo requerido'
        })
});

module.exports = { studentGradeSchemaValidation };