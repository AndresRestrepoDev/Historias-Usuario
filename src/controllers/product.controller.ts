import type { Request, Response } from 'express';
import { ProductService } from '../services/product.service.ts';

export class productController {
  static async getAllProducts(req: Request, res: Response) {
    try {
      const products = await ProductService.getAll();
      res.json(products);
    } catch {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async getProductById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const product = await ProductService.getById(id);
      if (!product) return res.status(404).json({ message: 'Product not found' });
      res.json(product);
    } catch {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async createProduct(req: Request, res: Response) {
    try {
      const { name, description, price, stock, code, user_id } = req.body;
      const newProduct = await ProductService.create( {name, description, price, stock, code, user_id} );
      res.status(201).json(newProduct);
    } catch {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async updateProduct(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const productData = req.body;
      const updatedProduct = await ProductService.update(id, productData);
      if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
      res.json(updatedProduct);
    } catch {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async deleteProduct(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const deletedProduct = await ProductService.delete(id);
      if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
      res.json({ message: 'Product deleted successfully' });
    } catch {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
