import { DataTypes, Model, type CreationOptional, type InferAttributes, type InferCreationAttributes } from 'sequelize';
import { sequelize } from '../config/database.ts'; 

export class Client extends Model<InferAttributes<Client>, InferCreationAttributes<Client>> {
  declare id: CreationOptional<number>;
  declare name: string; 
  declare email: string;
  declare phone: string | null;
  declare address: string | null;
  declare user_id: number; // Foreign key al Usuario que registró al cliente
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
    email: {
      type: DataTypes.STRING(150),
      unique: true,
      allowNull: false,
      field: 'email',
    },
    phone: {
      type: DataTypes.STRING(50),
      field: 'phone',
    },
    address: {
      type: DataTypes.TEXT,
      field: 'address',
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
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