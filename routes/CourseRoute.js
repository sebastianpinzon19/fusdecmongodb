const express = require('express');
const courseController = require('../controllers/Course_controller');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Curso:
 *       type: object
 *       required:
 *         - titulo
 *         - descripcion
 *         - estado
 *       properties:
 *         id:
 *           type: string
 *           description: ID del curso
 *         titulo:
 *           type: string
 *           description: Título del curso
 *         descripcion:
 *           type: string
 *           description: Descripción del curso
 *         estado:
 *           type: boolean
 *           description: Estado del curso (activo o inactivo)
 *         imagen:
 *           type: string
 *           description: Imagen del curso
 *         alumnos:
 *           type: number
 *           description: Cantidad de alumnos inscritos
 *         calificacion:
 *           type: number
 *           description: Calificación del curso
 *       example:
 *         titulo: "Curso de Node.js"
 *         descripcion: "Aprende a desarrollar aplicaciones backend con Node.js"
 *         estado: true
 *         imagen: "imagen_url"
 *         alumnos: 10
 *         calificacion: 4.5
 */

/**
 * @swagger
 * /api/cursos:
 *   get:
 *     summary: Listar todos los cursos activos
 *     tags: [Curso]
 *     responses:
 *       200:
 *         description: Lista de cursos activos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Curso'
 */
router.get('/', courseController.listarCursosActivos);

/**
 * @swagger
 * /api/cursos/{id}:
 *   get:
 *     summary: Obtener curso por Id
 *     tags: [Curso]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del curso
 *     responses:
 *       200:
 *         description: Detalles del curso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Curso'
 *       404:
 *         description: Curso no encontrado
 */
router.get('/:id', courseController.obtenerCursoPorId);

/**
 * @swagger
 * /api/cursos:
 *   post:
 *     summary: Crear un nuevo curso
 *     tags: [Curso]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Curso'
 *     responses:
 *       201:
 *         description: Curso creado exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post('/', courseController.crearCurso);

/**
 * @swagger
 * /api/cursos/{id}:
 *   put:
 *     summary: Actualizar un curso por Id
 *     tags: [Curso]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del curso
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Curso'
 *     responses:
 *       200:
 *         description: Curso actualizado exitosamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Curso no encontrado
 */
router.put('/:id', courseController.actualizarCurso);

/**
 * @swagger
 * /api/cursos/{id}:
 *   delete:
 *     summary: Desactivar un curso por Id
 *     tags: [Curso]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del curso
 *     responses:
 *       200:
 *         description: Curso desactivado correctamente
 *       404:
 *         description: Curso no encontrado
 */
router.delete('/:id', courseController.desactivarCurso);

module.exports = router;