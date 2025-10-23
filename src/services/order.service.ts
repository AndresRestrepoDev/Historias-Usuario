import { OrderDAO } from "../dao/order.dao.ts";
import { Product } from "../models/product.model.ts";

export class OrderService {
  static async createOrder(data: {
    client_id: number;
    user_id: number;
    products: { product_id: number; quantity: number }[];
  }) {
    const productIds = data.products.map(p => p.product_id);
    const dbProducts = await Product.findAll({ where: { id: productIds } });

    for (const item of data.products) {
      const product = dbProducts.find(p => p.id === item.product_id);
      if (!product) throw new Error(`Product ID ${item.product_id} not found`);
      if (product.stock < item.quantity) {
        throw new Error(`Insufficient stock for product "${product.name}"`);
      }
    }

    for (const item of data.products) {
      const product = dbProducts.find(p => p.id === item.product_id)!;
      product.stock -= item.quantity;
      await product.save(); 
    }

    const productsWithPrice = data.products.map(item => {
      const product = dbProducts.find(p => p.id === item.product_id)!;
      return {
        ...item,
        price: product.price
      };
    });

    const order = await OrderDAO.create({
      client_id: data.client_id,
      user_id: data.user_id,
      products: productsWithPrice
    });

    return order;
  }
}
