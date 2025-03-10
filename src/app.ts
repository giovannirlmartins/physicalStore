import express from "express";
import routes from "./routes/routes";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use("/search", routes); // Rotas para buscar lojas físicas

export default app;
