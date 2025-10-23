import type { Request, Response } from 'express';
import { ClientService } from '../services/client.service.ts';

export class ClientController {
  static async getAllClients(req: Request, res: Response) {
    try {
      const clients = await ClientService.getAll();
      res.json(clients);
    } catch {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async getClientById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const client = await ClientService.getById(id);
      if (!client) return res.status(404).json({ message: 'Client not found' });
      res.json(client);
    } catch {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async createClient(req: Request, res: Response) {
    try {
      const { name, email, phone, address, user_id } = req.body;
      const newClient = await ClientService.create({name, email, phone, address, user_id});
      res.status(201).json(newClient);
    } catch {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async updateClient(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const clientData = req.body;
      const updatedClient = await ClientService.update(id, clientData);
      if (!updatedClient) return res.status(404).json({ message: 'Client not found' });
      res.json(updatedClient);
    } catch {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async deleteClient(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const deletedClient = await ClientService.delete(id);
      if (!deletedClient) return res.status(404).json({ message: 'Client not found' });
      res.json({ message: 'Client deleted successfully' });
    } catch {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
