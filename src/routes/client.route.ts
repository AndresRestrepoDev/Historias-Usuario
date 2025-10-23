/**
 * @swagger
 * tags:
 *   name: Clients
 *   description: Endpoints para gestión de clientes
 */

/**
 * @swagger
 * /client:
 *   get:
 *     summary: Obtener todos los clientes
 *     tags: [Clients]
 *     responses:
 *       200:
 *         description: Lista de clientes
 */

/**
 * @swagger
 * /client/{id}:
 *   get:
 *     summary: Obtener un cliente por ID
 *     tags: [Clients]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del cliente
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cliente encontrado
 *       404:
 *         description: Cliente no encontrado
 */

/**
 * @swagger
 * /client:
 *   post:
 *     summary: Crear un nuevo cliente
 *     tags: [Clients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Client'
 *     responses:
 *       201:
 *         description: Cliente creado
 */

/**
 * @swagger
 * /client/{id}:
 *   put:
 *     summary: Actualizar un cliente
 *     tags: [Clients]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del cliente a actualizar
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Client'
 *     responses:
 *       200:
 *         description: Cliente actualizado
 *       404:
 *         description: Cliente no encontrado
 */

/**
 * @swagger
 * /client/{id}:
 *   delete:
 *     summary: Eliminar un cliente
 *     tags: [Clients]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del cliente a eliminar
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Cliente eliminado
 *       404:
 *         description: Cliente no encontrado
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Client:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - user_id
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         phone:
 *           type: string
 *         address:
 *           type: string
 *         user_id:
 *           type: integer
 *         createdAt:
 *           type: string
 *         updatedAt:
 *           type: string
 */


import { Router } from "express";
import { ClientController } from "../controllers/client.controller.ts";
import { validate } from "../middlewares/validate.middleware.ts";
import { ClientSchema } from "../dtos/client.dto.ts";

const router = Router();

router.get('/', ClientController.getAllClients);
router.get('/:id', ClientController.getClientById);
router.post('/', validate(ClientSchema), ClientController.createClient);
router.put('/:id', validate(ClientSchema), ClientController.updateClient);
router.delete('/:id', ClientController.deleteClient);

export default router;
