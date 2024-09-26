const Joi = require('@hapi/joi');

// Validaciones para el objeto estudiante
const studentSchemaValidation = Joi.object({
    idStudent: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID del estudiante debe ser un texto',
            'any.required': 'El ID del estudiante es un campo requerido'
        }),
    name: Joi.string()
        .required()
        .pattern(/^[A-Za-záéíóúÁÉÍÓÚñÑ0-9 .#-]+$/)
        .messages({
            'string.base': 'El nombre debe ser un texto',
            'string.pattern.base': 'El nombre contiene caracteres inválidos',
            'any.required': 'El nombre es un campo requerido'
        }),
    lastName: Joi.string()
        .required()
        .pattern(/^[A-Za-záéíóúÁÉÍÓÚñÑ0-9 .#-]+$/)
        .messages({
            'string.base': 'El apellido debe ser un texto',
            'string.pattern.base': 'El apellido contiene caracteres inválidos',
            'any.required': 'El apellido es un campo requerido'
        }),
    documentType: Joi.string()
        .required()
        .messages({
            'string.base': 'El tipo de documento debe ser un texto',
            'any.required': 'El tipo de documento es un campo requerido'
        }),
    documentNumber: Joi.string()
        .required()
        .messages({
            'string.base': 'El número de documento debe ser un texto',
            'any.required': 'El número de documento es un campo requerido'
        }),
    dateOfBirth: Joi.date()
        .required()
        .messages({
            'date.base': 'La fecha de nacimiento debe ser una fecha válida',
            'any.required': 'La fecha de nacimiento es un campo requerido'
        }),
    gender: Joi.string()
        .required()
        .messages({
            'string.base': 'El género debe ser un texto',
            'any.required': 'El género es un campo requerido'
        }),
    idUnit: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID de la unidad debe ser un texto',
            'any.required': 'El ID de la unidad es un campo requerido'
        }),
    idSchool: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID de la escuela debe ser un texto',
            'any.required': 'El ID de la escuela es un campo requerido'
        }),
    status: Joi.boolean()
        .default(true)
        .messages({
            'boolean.base': 'El estado debe ser un valor booleano, verdadero o falso'
        })
});

module.exports = { studentSchemaValidation };