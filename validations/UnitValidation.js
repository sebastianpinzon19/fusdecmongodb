const Joi = require('@hapi/joi');

// Validaciones para el objeto unidad
const unitSchemaValidation = Joi.object({
    idUnit: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID de la unidad debe ser un texto',
            'any.required': 'El ID de la unidad es un campo requerido'
        }),
    unitName: Joi.string()
        .required()
        .pattern(/^[A-Za-záéíóúÁÉÍÓÚñÑ0-9 .#-]+$/)
        .messages({
            'string.base': 'El nombre de la unidad debe ser un texto',
            'string.pattern.base': 'El nombre de la unidad contiene caracteres inválidos',
            'any.required': 'El nombre de la unidad es un campo requerido'
        }),
    unitState: Joi.boolean()
        .default(true)
        .messages({
            'boolean.base': 'El estado debe ser un valor booleano, verdadero o falso'
        }),
    unitLocation: Joi.string()
        .optional()
        .allow('')
        .messages({
            'string.base': 'La ubicación debe ser un texto'
        }),
    idBrigade: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID de la brigada debe ser un texto',
            'any.required': 'El ID de la brigada es un campo requerido'
        }),
    brigade: Joi.string()
        .optional()
        .messages({
            'string.base': 'El ID de la brigada debe ser un texto'
        }),
    students: Joi.array().items(Joi.string()).optional()
        .messages({
            'array.base': 'Los estudiantes deben ser un array de textos'
        })
});

module.exports = { unitSchemaValidation };