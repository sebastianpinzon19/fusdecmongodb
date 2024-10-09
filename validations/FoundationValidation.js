const Joi = require('@hapi/joi');

// Validaciones para el objeto fundación
const foundationSchemaValidation = Joi.object({
    idFoundation: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID de la fundación debe ser un texto',
            'any.required': 'El ID de la fundación es un campo requerido'
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
    description: Joi.string()
        .optional()
        .allow('')
        .messages({
            'string.base': 'La descripción debe ser un texto'
        })
});

module.exports = { foundationSchemaValidation };