import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const connectionURI = "mongodb+srv://fullstack:<db_password>@cluster0.dq6k6c9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0".replace("<db_password>",process.env.MONGO_PASSWORD as string);
    const conn = await mongoose.connect(connectionURI, {
      dbName: "myDatabase", // Opcional: Nombre específico de la base de datos
    });

    console.log(`🔗 MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Detener la ejecución si la conexión falla
  }
};

export default connectDB;