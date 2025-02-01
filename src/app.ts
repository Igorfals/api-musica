import express, { Application } from "express";
import songsRoutes from "./routes/song"

const app: Application = express();

const foo = 'bar'


// Middlewares
app.use(express.json())

// Rotas de exemplo
app.use("/songs", songsRoutes);
app.get("/", (req, res) => {
  res.send("API de Música está funcionando!");
});

export default app;