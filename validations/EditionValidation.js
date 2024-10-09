const Joi = require('@hapi/joi');

// Validaciones para el objeto edición
const editionSchemaValidation = Joi.object({
    idEdition: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID de la edición debe ser un texto',
            'any.required': 'El ID de la edición es un campo requerido'
        }),
    name: Joi.string()
        .min(3)
        .max(100)
        .required()
        .pattern(/^[A-Za-záéíóúÁÉÍÓÚñÑ0-9 .#-]+$/)
        .messages({
            'string.base': 'El nombre debe ser un texto',
            'string.min': 'El nombre debe tener al menos 3 caracteres',
            'string.max': 'El nombre no debe exceder los 100 caracteres',
            'string.pattern.base': 'El nombre contiene caracteres inválidos',
            'any.required': 'El nombre es un campo requerido'
        }),
    startDate: Joi.date()
        .required()
        .messages({
            'date.base': 'La fecha de inicio debe ser una fecha válida',
            'any.required': 'La fecha de inicio es un campo requerido'
        }),
    endDate: Joi.date()
        .required()
        .messages({
            'date.base': 'La fecha de fin debe ser una fecha válida',
            'any.required': 'La fecha de fin es un campo requerido'
        })
});

module.exports = { editionSchemaValidation };