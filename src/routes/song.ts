import { Router } from "express";

const router = Router();

// Rotas para músicas
router.get("/", (req, res) => {
    res.send("Listando todas as músicas");
});

export default router;