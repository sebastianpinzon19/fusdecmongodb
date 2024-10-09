const express = require('express');
const reportController = require('../controllers/Report_controller');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Informe:
 *       type: object
 *       required:
 *         - idReport
 *       properties:
 *         idReport:
 *           type: string
 *           description: ID del informe
 *         observation:
 *           type: string
 *           description: Observación del informe
 *       example:
 *         idReport: "12345"
 *         observation: "Informe de progreso"
 */

/**
 * @swagger
 * /api/informes:
 *   get:
 *     summary: Listar todos los informes
 *     tags: [Informe]
 *     responses:
 *       200:
 *         description: Lista de informes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Informe'
 */
router.get('/', reportController.listarInformes);

/**
 * @swagger
 * /api/informes/{id}:
 *   get:
 *     summary: Obtener informe por ID
 *     tags: [Informe]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del informe
 *     responses:
 *       200:
 *         description: Detalles del informe
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Informe'
 *       404:
 *         description: Informe no encontrado
 */
router.get('/:id', reportController.obtenerInformePorId);

/**
 * @swagger
 * /api/informes:
 *   post:
 *     summary: Crear un nuevo informe
 *     tags: [Informe]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Informe'
 *     responses:
 *       201:
 *         description: Informe creado exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post('/', reportController.crearInforme);

/**
 * @swagger
 * /api/informes/{id}:
 *   put:
 *     summary: Actualizar informe por ID
 *     tags: [Informe]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del informe
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Informe'
 *     responses:
 *       200:
 *         description: Informe actualizado exitosamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Informe no encontrado
 */
router.put('/:id', reportController.actualizarInforme);

/**
 * @swagger
 * /api/informes/{id}:
 *   delete:
 *     summary: Desactivar informe por ID
 *     tags: [Informe]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del informe
 *     responses:
 *       200:
 *         description: Informe desactivado correctamente
 *       404:
 *         description: Informe no encontrado
 */
router.delete('/:id', reportController.desactivarInforme);

module.exports = router;