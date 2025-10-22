import { User } from '../models/user.model.ts';
import { Product } from '../models/product.model.ts';
import { Client } from '../models/client.model.ts';

export const seedDatabase = async () => {
  console.log('[Seed] Poblando tablas...');

  // Crea un usuario de prueba
  const admin = await User.create({
    name: 'Administrador',
    email: 'admin@example.com',
    password: '123456',
    role: 'admin',
  });

  // Crea un cliente asociado
  const client = await Client.create({
    name: 'Cliente demo',
    email: 'cliente@example.com',
    phone: '555-1234',
    address: 'Calle Falsa 123',
    user_id: admin.id,
  });

  // Crea productos asociados
  await Product.bulkCreate([
    { name: 'Producto 1', description: 'Numero uno en limpieza', price: 10, stock: 12, user_id: admin.id, client_id: client.id },
    { name: 'Producto 2', description: 'Se agota rapido', price: 20, stock: 16, user_id: admin.id, client_id: client.id },
  ]);

  console.log('[Seed] Tablas pobladas con datos de prueba.');
};
