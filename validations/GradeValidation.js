const Joi = require('@hapi/joi');

// Validaciones para el objeto calificación
const gradeSchemaValidation = Joi.object({
    idGrade: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID de la calificación debe ser un texto',
            'any.required': 'El ID de la calificación es un campo requerido'
        }),
    value: Joi.number()
        .min(0)
        .max(100)
        .required()
        .messages({
            'number.base': 'El valor debe ser un número',
            'number.min': 'El valor no puede ser menor que 0',
            'number.max': 'El valor no puede ser mayor que 100',
            'any.required': 'El valor es un campo requerido'
        }),
    studentId: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID del estudiante debe ser un texto',
            'any.required': 'El ID del estudiante es un campo requerido'
        })
});

module.exports = { gradeSchemaValidation };