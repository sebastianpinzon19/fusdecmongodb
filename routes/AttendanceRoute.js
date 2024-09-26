const express = require('express');
const attendanceController = require('../controllers/Attendance_controller');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Asistencia:
 *       type: object
 *       required:
 *         - idAttendance
 *         - date
 *         - studentId
 *       properties:
 *         idAttendance:
 *           type: string
 *           description: ID de la asistencia
 *         date:
 *           type: string
 *           format: date
 *           description: Fecha de la asistencia
 *         status:
 *           type: boolean
 *           description: Estado de la asistencia
 *         studentId:
 *           type: string
 *           description: ID del estudiante
 *       example:
 *         idAttendance: "12345"
 *         date: "2023-10-01"
 *         status: true
 *         studentId: "67890"
 */

/**
 * @swagger
 * /api/asistencias:
 *   get:
 *     summary: Listar todas las asistencias
 *     tags: [Asistencia]
 *     responses:
 *       200:
 *         description: Lista de asistencias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Asistencia'
 */
router.get('/', attendanceController.listarAsistencias);

/**
 * @swagger
 * /api/asistencias/{id}:
 *   get:
 *     summary: Obtener asistencia por ID
 *     tags: [Asistencia]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la asistencia
 *     responses:
 *       200:
 *         description: Detalles de la asistencia
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Asistencia'
 *       404:
 *         description: Asistencia no encontrada
 */
router.get('/:id', attendanceController.obtenerAsistenciaPorId);

/**
 * @swagger
 * /api/asistencias:
 *   post:
 *     summary: Crear una nueva asistencia
 *     tags: [Asistencia]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Asistencia'
 *     responses:
 *       201:
 *         description: Asistencia creada exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post('/', attendanceController.crearAsistencia);

/**
 * @swagger
 * /api/asistencias/{id}:
 *   put:
 *     summary: Actualizar asistencia por ID
 *     tags: [Asistencia]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la asistencia
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Asistencia'
 *     responses:
 *       200:
 *         description: Asistencia actualizada exitosamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Asistencia no encontrada
 */
router.put('/:id', attendanceController.actualizarAsistencia);

/**
 * @swagger
 * /api/asistencias/{id}:
 *   delete:
 *     summary: Desactivar asistencia por ID
 *     tags: [Asistencia]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la asistencia
 *     responses:
 *       200:
 *         description: Asistencia desactivada correctamente
 *       404:
 *         description: Asistencia no encontrada
 */
router.delete('/:id', attendanceController.desactivarAsistencia);

module.exports = router;