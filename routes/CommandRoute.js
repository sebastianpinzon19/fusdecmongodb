const express = require('express');
const commandController = require('../controllers/Command_controller');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Comando:
 *       type: object
 *       required:
 *         - commandId
 *       properties:
 *         commandId:
 *           type: string
 *           description: ID del comando
 *         description:
 *           type: string
 *           description: Descripción del comando
 *         status:
 *           type: boolean
 *           description: Estado del comando
 *       example:
 *         commandId: "12345"
 *         description: "Comando de prueba"
 *         status: true
 */

/**
 * @swagger
 * /api/comandos:
 *   get:
 *     summary: Listar todos los comandos
 *     tags: [Comando]
 *     responses:
 *       200:
 *         description: Lista de comandos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Comando'
 */
router.get('/', commandController.listarComandos);

/**
 * @swagger
 * /api/comandos/{id}:
 *   get:
 *     summary: Obtener comando por ID
 *     tags: [Comando]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del comando
 *     responses:
 *       200:
 *         description: Detalles del comando
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comando'
 *       404:
 *         description: Comando no encontrado
 */
router.get('/:id', commandController.obtenerComandoPorId);

/**
 * @swagger
 * /api/comandos:
 *   post:
 *     summary: Crear un nuevo comando
 *     tags: [Comando]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comando'
 *     responses:
 *       201:
 *         description: Comando creado exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post('/', commandController.crearComando);

/**
 * @swagger
 * /api/comandos/{id}:
 *   put:
 *     summary: Actualizar comando por ID
 *     tags: [Comando]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del comando
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comando'
 *     responses:
 *       200:
 *         description: Comando actualizado exitosamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Comando no encontrado
 */
router.put('/:id', commandController.actualizarComando);

/**
 * @swagger
 * /api/comandos/{id}:
 *   delete:
 *     summary: Desactivar comando por ID
 *     tags: [Comando]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del comando
 *     responses:
 *       200:
 *         description: Comando desactivado correctamente
 *       404:
 *         description: Comando no encontrado
 */
router.delete('/:id', commandController.desactivarComando);

module.exports = router;