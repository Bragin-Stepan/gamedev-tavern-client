'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useParams, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FaCircleCheck } from 'react-icons/fa6'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/common/button'
import { Loader } from '@/components/ui/common/loader'
import { Typography } from '@/components/ui/common/typography'
import { InputForm } from '@/components/ui/shared/input-form'

import {
	useNewPasswordMutation,
	useResetPasswordMutation
} from '@/graphql/generated/output'

import {
	type TypeNewPasswordSchema,
	newPasswordSchema
} from '@/schemas/auth/new-passsword.schema'

import { AuthFormWrapper } from './auth-wrapper'

export const NewPasswordForm = () => {
	const router = useRouter()
	const params = useParams<{ token: string }>()

	const form = useForm<TypeNewPasswordSchema>({
		resolver: zodResolver(newPasswordSchema),
		defaultValues: {
			password: '',
			passwordRepeat: ''
		}
	})

	const [newPassword, { loading: isLoading }] = useNewPasswordMutation({
		onCompleted(data) {
			toast.success('Пароль успешно изменен')
			router.push('/auth/login')
		},
		onError() {
			toast.error('Ошибка при сбросе пароля')
		}
	})

	const { isValid } = form.formState

	function onSubmit(data: TypeNewPasswordSchema) {
		newPassword({ variables: { data: { ...data, token: params.token } } })
	}

	return (
		<AuthFormWrapper title='Новый пароль'>
			<FormProvider {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
					<InputForm
						label='Пароль'
						name='password'
						placeholder='••••••'
						type='password'
					/>

					<InputForm
						label='Подтвердите пароль'
						name='passwordRepeat'
						placeholder='••••••'
						type='password'
					/>

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
		</AuthFormWrapper>
	)
}
