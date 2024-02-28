import app from "./app.js";
import dotenv from 'dotenv';
import { connectDB } from "./db.js";

dotenv.config();

connectDB()
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log('Iniciando el servidor en el puerto', PORT);
});