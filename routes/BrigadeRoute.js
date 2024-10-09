const express = require('express');
const brigadeController = require('../controllers/Brigade_controller');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Brigada:
 *       type: object
 *       required:
 *         - idBrigade
 *         - name
 *       properties:
 *         idBrigade:
 *           type: string
 *           description: ID de la brigada
 *         name:
 *           type: string
 *           description: Nombre de la brigada
 *         location:
 *           type: string
 *           description: Ubicación de la brigada
 *       example:
 *         idBrigade: "12345"
 *         name: "Brigada A"
 *         location: "Edificio Principal"
 */

/**
 * @swagger
 * /api/brigadas:
 *   get:
 *     summary: Listar todas las brigadas
 *     tags: [Brigada]
 *     responses:
 *       200:
 *         description: Lista de brigadas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Brigada'
 */
router.get('/', brigadeController.listarBrigadas);

/**
 * @swagger
 * /api/brigadas/{id}:
 *   get:
 *     summary: Obtener brigada por ID
 *     tags: [Brigada]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la brigada
 *     responses:
 *       200:
 *         description: Detalles de la brigada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Brigada'
 *       404:
 *         description: Brigada no encontrada
 */
router.get('/:id', brigadeController.obtenerBrigadaPorId);

/**
 * @swagger
 * /api/brigadas:
 *   post:
 *     summary: Crear una nueva brigada
 *     tags: [Brigada]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Brigada'
 *     responses:
 *       201:
 *         description: Brigada creada exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post('/', brigadeController.crearBrigada);

/**
 * @swagger
 * /api/brigadas/{id}:
 *   put:
 *     summary: Actualizar brigada por ID
 *     tags: [Brigada]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la brigada
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Brigada'
 *     responses:
 *       200:
 *         description: Brigada actualizada exitosamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Brigada no encontrada
 */
router.put('/:id', brigadeController.actualizarBrigada);

/**
 * @swagger
 * /api/brigadas/{id}:
 *   delete:
 *     summary: Desactivar brigada por ID
 *     tags: [Brigada]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la brigada
 *     responses:
 *       200:
 *         description: Brigada desactivada correctamente
 *       404:
 *         description: Brigada no encontrada
 */
router.delete('/:id', brigadeController.desactivarBrigada);

module.exports = router;