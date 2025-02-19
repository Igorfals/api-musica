import { z } from "zod";

export const UserSchema = z.object({
    id_user: z.number().optional(),
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    status_user: z.number().optional()
});

export type User = z.infer<typeof UserSchema>;
