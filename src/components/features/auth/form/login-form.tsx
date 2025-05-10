'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/common/button'
import { Loader } from '@/components/ui/common/loader'
import { Typography } from '@/components/ui/common/typography'
import { InputForm } from '@/components/ui/shared/input-form'

import { useLoginUserMutation } from '@/graphql/generated/output'

import { useAuth } from '@/hooks/use-auth'

import { TypeLoginSchema, loginSchema } from '@/schemas/auth/login.schema'

import { AuthFormWrapper } from './auth-wrapper'

type LoginFormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
	const [errorMessage, setErrorMessage] = useState<string | null>(null)
	const form = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			login: '',
			password: ''
		}
	})

	const { auth } = useAuth()
	const router = useRouter()
	const { isValid } = form.formState

	const [login, { loading: isLoading }] = useLoginUserMutation({
		onCompleted: () => {
			auth()
			router.push('/')
			toast.success('Аккаунт успешно авторизован')
		},
		onError: e => {
			setErrorMessage(e.message)
			toast.error(e.message)
		}
	})

	const onSubmit = (data: TypeLoginSchema) => {
		login({
			variables: {
				data
			}
		})
	}

	return (
		<AuthFormWrapper title='Вход'>
			<FormProvider {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
					<InputForm
						label='Почта'
						name='login'
						placeholder='Почта'
						type='email'
					/>

					<div className='relative'>
						<InputForm
							label='Пароль'
							name='password'
							placeholder='••••••••'
							type='password'
						/>
						<Link href={'/auth/recovery'} className='absolute top-0 right-0'>
							<Button size={'text'} variant={'link'} type='button'>
								Забыл пароль?
							</Button>
						</Link>
					</div>

					<Button
						type='submit'
						size={'lg'}
						className='mt-4 w-full'
						disabled={!isValid}
					>
						{isLoading ? <Loader /> : 'Войти'}
					</Button>

					{errorMessage && (
						<Typography className='text-custom-error pb-4'>
							{errorMessage}
						</Typography>
					)}

					<div className='mt-4 text-center text-sm'>
						<Typography variant='subtitle2'>
							Нет аккаунта?
							<Link href={'/auth/create'}>
								<Button
									variant={'link'}
									size={'text'}
									type='button'
									className='text-custom-brand ml-2'
								>
									Зарегистрируйтесь
								</Button>
							</Link>
						</Typography>
					</div>
				</form>
			</FormProvider>
		</AuthFormWrapper>
	)
}
