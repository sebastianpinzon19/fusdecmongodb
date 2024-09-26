const Joi = require('@hapi/joi');

// Validaciones para el objeto auditoría
const auditSchemaValidation = Joi.object({
    action: Joi.string()
        .required()
        .messages({
            'string.base': 'La acción debe ser un texto',
            'any.required': 'La acción es un campo requerido'
        }),
    userId: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID del usuario debe ser un texto',
            'any.required': 'El ID del usuario es un campo requerido'
        }),
    timestamp: Joi.date()
        .default(Date.now)
        .messages({
            'date.base': 'La fecha debe ser una fecha válida'
        })
});

module.exports = { auditSchemaValidation };