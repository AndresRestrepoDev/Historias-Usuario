import { Product } from "../models/product.model.ts";

export class ProductDAO {
  static findAll() {
    return Product.findAll();
  }

  static findById(id: number) {
    return Product.findByPk(id);
  }

  static create(data: any) {
    return Product.create(data);
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
