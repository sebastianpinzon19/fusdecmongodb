const Joi = require('@hapi/joi');

// Validaciones para el objeto edición de estudiante
const studentEditionSchemaValidation = Joi.object({
    idStudent: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID del estudiante debe ser un texto',
            'any.required': 'El ID del estudiante es un campo requerido'
        }),
    idEdition: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID de la edición debe ser un texto',
            'any.required': 'El ID de la edición es un campo requerido'
        }),
    edition: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID de la edición debe ser un texto',
            'any.required': 'El ID de la edición es un campo requerido'
        }),
    student: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID del estudiante debe ser un texto',
            'any.required': 'El ID del estudiante es un campo requerido'
        })
});

module.exports = { studentEditionSchemaValidation };