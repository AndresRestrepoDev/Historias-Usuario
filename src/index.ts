import express from 'express';
import 'dotenv/config';
import { connectDB } from './config/database.ts'; 



const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json());


await connectDB();

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});