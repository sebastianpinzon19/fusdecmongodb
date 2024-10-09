const express = require('express');
const scheduleController = require('../controllers/Schedule_controller');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Horario:
 *       type: object
 *       required:
 *         - idSchedule
 *         - title
 *         - startDate
 *         - endDate
 *       properties:
 *         idSchedule:
 *           type: string
 *           description: ID del horario
 *         title:
 *           type: string
 *           description: Título del horario
 *         startDate:
 *           type: string
 *           format: date
 *           description: Fecha de inicio del horario
 *         endDate:
 *           type: string
 *           format: date
 *           description: Fecha de fin del horario
 *         status:
 *           type: boolean
 *           description: Estado del horario
 *       example:
 *         idSchedule: "12345"
 *         title: "Horario de clases"
 *         startDate: "2023-10-01"
 *         endDate: "2023-12-01"
 *         status: true
 */

/**
 * @swagger
 * /api/horarios:
 *   get:
 *     summary: Listar todos los horarios
 *     tags: [Horario]
 *     responses:
 *       200:
 *         description: Lista de horarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Horario'
 */
router.get('/', scheduleController.listarHorarios);

/**
 * @swagger
 * /api/horarios/{id}:
 *   get:
 *     summary: Obtener horario por ID
 *     tags: [Horario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del horario
 *     responses:
 *       200:
 *         description: Detalles del horario
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Horario'
 *       404:
 *         description: Horario no encontrado
 */
router.get('/:id', scheduleController.obtenerHorarioPorId);

/**
 * @swagger
 * /api/horarios:
 *   post:
 *     summary: Crear un nuevo horario
 *     tags: [Horario]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Horario'
 *     responses:
 *       201:
 *         description: Horario creado exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post('/', scheduleController.crearHorario);

/**
 * @swagger
 * /api/horarios/{id}:
 *   put:
 *     summary: Actualizar horario por ID
 *     tags: [Horario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del horario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Horario'
 *     responses:
 *       200:
 *         description: Horario actualizado exitosamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Horario no encontrado
 */
router.put('/:id', scheduleController.actualizarHorario);

/**
 * @swagger
 * /api/horarios/{id}:
 *   delete:
 *     summary: Desactivar horario por ID
 *     tags: [Horario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del horario
 *     responses:
 *       200:
 *         description: Horario desactivado correctamente
 *       404:
 *         description: Horario no encontrado
 */
router.delete('/:id', scheduleController.desactivarHorario);

module.exports = router;