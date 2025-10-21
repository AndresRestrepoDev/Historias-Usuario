import { DataTypes, Model, type CreationOptional, type InferAttributes, type InferCreationAttributes } from 'sequelize';
import { sequelize } from '../config/database.ts'; // Asegúrate de que esta ruta sea correcta

export class Product extends Model<
  InferAttributes<Product>,
  InferCreationAttributes<Product>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare description: string | null;
  declare price: number; // Usamos number para decimal, o puedes usar DECIMAL en PostgreSQL
  declare stock: CreationOptional<number>; // Cantidad en inventario
  declare imageUrl: string | null;
  declare createdBy: number; // Foreign key al Usuario que creó el producto
  declare status: CreationOptional<string>; // Ejemplo: 'available', 'out_of_stock', 'discontinued'
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
      type: DataTypes.FLOAT, // Puede ser DataTypes.DECIMAL para precisión financiera
      allowNull: false,
      field: 'price',
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'stock',
    },
    imageUrl: {
      type: DataTypes.TEXT,
      field: 'image_url',
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'created_by',
      // NOTA: Para una FK funcional, deberás definir la asociación
      // Product.belongsTo(User, { foreignKey: 'createdBy' });
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: 'available',
      field: 'status',
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