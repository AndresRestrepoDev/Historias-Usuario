import { ClientDAO } from "../dao/client.dao.ts";

export class ClientService {
  static getAll() {
    return ClientDAO.findAll();
  }

  static getById(id: number) {
    return ClientDAO.findById(id);
  }

  static create(data: any) {
    return ClientDAO.create(data);
  }

  static update(id: number, data: any) {
    return ClientDAO.update(id, data);
  }

  static delete(id: number) {
    return ClientDAO.delete(id);
  }
}
