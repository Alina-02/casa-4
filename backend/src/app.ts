import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Importamos el router principal
import routes from './routes';
import connectDB from './config/mongoDB';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', routes);

connectDB();

// Levantar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
