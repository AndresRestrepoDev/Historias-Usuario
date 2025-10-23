import { Router } from "express";
import { OrderController } from "../controllers/order.controller.ts";

const router = Router();

router.post('/', OrderController.createOrder);

export default router;
