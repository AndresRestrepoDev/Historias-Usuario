import { Order } from "../models/order.model.ts";
import { OrderProduct } from "../models/order-product.model.ts";
import { Product } from "../models/product.model.ts";
import { sequelize } from "../config/database.ts";

export class OrderDAO {
  static async findAll() {
    return Order.findAll({ include: [Product] });
  }

  static async findById(id: number) {
    return Order.findByPk(id, { include: [Product] });
  }

  static async create(data: {
    client_id: number;
    user_id: number;
    products: { product_id: number; quantity: number; price: number }[];
  }) {
    return sequelize.transaction(async (t) => {
      const total = data.products.reduce((sum, p) => sum + p.quantity * p.price, 0);

      const order = await Order.create(
        {
          client_id: data.client_id,
          user_id: data.user_id,
          total,
        },
        { transaction: t }
      );

      for (const p of data.products) {
        await OrderProduct.create(
          {
            order_id: order.id,
            product_id: p.product_id,
            quantity: p.quantity,
            price_at_time: p.price,
          },
          { transaction: t }
        );
      }

      return order;
    });
  }

  static async delete(id: number) {
    return sequelize.transaction(async (t) => {
      await OrderProduct.destroy({ where: { order_id: id }, transaction: t });
      return Order.destroy({ where: { id }, transaction: t });
    });
  }
}
