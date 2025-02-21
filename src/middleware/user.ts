import { Request, Response, Router } from "express";
import { AddUserController } from "../controller/user/user";
import { ControllerResponse } from "../schema/controller-response/controller";

// const router = Router();
const addUser = new AddUserController();

export class UserMiddleware {
    async setUSer(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await addUser.addUSer(req.body)
        console.log(dados);

        res.status(dados.statusCode).send(dados.resposta)
    }
}