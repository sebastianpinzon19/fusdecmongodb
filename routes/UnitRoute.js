const express = require('express');
const unitController = require('../controllers/Unit_controller');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Unidad:
 *       type: object
 *       required:
 *         - idUnit
 *         - unitName
 *       properties:
 *         idUnit:
 *           type: string
 *           description: ID de la unidad
 *         unitName:
 *           type: string
 *           description: Nombre de la unidad
 *         unitState:
 *           type: boolean
 *           description: Estado de la unidad
 *         unitLocation:
 *           type: string
 *           description: Ubicación de la unidad
 *         idBrigade:
 *           type: string
 *           description: ID de la brigada
 *       example:
 *         idUnit: "12345"
 *         unitName: "Unidad A"
 *         unitState: true
 *         unitLocation: "Edificio Principal"
 *         idBrigade: "67890"
 */

/**
 * @swagger
 * /api/unidades:
 *   get:
 *     summary: Listar todas las unidades
 *     tags: [Unidad]
 *     responses:
 *       200:
 *         description: Lista de unidades
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Unidad'
 */
router.get('/', unitController.listarUnidades);

/**
 * @swagger
 * /api/unidades/{id}:
 *   get:
 *     summary: Obtener unidad por ID
 *     tags: [Unidad]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la unidad
 *     responses:
 *       200:
 *         description: Detalles de la unidad
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Unidad'
 *       404:
 *         description: Unidad no encontrada
 */
router.get('/:id', unitController.obtenerUnidadPorId);

/**
 * @swagger
 * /api/unidades:
 *   post:
 *     summary: Crear una nueva unidad
 *     tags: [Unidad]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Unidad'
 *     responses:
 *       201:
 *         description: Unidad creada exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post('/', unitController.crearUnidad);

/**
 * @swagger
 * /api/unidades/{id}:
 *   put:
 *     summary: Actualizar unidad por ID
 *     tags: [Unidad]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la unidad
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Unidad'
 *     responses:
 *       200:
 *         description: Unidad actualizada exitosamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Unidad no encontrada
 */
router.put('/:id', unitController.actualizarUnidad);

/**
 * @swagger
 * /api/unidades/{id}:
 *   delete:
 *     summary: Desactivar unidad por ID
 *     tags: [Unidad]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la unidad
 *     responses:
 *       200:
 *         description: Unidad desactivada correctamente
 *       404:
 *         description: Unidad no encontrada
 */
router.delete('/:id', unitController.desactivarUnidad);

module.exports = router;