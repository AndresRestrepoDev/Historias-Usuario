import { Product } from "../models/product.model.ts";

export class ProductService {
  static async getAll() {
    return await Product.findAll();
  }

  static async getById(id: number) {
    return await Product.findByPk(id);
  }

  static async create(data: any) {
    return await Product.create(data);
  }

  static async update(id: number, data: Partial<Product>) {
    const product = await Product.findByPk(id);
    if (!product) return null;
    await product.update(data);
    return product;
  }

  static async delete(id: number) {
    const product = await Product.findByPk(id);
    if (!product) return null;
    await product.destroy();
    return product;
  }
}
