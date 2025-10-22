import { DataTypes, Model, type CreationOptional, type InferAttributes, type InferCreationAttributes } from 'sequelize';
import { sequelize } from '../config/database.ts'; 

export class Product extends Model<InferAttributes<Product>, InferCreationAttributes<Product>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare description: string | null;
  declare price: number; 
  declare stock: CreationOptional<number>; 
  declare user_id: number; // Foreign key al Usuario que creó el producto
  declare client_id: number; // Foreign key al Cliente asociado (si aplica)
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      unique: true,
      field: 'name',
    },
    description: {
      type: DataTypes.TEXT,
      field: 'description',
    },
    price: {
      type: DataTypes.FLOAT, 
      allowNull: false,
      field: 'price',
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'stock',
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
    },
    client_id: {
      type: DataTypes.INTEGER,
      field: 'client_id',
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
    tableName: 'products',
    timestamps: true,
    underscored: true,
    freezeTableName: true,
  }
);