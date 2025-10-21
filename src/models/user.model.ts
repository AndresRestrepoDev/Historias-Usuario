import { DataTypes, Model, type CreationOptional, type InferAttributes, type InferCreationAttributes } from 'sequelize';
import { sequelize } from '../config/database.ts'; // Asegúrate de que esta ruta sea correcta

export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  declare id: CreationOptional<number>;
  declare firstName: string;
  declare lastName: string;
  declare email: string;
  declare password: string; // Se recomienda usar hashing
  declare role: CreationOptional<string>; // Ejemplo: 'admin', 'sales', 'basic'
  declare status: CreationOptional<string>; // Ejemplo: 'active', 'inactive'
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'first_name',
    },
    lastName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'last_name',
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
      field: 'email',
    },
    password: {
      type: DataTypes.STRING(255), // Suficientemente grande para un hash de password
      allowNull: false,
      field: 'password',
    },
    role: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: 'basic',
      field: 'role',
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: 'active',
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
    tableName: 'users',
    timestamps: true,
    underscored: true,
    freezeTableName: true,
  }
);