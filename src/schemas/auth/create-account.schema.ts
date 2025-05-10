import { z } from 'zod'

export const createAccountSchema = z
	.object({
		username: z.string().max(30, 'Максимум 30 символов'),
		email: z.string().email().min(4, 'Минимум 4 символа'),
		password: z.string().min(8, 'Минимум 8 символов'),
		confirmPassword: z.string()
	})
	.refine(data => data.password === data.confirmPassword, {
		message: 'Пароли не совпадают',
		path: ['confirmPassword']
	})

export type TypeCreateAccountSchema = z.infer<typeof createAccountSchema>
