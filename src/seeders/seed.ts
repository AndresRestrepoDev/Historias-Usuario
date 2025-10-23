import { User } from '../models/user.model.ts';
import { Product } from '../models/product.model.ts';
import { Client } from '../models/client.model.ts';
import { hashPassword } from '../utils/auth.ts';

export const seedDatabase = async () => {
  console.log('[Seed] Poblando tablas...');

  const adminPasswordHashed = await hashPassword('123456');

  // 1️⃣ Usuario admin
  const [admin] = await User.findOrCreate({
    where: { email: 'admin@example.com' },
    defaults: {
      name: 'Administrador',
      email: 'admin@example.com',
      password: adminPasswordHashed,
      role: 'admin',
    },
  });

  // 2️⃣ Cliente demo
  const [client] = await Client.findOrCreate({
    where: { email: 'cliente@example.com' },
    defaults: {
      name: 'Cliente demo',
      email: 'cliente@example.com',
      phone: '555-1234',
      address: 'Calle Falsa 123',
      user_id: admin.id,
    },
  });

  // 3️⃣ Productos
  const productsData = [
    {
      name: 'Producto 1',
      description: 'Numero uno en limpieza',
      price: 10,
      stock: 12,
      code: 'PROD-001',
      user_id: admin.id
    },
    {
      name: 'Producto 2',
      description: 'Se agota rapido',
      price: 20,
      stock: 16,
      code: 'PROD-002',
      user_id: admin.id
    },
  ];

  for (const product of productsData) {
    await Product.findOrCreate({
      where: { name: product.name },
      defaults: product,
    });
  }

  console.log('[Seed] Tablas pobladas con datos de prueba.');
};
