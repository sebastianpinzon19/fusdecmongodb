const Joi = require('@hapi/joi');

// Validaciones para el objeto horario
const scheduleSchemaValidation = Joi.object({
    idSchedule: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID del horario debe ser un texto',
            'any.required': 'El ID del horario es un campo requerido'
        }),
    title: Joi.string()
        .required()
        .pattern(/^[A-Za-záéíóúÁÉÍÓÚñÑ0-9 .#-]+$/)
        .messages({
            'string.base': 'El título debe ser un texto',
            'any.required': 'El título es un campo requerido'
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
        }),
    status: Joi.boolean()
        .default(true)
        .messages({
            'boolean.base': 'El estado debe ser un valor booleano, verdadero o falso'
        })
});

module.exports = { scheduleSchemaValidation };