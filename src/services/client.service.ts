import { Client } from "../models/client.model.ts";

export class ClientService {
  static async getAll() {
    return await Client.findAll();
  }

  static async getById(id: number) {
    return await Client.findByPk(id);
  }

  static async create(data: any) {
    return await Client.create(data);
  }

  static async update(id: number, data: Partial<Client>) {
    const client = await Client.findByPk(id);
    if (!client) return null;
    await client.update(data);
    return client;
  }

  static async delete(id: number) {
    const client = await Client.findByPk(id);
    if (!client) return null;
    await client.destroy();
    return client;
  }
}
