/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Endpoints para gestión de productos
 *
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - price
 *         - stock
 *         - user_id
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: "Producto 1"
 *         description:
 *           type: string
 *           example: "Descripción del producto"
 *         price:
 *           type: number
 *           example: 10.5
 *         stock:
 *           type: integer
 *           example: 100
 *         code:
 *           type: string
 *           example: "PROD-001"
 *         user_id:
 *           type: integer
 *           example: 1
 *         client_id:
 *           type: integer
 *           example: 2
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 * paths:
 *   /product:
 *     get:
 *       tags: [Products]
 *       summary: Obtener todos los productos
 *       responses:
 *         200:
 *           description: Lista de productos
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Product'
 *         500:
 *           description: Error del servidor
 *
 *     post:
 *       tags: [Products]
 *       summary: Crear un nuevo producto
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       responses:
 *         201:
 *           description: Producto creado
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Product'
 *         400:
 *           description: Datos inválidos
 *         409:
 *           description: Conflicto (por ejemplo código duplicado)
 *
 *   /product/{id}:
 *     get:
 *       tags: [Products]
 *       summary: Obtener un producto por ID
 *       parameters:
 *         - name: id
 *           in: path
 *           description: ID del producto
 *           required: true
 *           schema:
 *             type: integer
 *       responses:
 *         200:
 *           description: Producto encontrado
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Product'
 *         404:
 *           description: Producto no encontrado
 *         400:
 *           description: ID inválido
 *
 *     put:
 *       tags: [Products]
 *       summary: Actualizar un producto
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *             type: integer
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       responses:
 *         200:
 *           description: Producto actualizado
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Product'
 *         400:
 *           description: Datos inválidos
 *         404:
 *           description: Producto no encontrado
 *
 *     delete:
 *       tags: [Products]
 *       summary: Eliminar un producto
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *             type: integer
 *       responses:
 *         204:
 *           description: Producto eliminado
 *         404:
 *           description: Producto no encontrado
 */

import { Router } from "express";
import { productController } from "../controllers/product.controller.ts";

const router = Router();

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

export default router;
