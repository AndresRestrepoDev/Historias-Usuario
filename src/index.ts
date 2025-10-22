import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { sequelize } from './config/database.ts';
import { inicializarModelos } from './models/initModels.ts';
import { seedDatabase } from './seeders/seed.ts';

const PORT = process.env.PORT || 3002;

const app = express();

const whitelist = ["http://127.0.0.1:5500", "http://localhost:5500"];
const corsOptions = {
  origin: (origin:any, callback:any) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));
app.use(express.json());

app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});


const initDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('[DB] connection to the database successfully');

        inicializarModelos();
        await sequelize.sync({ alter: true }); 
        console.log('[DB] ✅ Models synchronized');

        await seedDatabase();
        
    } catch (error) {
        console.error('[DB] connection to the database failed', error);
        throw error;
    }
};

const startProgram = async () => {
    try{
        await initDB();
        app.listen(PORT, () => {
        console.log(`[Server] server running in http://localhost:${PORT}`)
        })
    } catch (error) {
        console.error('[Server] Startup aborted due to database error')
        process.exit(1);
    }
}

startProgram()