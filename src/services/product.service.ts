import { ProductDAO } from "../dao/product.dao.ts";

export class ProductService {
  static getAll() {
    return ProductDAO.findAll();
  }

  static getById(id: number) {
    return ProductDAO.findById(id);
  }

  static create(data: any) {
    return ProductDAO.create(data);
  }

  static update(id: number, data: any) {
    return ProductDAO.update(id, data);
  }

  static delete(id: number) {
    return ProductDAO.delete(id);
  }
}
