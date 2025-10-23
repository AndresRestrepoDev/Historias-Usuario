import { Client } from "../models/client.model.ts";

export class ClientDAO {
  static findAll() {
    return Client.findAll();
  }

  static findById(id: number) {
    return Client.findByPk(id);
  }

  static create(data: any) {
    return Client.create(data);
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
