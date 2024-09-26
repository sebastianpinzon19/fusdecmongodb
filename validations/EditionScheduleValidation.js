const Joi = require('@hapi/joi');

// Validaciones para el objeto horario de edición
const editionScheduleSchemaValidation = Joi.object({
    idSchedule: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID del horario debe ser un texto',
            'any.required': 'El ID del horario es un campo requerido'
        }),
    editionId: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID de la edición debe ser un texto',
            'any.required': 'El ID de la edición es un campo requerido'
        }),
    scheduleDate: Joi.date()
        .required()
        .messages({
            'date.base': 'La fecha del horario debe ser una fecha válida',
            'any.required': 'La fecha del horario es un campo requerido'
        })
});

module.exports = { editionScheduleSchemaValidation };