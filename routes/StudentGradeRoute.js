const express = require('express');
const studentGradeController = require('../controllers/StudentGrade_controller');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     CalificaciónEstudiante:
 *       type: object
 *       required:
 *         - idStudent
 *         - idGrade
 *       properties:
 *         idStudent:
 *           type: string
 *           description: ID del estudiante
 *         idGrade:
 *           type: string
 *           description: ID de la calificación
 *         grade:
 *           type: number
 *           description: Valor de la calificación
 *         student:
 *           type: string
 *           description: ID del estudiante
 *       example:
 *         idStudent: "67890"
 *         idGrade: "12345"
 *         grade: 85
 *         student: "67890"
 */

/**
 * @swagger
 * /api/calificaciones-estudiantes:
 *   get:
 *     summary: Listar todas las calificaciones de estudiantes
 *     tags: [Calificación Estudiante]
 *     responses:
 *       200:
 *         description: Lista de calificaciones de estudiantes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CalificaciónEstudiante'
 */
router.get('/', studentGradeController.listarCalificacionesEstudiantes);

/**
 * @swagger
 * /api/calificaciones-estudiantes/{id}:
 *   get:
 *     summary: Obtener calificación de estudiante por ID
 *     tags: [Calificación Estudiante]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la calificación de estudiante
 *     responses:
 *       200:
 *         description: Detalles de la calificación de estudiante
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CalificaciónEstudiante'
 *       404:
 *         description: Calificación de estudiante no encontrada
 */
router.get('/:id', studentGradeController.obtenerCalificacionEstudiantePorId);

/**
 * @swagger
 * /api/calificaciones-estudiantes:
 *   post:
 *     summary: Crear una nueva calificación de estudiante
 *     tags: [Calificación Estudiante]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CalificaciónEstudiante'
 *     responses:
 *       201:
 *         description: Calificación de estudiante creada exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post('/', studentGradeController.crearCalificacionEstudiante);

/**
 * @swagger
 * /api/calificaciones-estudiantes/{id}:
 *   put:
 *     summary: Actualizar calificación de estudiante por ID
 *     tags: [Calificación Estudiante]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la calificación de estudiante
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CalificaciónEstudiante'
 *     responses:
 *       200:
 *         description: Calificación de estudiante actualizada exitosamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Calificación de estudiante no encontrada
 */
router.put('/:id', studentGradeController.actualizarCalificacionEstudiante);

/**
 * @swagger
 * /api/calificaciones-estudiantes/{id}:
 *   delete:
 *     summary: Desactivar calificación de estudiante por ID
 *     tags: [Calificación Estudiante]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la calificación de estudiante
 *     responses:
 *       200:
 *         description: Calificación de estudiante desactivada correctamente
 *       404:
 *         description: Calificación de estudiante no encontrada
 */
router.delete('/:id', studentGradeController.desactivarCalificacionEstudiante);

module.exports = router;