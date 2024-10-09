const Joi = require('@hapi/joi');

// Validaciones para el objeto informe
const reportSchemaValidation = Joi.object({
    idReport: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID del informe debe ser un texto',
            'any.required': 'El ID del informe es un campo requerido'
        }),
    observation: Joi.string()
        .optional()
        .allow('')
        .messages({
            'string.base': 'La observación debe ser un texto'
        })
});

module.exports = { reportSchemaValidation };