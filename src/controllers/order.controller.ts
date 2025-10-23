import type { Request, Response } from "express";
import { OrderService } from "../services/order.service.ts";

export class OrderController {
  static async createOrder(req: Request, res: Response) {
    try {
      const order = await OrderService.createOrder(req.body);
      res.status(201).json(order);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
