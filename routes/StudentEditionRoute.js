const express = require('express');
const studentEditionController = require('../controllers/StudentEdition_controller');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     EdiciónEstudiante:
 *       type: object
 *       required:
 *         - idStudent
 *         - idEdition
 *       properties:
 *         idStudent:
 *           type: string
 *           description: ID del estudiante
 *         idEdition:
 *           type: string
 *           description: ID de la edición
 *         edition:
 *           type: string
 *           description: ID de la edición
 *         student:
 *           type: string
 *           description: ID del estudiante
 *       example:
 *         idStudent: "67890"
 *         idEdition: "12345"
 *         edition: "12345"
 *         student: "67890"
 */

/**
 * @swagger
 * /api/ediciones-estudiantes:
 *   get:
 *     summary: Listar todas las ediciones de estudiantes
 *     tags: [Edición Estudiante]
 *     responses:
 *       200:
 *         description: Lista de ediciones de estudiantes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/EdiciónEstudiante'
 */
router.get('/', studentEditionController.listarEdicionesEstudiantes);

/**
 * @swagger
 * /api/ediciones-estudiantes/{id}:
 *   get:
 *     summary: Obtener edición de estudiante por ID
 *     tags: [Edición Estudiante]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la edición de estudiante
 *     responses:
 *       200:
 *         description: Detalles de la edición de estudiante
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EdiciónEstudiante'
 *       404:
 *         description: Edición de estudiante no encontrada
 */
router.get('/:id', studentEditionController.obtenerEdicionEstudiantePorId);

/**
 * @swagger
 * /api/ediciones-estudiantes:
 *   post:
 *     summary: Crear una nueva edición de estudiante
 *     tags: [Edición Estudiante]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EdiciónEstudiante'
 *     responses:
 *       201:
 *         description: Edición de estudiante creada exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post('/', studentEditionController.crearEdicionEstudiante);

/**
 * @swagger
 * /api/ediciones-estudiantes/{id}:
 *   put:
 *     summary: Actualizar edición de estudiante por ID
 *     tags: [Edición Estudiante]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la edición de estudiante
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EdiciónEstudiante'
 *     responses:
 *       200:
 *         description: Edición de estudiante actualizada exitosamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Edición de estudiante no encontrada
 */
router.put('/:id', studentEditionController.actualizarEdicionEstudiante);

/**
 * @swagger
 * /api/ediciones-estudiantes/{id}:
 *   delete:
 *     summary: Desactivar edición de estudiante por ID
 *     tags: [Edición Estudiante]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la edición de estudiante
 *     responses:
 *       200:
 *         description: Edición de estudiante desactivada correctamente
 *       404:
 *         description: Edición de estudiante no encontrada
 */
router.delete('/:id', studentEditionController.desactivarEdicionEstudiante);

module.exports = router;