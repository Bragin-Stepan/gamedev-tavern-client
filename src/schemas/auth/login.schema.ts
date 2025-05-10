import { z } from 'zod'

export const loginSchema = z.object({
	login: z.string().email().min(4, 'Минимум 4 символа'),
	password: z.string().min(8, 'Минимум 8 символов')
})

export type TypeLoginSchema = z.infer<typeof loginSchema>
