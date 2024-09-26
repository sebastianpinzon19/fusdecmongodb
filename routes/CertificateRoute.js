const express = require('express');
const certificateController = require('../controllers/Certificate_controller');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Certificado:
 *       type: object
 *       required:
 *         - idCertificate
 *         - studentId
 *         - courseId
 *         - dateIssued
 *       properties:
 *         idCertificate:
 *           type: string
 *           description: ID del certificado
 *         studentId:
 *           type: string
 *           description: ID del estudiante
 *         courseId:
 *           type: string
 *           description: ID del curso
 *         dateIssued:
 *           type: string
 *           format: date
 *           description: Fecha de emisión del certificado
 *       example:
 *         idCertificate: "12345"
 *         studentId: "67890"
 *         courseId: "54321"
 *         dateIssued: "2023-10-01"
 */

/**
 * @swagger
 * /api/certificados:
 *   get:
 *     summary: Listar todos los certificados
 *     tags: [Certificado]
 *     responses:
 *       200:
 *         description: Lista de certificados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Certificado'
 */
router.get('/', certificateController.listarCertificados);

/**
 * @swagger
 * /api/certificados/{id}:
 *   get:
 *     summary: Obtener certificado por ID
 *     tags: [Certificado]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del certificado
 *     responses:
 *       200:
 *         description: Detalles del certificado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Certificado'
 *       404:
 *         description: Certificado no encontrado
 */
router.get('/:id', certificateController.obtenerCertificadoPorId);

/**
 * @swagger
 * /api/certificados:
 *   post:
 *     summary: Crear un nuevo certificado
 *     tags: [Certificado]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Certificado'
 *     responses:
 *       201:
 *         description: Certificado creado exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post('/', certificateController.crearCertificado);

/**
 * @swagger
 * /api/certificados/{id}:
 *   put:
 *     summary: Actualizar certificado por ID
 *     tags: [Certificado]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del certificado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Certificado'
 *     responses:
 *       200:
 *         description: Certificado actualizado exitosamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Certificado no encontrado
 */
router.put('/:id', certificateController.actualizarCertificado);

/**
 * @swagger
 * /api/certificados/{id}:
 *   delete:
 *     summary: Desactivar certificado por ID
 *     tags: [Certificado]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del certificado
 *     responses:
 *       200:
 *         description: Certificado desactivado correctamente
 *       404:
 *         description: Certificado no encontrado
 */
router.delete('/:id', certificateController.desactivarCertificado);

module.exports = router;