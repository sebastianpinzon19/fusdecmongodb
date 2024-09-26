const express = require('express');
const foundationController = require('../controllers/Foundation_controller');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Fundación:
 *       type: object
 *       required:
 *         - idFoundation
 *         - name
 *       properties:
 *         idFoundation:
 *           type: string
 *           description: ID de la fundación
 *         name:
 *           type: string
 *           description: Nombre de la fundación
 *         description:
 *           type: string
 *           description: Descripción de la fundación
 *       example:
 *         idFoundation: "12345"
 *         name: "Fundación Ejemplo"
 *         description: "Fundación dedicada a la educación"
 */

/**
 * @swagger
 * /api/fundaciones:
 *   get:
 *     summary: Listar todas las fundaciones
 *     tags: [Fundación]
 *     responses:
 *       200:
 *         description: Lista de fundaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Fundación'
 */
router.get('/', foundationController.listarFundaciones);

/**
 * @swagger
 * /api/fundaciones/{id}:
 *   get:
 *     summary: Obtener fundación por ID
 *     tags: [Fundación]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la fundación
 *     responses:
 *       200:
 *         description: Detalles de la fundación
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Fundación'
 *       404:
 *         description: Fundación no encontrada
 */
router.get('/:id', foundationController.obtenerFundacionPorId);

/**
 * @swagger
 * /api/fundaciones:
 *   post:
 *     summary: Crear una nueva fundación
 *     tags: [Fundación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Fundación'
 *     responses:
 *       201:
 *         description: Fundación creada exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post('/', foundationController.crearFundacion);

/**
 * @swagger
 * /api/fundaciones/{id}:
 *   put:
 *     summary: Actualizar fundación por ID
 *     tags: [Fundación]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la fundación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Fundación'
 *     responses:
 *       200:
 *         description: Fundación actualizada exitosamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Fundación no encontrada
 */
router.put('/:id', foundationController.actualizarFundacion);

/**
 * @swagger
 * /api/fundaciones/{id}:
 *   delete:
 *     summary: Desactivar fundación por ID
 *     tags: [Fundación]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la fundación
 *     responses:
 *       200:
 *         description: Fundación desactivada correctamente
 *       404:
 *         description: Fundación no encontrada
 */
router.delete('/:id', foundationController.desactivarFundacion);

module.exports = router;