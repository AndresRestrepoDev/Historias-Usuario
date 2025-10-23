import { User } from '../models/user.model.ts';

export class UserDAO {
  // Buscar usuario por email
  static async findByEmail(email: string) {
    return await User.findOne({ where: { email } });
  }

  // Buscar usuario por ID
  static async findById(id: number) {
    return await User.findByPk(id);
  }

  // Crear un nuevo usuario
  static async createUser(data: { name: string; email: string; password: string }) {
    return await User.create(data);
  }

  // Actualizar refresh token
  static async updateRefreshToken(id: number, refreshToken: string) {
    return await User.update({ refreshToken }, { where: { id } });
  }

  // Eliminar usuario
  static async deleteUser(id: number) {
    return await User.destroy({ where: { id } });
  }
}
