const express = require('express');
const studentNonAttendanceController = require('../controllers/StudentNonAttendance_controller');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     NoAsistenciaEstudiante:
 *       type: object
 *       required:
 *         - idStudent
 *         - idNonAttendance
 *       properties:
 *         idStudent:
 *           type: string
 *           description: ID del estudiante
 *         idNonAttendance:
 *           type: string
 *           description: ID de la no asistencia
 *         date:
 *           type: string
 *           format: date
 *           description: Fecha de la no asistencia
 *         reason:
 *           type: string
 *           description: Motivo de la no asistencia
 *       example:
 *         idStudent: "67890"
 *         idNonAttendance: "12345"
 *         date: "2023-10-01"
 *         reason: "Enfermedad"
 */

/**
 * @swagger
 * /api/no-asistencias-estudiantes:
 *   get:
 *     summary: Listar todas las no asistencias de estudiantes
 *     tags: [No Asistencia Estudiante]
 *     responses:
 *       200:
 *         description: Lista de no asistencias de estudiantes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/NoAsistenciaEstudiante'
 */
router.get('/', studentNonAttendanceController.listarNoAsistenciasEstudiantes);

/**
 * @swagger
 * /api/no-asistencias-estudiantes/{id}:
 *   get:
 *     summary: Obtener no asistencia de estudiante por ID
 *     tags: [No Asistencia Estudiante]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la no asistencia de estudiante
 *     responses:
 *       200:
 *         description: Detalles de la no asistencia de estudiante
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NoAsistenciaEstudiante'
 *       404:
 *         description: No asistencia de estudiante no encontrada
 */
router.get('/:id', studentNonAttendanceController.obtenerNoAsistenciaEstudiantePorId);

/**
 * @swagger
 * /api/no-asistencias-estudiantes:
 *   post:
 *     summary: Crear una nueva no asistencia de estudiante
 *     tags: [No Asistencia Estudiante]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NoAsistenciaEstudiante'
 *     responses:
 *       201:
 *         description: No asistencia de estudiante creada exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post('/', studentNonAttendanceController.crearNoAsistenciaEstudiante);

/**
 * @swagger
 * /api/no-asistencias-estudiantes/{id}:
 *   put:
 *     summary: Actualizar no asistencia de estudiante por ID
 *     tags: [No Asistencia Estudiante]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la no asistencia de estudiante
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NoAsistenciaEstudiante'
 *     responses:
 *       200:
 *         description: No asistencia de estudiante actualizada exitosamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: No asistencia de estudiante no encontrada
 */
router.put('/:id', studentNonAttendanceController.actualizarNoAsistenciaEstudiante);

/**
 * @swagger
 * /api/no-asistencias-estudiantes/{id}:
 *   delete:
 *     summary: Desactivar no asistencia de estudiante por ID
 *     tags: [No Asistencia Estudiante]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la no asistencia de estudiante
 *     responses:
 *       200:
 *         description: No asistencia de estudiante desactivada correctamente
 *       404:
 *         description: No asistencia de estudiante no encontrada
 */
router.delete('/:id', studentNonAttendanceController.desactivarNoAsistenciaEstudiante);

module.exports = router;