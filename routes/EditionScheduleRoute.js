const express = require('express');
const editionScheduleController = require('../controllers/EditionSchedule_controller');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     HorarioEdición:
 *       type: object
 *       required:
 *         - idSchedule
 *         - editionId
 *         - scheduleDate
 *       properties:
 *         idSchedule:
 *           type: string
 *           description: ID del horario
 *         editionId:
 *           type: string
 *           description: ID de la edición
 *         scheduleDate:
 *           type: string
 *           format: date
 *           description: Fecha del horario
 *         status:
 *           type: boolean
 *           description: Estado del horario
 *       example:
 *         idSchedule: "12345"
 *         editionId: "67890"
 *         scheduleDate: "2023-10-01"
 *         status: true
 */

/**
 * @swagger
 * /api/horarios-ediciones:
 *   get:
 *     summary: Listar todos los horarios de ediciones
 *     tags: [Horario Edición]
 *     responses:
 *       200:
 *         description: Lista de horarios de ediciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/HorarioEdición'
 */
router.get('/', editionScheduleController.listarHorariosEdiciones);

/**
 * @swagger
 * /api/horarios-ediciones/{id}:
 *   get:
 *     summary: Obtener horario de edición por ID
 *     tags: [Horario Edición]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del horario de edición
 *     responses:
 *       200:
 *         description: Detalles del horario de edición
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HorarioEdición'
 *       404:
 *         description: Horario de edición no encontrado
 */
router.get('/:id', editionScheduleController.obtenerHorarioEdicionPorId);

/**
 * @swagger
 * /api/horarios-ediciones:
 *   post:
 *     summary: Crear un nuevo horario de edición
 *     tags: [Horario Edición]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HorarioEdición'
 *     responses:
 *       201:
 *         description: Horario de edición creado exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post('/', editionScheduleController.crearHorarioEdicion);

/**
 * @swagger
 * /api/horarios-ediciones/{id}:
 *   put:
 *     summary: Actualizar horario de edición por ID
 *     tags: [Horario Edición]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del horario de edición
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HorarioEdición'
 *     responses:
 *       200:
 *         description: Horario de edición actualizado exitosamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Horario de edición no encontrado
 */
router.put('/:id', editionScheduleController.actualizarHorarioEdicion);

/**
 * @swagger
 * /api/horarios-ediciones/{id}:
 *   delete:
 *     summary: Desactivar horario de edición por ID
 *     tags: [Horario Edición]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del horario de edición
 *     responses:
 *       200:
 *         description: Horario de edición desactivado correctamente
 *       404:
 *         description: Horario de edición no encontrado
 */
router.delete('/:id', editionScheduleController.desactivarHorarioEdicion);

module.exports = router;