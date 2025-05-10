'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FaCircleCheck } from 'react-icons/fa6'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/common/button'
import { FormDescription } from '@/components/ui/common/form'
import { Loader } from '@/components/ui/common/loader'
import { Typography } from '@/components/ui/common/typography'
import { InputForm } from '@/components/ui/shared/input-form'

import { useResetPasswordMutation } from '@/graphql/generated/output'

import {
	TypeResetPasswordSchema,
	resetPasswordSchema
} from '@/schemas/auth/reset-password.schema'

import { AuthFormWrapper } from './auth-wrapper'

type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>

export const ResetPasswordForm = () => {
	const [isSuccess, setIsSuccess] = useState(false)

	const form = useForm<ResetPasswordFormValues>({
		resolver: zodResolver(resetPasswordSchema),
		defaultValues: {
			email: ''
		}
	})

	const router = useRouter()

	const [resetPassword, { loading: isLoading }] = useResetPasswordMutation({
		onCompleted: () => {
			setIsSuccess(true)
		},
		onError: () => {
			toast.error('Ошибка при сбросе пароля')
		}
	})

	function onSubmit(data: TypeResetPasswordSchema) {
		resetPassword({ variables: { data } })
	}

	return (
		<AuthFormWrapper title='Сброс'>
			{isSuccess ? (
				<div className='flex flex-col items-center gap-6 px-8 pt-4'>
					<FaCircleCheck size={50} className='text-custom-access' />
					<Typography variant='h2'>Ссылка отправлена</Typography>
					<Typography variant='body1' className='text-center'>
						Мы отправили ссылку для сброса пароля на вашу почту
					</Typography>
					<Button
						size={'lg'}
						variant={'outline'}
						onClick={() => {
							router.push('/auth/login')
						}}
					>
						Назад
					</Button>
				</div>
			) : (
				<FormProvider {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
						<InputForm
							label='Почта'
							name='email'
							placeholder='sviborg@mail.com'
							type='email'
						/>
						<FormDescription>
							Введите вашу почту, на которую будет отправлен новый пароль
						</FormDescription>

						<Button
							type='submit'
							size={'lg'}
							className='mt-4 w-full'
							disabled={isLoading}
						>
							{isLoading ? <Loader /> : 'Отправить'}
						</Button>
					</form>
				</FormProvider>
			)}
		</AuthFormWrapper>
	)
}
