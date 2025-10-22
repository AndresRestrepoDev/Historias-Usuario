import { User } from './user.model.ts';
import { Product } from './product.model.ts';
import { Client } from './client.model.ts';

export const inicializarModelos = () => {
    User.hasMany(Product, { foreignKey: 'user_id', as: 'products', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
    Product.belongsTo(User, { foreignKey: 'user_id', as: 'user', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

    User.hasMany(Client, { foreignKey: 'user_id', as: 'clients', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
    Client.belongsTo(User, { foreignKey: 'user_id', as: 'user', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

    Client.hasMany(Product, { foreignKey: 'client_id', as: 'products', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
    Product.belongsTo(Client, { foreignKey: 'client_id', as: 'client', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
}