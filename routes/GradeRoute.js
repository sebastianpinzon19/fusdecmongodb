const express = require('express');
const gradeController = require('../controllers/Grade_controller');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Calificación:
 *       type: object
 *       required:
 *         - idGrade
 *         - value
 *         - studentId
 *       properties:
 *         idGrade:
 *           type: string
 *           description: ID de la calificación
 *         value:
 *           type: number
 *           description: Valor de la calificación
 *         studentId:
 *           type: string
 *           description: ID del estudiante
 *       example:
 *         idGrade: "12345"
 *         value: 85
 *         studentId: "67890"
 */

/**
 * @swagger
 * /api/calificaciones:
 *   get:
 *     summary: Listar todas las calificaciones
 *     tags: [Calificación]
 *     responses:
 *       200:
 *         description: Lista de calificaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Calificación'
 */
router.get('/', gradeController.listarCalificaciones);

/**
 * @swagger
 * /api/calificaciones/{id}:
 *   get:
 *     summary: Obtener calificación por ID
 *     tags: [Calificación]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la calificación
 *     responses:
 *       200:
 *         description: Detalles de la calificación
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Calificación'
 *       404:
 *         description: Calificación no encontrada
 */
router.get('/:id', gradeController.obtenerCalificacionPorId);

/**
 * @swagger
 * /api/calificaciones:
 *   post:
 *     summary: Crear una nueva calificación
 *     tags: [Calificación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Calificación'
 *     responses:
 *       201:
 *         description: Calificación creada exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post('/', gradeController.crearCalificacion);

/**
 * @swagger
 * /api/calificaciones/{id}:
 *   put:
 *     summary: Actualizar calificación por ID
 *     tags: [Calificación]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la calificación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Calificación'
 *     responses:
 *       200:
 *         description: Calificación actualizada exitosamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Calificación no encontrada
 */
router.put('/:id', gradeController.actualizarCalificacion);

/**
 * @swagger
 * /api/calificaciones/{id}:
 *   delete:
 *     summary: Desactivar calificación por ID
 *     tags: [Calificación]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la calificación
 *     responses:
 *       200:
 *         description: Calificación desactivada correctamente
 *       404:
 *         description: Calificación no encontrada
 */
router.delete('/:id', gradeController.desactivarCalificacion);

module.exports = router;