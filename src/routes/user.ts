import { Router } from "express";
import { UserMiddleware } from "../middleware/user";

const router = Router();
const addUser = new UserMiddleware();

router.post('/user/add', addUser.setUSer)
console.log(addUser);


export default router;
