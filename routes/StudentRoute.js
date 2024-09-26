const express = require('express');
const studentController = require('../controllers/Student_controller');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Estudiante:
 *       type: object
 *       required:
 *         - idStudent
 *         - name
 *         - lastName
 *         - documentType
 *         - gender
 *         - idUnit
 *         - idSchool
 *       properties:
 *         idStudent:
 *           type: string
 *           description: ID del estudiante
 *         name:
 *           type: string
 *           description: Nombre del estudiante
 *         lastName:
 *           type: string
 *           description: Apellido del estudiante
 *         documentType:
 *           type: string
 *           description: Tipo de documento del estudiante
 *         gender:
 *           type: string
 *           description: Género del estudiante
 *         idUnit:
 *           type: string
 *           description: ID de la unidad
 *         idSchool:
 *           type: string
 *           description: ID de la escuela
 *         status:
 *           type: boolean
 *           description: Estado del estudiante
 *       example:
 *         idStudent: "67890"
 *         name: "Juan"
 *         lastName: "Pérez"
 *         documentType: "DNI"
 *         gender: "Masculino"
 *         idUnit: "12345"
 *         idSchool: "54321"
 *         status: true
 */

/**
 * @swagger
 * /api/estudiantes:
 *   get:
 *     summary: Listar todos los estudiantes
 *     tags: [Estudiante]
 *     responses:
 *       200:
 *         description: Lista de estudiantes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Estudiante'
 */
router.get('/', studentController.listarEstudiantes);

/**
 * @swagger
 * /api/estudiantes/{id}:
 *   get:
 *     summary: Obtener estudiante por ID
 *     tags: [Estudiante]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del estudiante
 *     responses:
 *       200:
 *         description: Detalles del estudiante
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Estudiante'
 *       404:
 *         description: Estudiante no encontrado
 */
router.get('/:id', studentController.obtenerEstudiantePorId);

/**
 * @swagger
 * /api/estudiantes:
 *   post:
 *     summary: Crear un nuevo estudiante
 *     tags: [Estudiante]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Estudiante'
 *     responses:
 *       201:
 *         description: Estudiante creado exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post('/', studentController.crearEstudiante);

/**
 * @swagger
 * /api/estudiantes/{id}:
 *   put:
 *     summary: Actualizar estudiante por ID
 *     tags: [Estudiante]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del estudiante
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Estudiante'
 *     responses:
 *       200:
 *         description: Estudiante actualizado exitosamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Estudiante no encontrado
 */
router.put('/:id', studentController.actualizarEstudiante);

/**
 * @swagger
 * /api/estudiantes/{id}:
 *   delete:
 *     summary: Desactivar estudiante por ID
 *     tags: [Estudiante]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del estudiante
 *     responses:
 *       200:
 *         description: Estudiante desactivado correctamente
 *       404:
 *         description: Estudiante no encontrado
 */
router.delete('/:id', studentController.desactivarEstudiante);

module.exports = router;