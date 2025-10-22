import { User } from './user.model.ts';
import { Product } from './product.model.ts';
import { Client } from './client.model.ts';

export const inicializarModelos = () => {
    User.hasMany(Product, { foreignKey: 'user_id', as: 'products' });
    Product.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

    User.hasMany(Client, { foreignKey: 'user_id', as: 'clients' });
    Client.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

    Client.hasMany(Product, { foreignKey: 'client_id', as: 'products' });
    Product.belongsTo(Client, { foreignKey: 'client_id', as: 'client' });
}