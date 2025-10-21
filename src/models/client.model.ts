import { DataTypes, Model, type CreationOptional, type InferAttributes, type InferCreationAttributes } from 'sequelize';
import { sequelize } from '../config/database.ts'; // Asegúrate de que esta ruta sea correcta

export class Client extends Model<
  InferAttributes<Client>,
  InferCreationAttributes<Client>
> {
  declare id: CreationOptional<number>;
  declare name: string; // Nombre completo de la persona o nombre de la empresa
  declare contactEmail: string;
  declare phone: string | null;
  declare address: string | null;
  declare registeredBy: number; // Foreign key al Usuario que registró al cliente
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Client.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'name',
    },
    contactEmail: {
      type: DataTypes.STRING(150),
      unique: true,
      allowNull: false,
      field: 'contact_email',
    },
    phone: {
      type: DataTypes.STRING(50),
      field: 'phone',
    },
    address: {
      type: DataTypes.TEXT,
      field: 'address',
    },
    registeredBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'registered_by',
      // NOTA: Para una FK funcional, deberás definir la asociación
      // Cliente.belongsTo(User, { foreignKey: 'registeredBy' });
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at',
    },
  },
  {
    sequelize,
    tableName: 'clients',
    timestamps: true,
    underscored: true,
    freezeTableName: true,
  }
);