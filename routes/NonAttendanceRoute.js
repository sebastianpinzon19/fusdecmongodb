const express = require('express');
const nonAttendanceController = require('../controllers/NonAttendance_controller');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     NoAsistencia:
 *       type: object
 *       required:
 *         - idNonAttendance
 *         - studentId
 *         - date
 *       properties:
 *         idNonAttendance:
 *           type: string
 *           description: ID de la no asistencia
 *         studentId:
 *           type: string
 *           description: ID del estudiante
 *         date:
 *           type: string
 *           format: date
 *           description: Fecha de la no asistencia
 *         reason:
 *           type: string
 *           description: Motivo de la no asistencia
 *       example:
 *         idNonAttendance: "12345"
 *         studentId: "67890"
 *         date: "2023-10-01"
 *         reason: "Enfermedad"
 */

/**
 * @swagger
 * /api/no-asistencias:
 *   get:
 *     summary: Listar todas las no asistencias
 *     tags: [No Asistencia]
 *     responses:
 *       200:
 *         description: Lista de no asistencias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/NoAsistencia'
 */
router.get('/', nonAttendanceController.listarNoAsistencias);

/**
 * @swagger
 * /api/no-asistencias/{id}:
 *   get:
 *     summary: Obtener no asistencia por ID
 *     tags: [No Asistencia]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la no asistencia
 *     responses:
 *       200:
 *         description: Detalles de la no asistencia
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NoAsistencia'
 *       404:
 *         description: No asistencia no encontrada
 */
router.get('/:id', nonAttendanceController.obtenerNoAsistenciaPorId);

/**
 * @swagger
 * /api/no-asistencias:
 *   post:
 *     summary: Crear una nueva no asistencia
 *     tags: [No Asistencia]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NoAsistencia'
 *     responses:
 *       201:
 *         description: No asistencia creada exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post('/', nonAttendanceController.crearNoAsistencia);

/**
 * @swagger
 * /api/no-asistencias/{id}:
 *   put:
 *     summary: Actualizar no asistencia por ID
 *     tags: [No Asistencia]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la no asistencia
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NoAsistencia'
 *     responses:
 *       200:
 *         description: No asistencia actualizada exitosamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: No asistencia no encontrada
 */
router.put('/:id', nonAttendanceController.actualizarNoAsistencia);

/**
 * @swagger
 * /api/no-asistencias/{id}:
 *   delete:
 *     summary: Desactivar no asistencia por ID
 *     tags: [No Asistencia]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la no asistencia
 *     responses:
 *       200:
 *         description: No asistencia desactivada correctamente
 *       404:
 *         description: No asistencia no encontrada
 */
router.delete('/:id', nonAttendanceController.desactivarNoAsistencia);

module.exports = router;