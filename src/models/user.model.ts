import { DataTypes, Model, type CreationOptional, type InferAttributes, type InferCreationAttributes } from 'sequelize';
import { sequelize } from '../config/database.ts'; 

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare email: string;
  declare password: string; 
  declare role: CreationOptional<string>; 
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
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'name',
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
      field: 'email',
    },
    password: {
      type: DataTypes.STRING(255), 
      allowNull: false,
      field: 'password',
    },
    role: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: 'basic',
      field: 'role',
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