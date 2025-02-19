import { z } from 'zod'

export const formatZodErrors = function formatZodErrors(errors: z.ZodIssue[]): string {
    return errors.map((err) => `${err.path.join('.')} - ${err.message}`).join(', ')
}
