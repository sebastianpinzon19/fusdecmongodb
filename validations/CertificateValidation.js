const Joi = require('@hapi/joi');

// Validaciones para el objeto certificado
const certificateSchemaValidation = Joi.object({
    idCertificate: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID del certificado debe ser un texto',
            'any.required': 'El ID del certificado es un campo requerido'
        }),
    studentId: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID del estudiante debe ser un texto',
            'any.required': 'El ID del estudiante es un campo requerido'
        }),
    courseId: Joi.string()
        .required()
        .messages({
            'string.base': 'El ID del curso debe ser un texto',
            'any.required': 'El ID del curso es un campo requerido'
        }),
    dateIssued: Joi.date()
        .required()
        .messages({
            'date.base': 'La fecha de emisión debe ser una fecha válida',
            'any.required': 'La fecha de emisión es un campo requerido'
        })
});

module.exports = { certificateSchemaValidation };