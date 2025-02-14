import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string, {
      dbName: "myDatabase", // Opcional: Nombre específico de la base de datos
    });

    console.log(`🔗 MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Detener la ejecución si la conexión falla
  }
};

export default connectDB;