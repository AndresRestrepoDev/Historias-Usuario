import { Sequelize } from "sequelize";
import "dotenv/config";

export const sequelize = new Sequelize(
  process.env.DB_NAME! as string,
  process.env.DB_USER! as string,
  process.env.DB_PASSWORD! as string,
  {
    host: process.env.DB_HOST as string,
    port: Number(process.env.DB_PORT),
    dialect: "postgres",
    logging: false,
    define: {
      underscored: true,
    },
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("[DB] Conexión a PostgreSQL exitosa");
  } catch (error) {
    console.error("[DB] Error al conectar a la base de datos:", error);
    process.exit(1);
}
};
