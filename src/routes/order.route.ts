/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Endpoints para gestión de pedidos
 */

/**
 * @swagger
 * /order:
 *   get:
 *     summary: Obtener pedidos con filtros opcionales
 *     tags: [Orders]
 *     parameters:
 *       - in: query
 *         name: client_id
 *         schema:
 *           type: integer
 *         description: Filtrar por ID del cliente
 *       - in: query
 *         name: product_id
 *         schema:
 *           type: integer
 *         description: Filtrar por ID del producto
 *     responses:
 *       200:
 *         description: Lista de pedidos con productos relacionados
 */

/**
 * @swagger
 * /order:
 *   post:
 *     summary: Crear un nuevo pedido
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewOrder'
 *     responses:
 *       201:
 *         description: Pedido creado
 *       400:
 *         description: Error por falta de stock o datos inválidos
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     NewOrder:
 *       type: object
 *       required:
 *         - client_id
 *         - user_id
 *         - products
 *       properties:
 *         client_id:
 *           type: integer
 *         user_id:
 *           type: integer
 *         products:
 *           type: array
 *           items:
 *             type: object
 *             required:
 *               - product_id
 *               - quantity
 *             properties:
 *               product_id:
 *                 type: integer
 *               quantity:
 *                 type: integer
 */


import { Router } from "express";
import { OrderController } from "../controllers/order.controller.ts";

const router = Router();

router.post('/', OrderController.createOrder);
router.get('/', OrderController.getOrders);

export default router;
