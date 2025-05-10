import { z } from 'zod'

export const newPasswordSchema = z
	.object({
		password: z.string().min(8, 'Минимум 8 символов'),
		passwordRepeat: z.string().min(8, 'Минимум 8 символов')
	})
	.refine(data => data.password === data.passwordRepeat, {
		path: ['passwordRepeat']
	})

export type TypeNewPasswordSchema = z.infer<typeof newPasswordSchema>
