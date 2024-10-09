const express = require('express');
const studentAttendanceController = require('../controllers/StudentAttendance_controller');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     AsistenciaEstudiante:
 *       type: object
 *       required:
 *         - idStudent
 *         - idAttendance
 *       properties:
 *         idStudent:
 *           type: string
 *           description: ID del estudiante
 *         idAttendance:
 *           type: string
 *           description: ID de la asistencia
 *         student:
 *           type: string
 *           description: ID del estudiante
 *         attendance:
 *           type: string
 *           description: ID de la asistencia
 *       example:
 *         idStudent: "67890"
 *         idAttendance: "12345"
 *         student: "67890"
 *         attendance: "12345"
 */

/**
 * @swagger
 * /api/asistencias-estudiantes:
 *   get:
 *     summary: Listar todas las asistencias de estudiantes
 *     tags: [Asistencia Estudiante]
 *     responses:
 *       200:
 *         description: Lista de asistencias de estudiantes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/AsistenciaEstudiante'
 */
router.get('/', studentAttendanceController.listarAsistenciasEstudiantes);

/**
 * @swagger
 * /api/asistencias-estudiantes/{id}:
 *   get:
 *     summary: Obtener asistencia de estudiante por ID
 *     tags: [Asistencia Estudiante]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la asistencia de estudiante
 *     responses:
 *       200:
 *         description: Detalles de la asistencia de estudiante
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AsistenciaEstudiante'
 *       404:
 *         description: Asistencia de estudiante no encontrada
 */
router.get('/:id', studentAttendanceController.obtenerAsistenciaEstudiantePorId);

/**
 * @swagger
 * /api/asistencias-estudiantes:
 *   post:
 *     summary: Crear una nueva asistencia de estudiante
 *     tags: [Asistencia Estudiante]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AsistenciaEstudiante'
 *     responses:
 *       201:
 *         description: Asistencia de estudiante creada exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post('/', studentAttendanceController.crearAsistenciaEstudiante);

/**
 * @swagger
 * /api/asistencias-estudiantes/{id}:
 *   put:
 *     summary: Actualizar asistencia de estudiante por ID
 *     tags: [Asistencia Estudiante]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la asistencia de estudiante
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AsistenciaEstudiante'
 *     responses:
 *       200:
 *         description: Asistencia de estudiante actualizada exitosamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Asistencia de estudiante no encontrada
 */
router.put('/:id', studentAttendanceController.actualizarAsistenciaEstudiante);

/**
 * @swagger
 * /api/asistencias-estudiantes/{id}:
 *   delete:
 *     summary: Desactivar asistencia de estudiante por ID
 *     tags: [Asistencia Estudiante]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la asistencia de estudiante
 *     responses:
 *       200:
 *         description: Asistencia de estudiante desactivada correctamente
 *       404:
 *         description: Asistencia de estudiante no encontrada
 */
router.delete('/:id', studentAttendanceController.desactivarAsistenciaEstudiante);

module.exports = router;