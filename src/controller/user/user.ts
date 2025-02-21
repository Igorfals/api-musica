import { UserService } from "../../database/user";
import { ControllerResponse } from "../../schema/controller-response/controller";
import { formatZodErrors } from "../../schema/error";
import { User, UserSchema } from "../../schema/user";

const userService = new UserService()

export class AddUserController {
    async addUSer(request: any): Promise<ControllerResponse> {
        console.log(request);

        try {
            const validation = UserSchema.safeParse(request)
            if (!validation.success) {
                return {
                    statusCode: 400,
                    resposta: {
                        mensagem: formatZodErrors(validation.error.issues)
                    }
                }
            }
            const addUSer: User = {
                name: request.name,
                email: request.email,
                password: request.password,
                status_user: request.status_user
            }
            const user = await userService.setUser(addUSer)
            const userID = await userService.userID(user[0])
            return {
                statusCode: 200,
                resposta: {
                    userID
                }
            }
        } catch (error) {
            console.error(error);
            return {
                statusCode: 500,
                resposta: {
                    mensagem: "Erro no servidor!"
                }
            }
        }
    }
}