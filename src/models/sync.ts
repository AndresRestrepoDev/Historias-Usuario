// Por ejemplo, en tu archivo `src/index.ts` o `src/db/sync.ts`

import { sequelize } from '../config/database.ts'; // Tu instancia de Sequelize
import { User } from './user.model.ts';
import { Client } from './client.model.ts'; 
import { Product } from './product.model.ts'; 

// Opcional: Definir relaciones (necesario para FKs)
// User.hasMany(Product, { foreignKey: 'createdBy' });
// Product.belongsTo(User, { foreignKey: 'createdBy' });

async function syncDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida con éxito.');

    // Sincroniza todos los modelos.
    // { alter: true } intenta hacer los cambios en la DB sin borrar datos.
    await sequelize.sync({ alter: true });
    console.log('¡Base de datos y tablas sincronizadas (alter: true)!');
  } catch (error) {
    console.error('No se pudo sincronizar la base de datos:', error);
  }
}

syncDatabase();