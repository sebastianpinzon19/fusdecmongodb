const express = require('express');
const auditController = require('../controllers/Audit_controller');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Auditoría:
 *       type: object
 *       required:
 *         - action
 *         - userId
 *       properties:
 *         action:
 *           type: string
 *           description: Acción realizada
 *         userId:
 *           type: string
 *           description: ID del usuario que realizó la acción
 *         timestamp:
 *           type: string
 *           format: date-time
 *           description: Fecha y hora de la acción
 *       example:
 *         action: "Crear curso"
 *         userId: "67890"
 *         timestamp: "2023-10-01T12:00:00Z"
 */

/**
 * @swagger
 * /api/auditorias:
 *   get:
 *     summary: Listar todas las auditorías
 *     tags: [Auditoría]
 *     responses:
 *       200:
 *         description: Lista de auditorías
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Auditoría'
 */
router.get('/', auditController.listarAuditorias);

/**
 * @swagger
 * /api/auditorias:
 *   post:
 *     summary: Crear una nueva auditoría
 *     tags: [Auditoría]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Auditoría'
 *     responses:
 *       201:
 *         description: Auditoría creada exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post('/', auditController.crearAuditoria);

module.exports = router;