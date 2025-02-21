import express, { Application } from "express";
import songsRoutes from "./routes/song";
import { UserMiddleware } from "./middleware/user";

const app: Application = express();

app.use(express.json());

const userAdd = new UserMiddleware()

// Rotas
app.use("/songs", songsRoutes);
app.use("/user", userAdd.setUSer);

app.get("/", (req, res) => {
    res.send("API de Música está funcionando!");
});

export default app;
