const Joi = require('@hapi/joi');

// Validaciones para el objeto comando
const commandSchemaValidation = Joi.object({
    commandId: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID del comando debe ser un texto',
            'any.required': 'El ID del comando es un campo requerido'
        }),
    description: Joi.string()
        .optional()
        .allow('')
        .messages({
            'string.base': 'La descripción debe ser un texto'
        }),
    status: Joi.boolean()
        .default(true)
        .messages({
            'boolean.base': 'El estado debe ser un valor booleano, verdadero o falso'
        })
});

module.exports = { commandSchemaValidation };