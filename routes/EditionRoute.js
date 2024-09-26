const express = require('express');
const editionController = require('../controllers/Edition_controller');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Edición:
 *       type: object
 *       required:
 *         - idEdition
 *         - name
 *         - startDate
 *         - endDate
 *       properties:
 *         idEdition:
 *           type: string
 *           description: ID de la edición
 *         name:
 *           type: string
 *           description: Nombre de la edición
 *         startDate:
 *           type: string
 *           format: date
 *           description: Fecha de inicio de la edición
 *         endDate:
 *           type: string
 *           format: date
 *           description: Fecha de fin de la edición
 *       example:
 *         idEdition: "12345"
 *         name: "Edición 2023"
 *         startDate: "2023-10-01"
 *         endDate: "2023-12-01"
 */

/**
 * @swagger
 * /api/ediciones:
 *   get:
 *     summary: Listar todas las ediciones
 *     tags: [Edición]
 *     responses:
 *       200:
 *         description: Lista de ediciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Edición'
 */
router.get('/', editionController.listarEdiciones);

/**
 * @swagger
 * /api/ediciones/{id}:
 *   get:
 *     summary: Obtener edición por ID
 *     tags: [Edición]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la edición
 *     responses:
 *       200:
 *         description: Detalles de la edición
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Edición'
 *       404:
 *         description: Edición no encontrada
 */
router.get('/:id', editionController.obtenerEdicionPorId);

/**
 * @swagger
 * /api/ediciones:
 *   post:
 *     summary: Crear una nueva edición
 *     tags: [Edición]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Edición'
 *     responses:
 *       201:
 *         description: Edición creada exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post('/', editionController.crearEdicion);

/**
 * @swagger
 * /api/ediciones/{id}:
 *   put:
 *     summary: Actualizar edición por ID
 *     tags: [Edición]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la edición
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Edición'
 *     responses:
 *       200:
 *         description: Edición actualizada exitosamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Edición no encontrada
 */
router.put('/:id', editionController.actualizarEdicion);

/**
 * @swagger
 * /api/ediciones/{id}:
 *   delete:
 *     summary: Desactivar edición por ID
 *     tags: [Edición]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la edición
 *     responses:
 *       200:
 *         description: Edición desactivada correctamente
 *       404:
 *         description: Edición no encontrada
 */
router.delete('/:id', editionController.desactivarEdicion);

module.exports = router;