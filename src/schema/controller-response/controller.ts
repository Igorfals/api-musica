import { z } from 'zod';

export const ControllerResponseSchema = z.object({
    statusCode: z.number(),
    resposta: z.record(z.any()),
});

export type ControllerResponse = z.infer<typeof ControllerResponseSchema>;
