'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FaCircleCheck } from 'react-icons/fa6'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/common/button'
import { Typography } from '@/components/ui/common/typography'
import { InputForm } from '@/components/ui/shared/input-form'

import { useCreateUserMutation } from '@/graphql/generated/output'

import { createAccountSchema } from '@/schemas/auth/create-account.schema'

import { AuthFormWrapper } from './auth-wrapper'

type CreateAccountFormValues = z.infer<typeof createAccountSchema>

export const CreateAccountForm = () => {
	const [isSuccess, setIsSuccess] = useState(false)

	const form = useForm<CreateAccountFormValues>({
		resolver: zodResolver(createAccountSchema),
		defaultValues: {
			username: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	})

	const { isValid } = form.formState
	const route = useRouter()

	const [create, { loading: isLoading }] = useCreateUserMutation({
		onCompleted: () => {
			setIsSuccess(true)
		},
		onError: e => {
			toast.error('Ошибка при создании аккаунта')
		}
	})

	const onSubmit = (data: CreateAccountFormValues) => {
		create({
			variables: {
				data: {
					email: data.email,
					password: data.password,
					username: data.username
				}
			}
		})
	}

	return (
		<AuthFormWrapper title='Регистрация'>
			{isSuccess ? (
				<div className='flex flex-col items-center gap-6 px-8 pt-4'>
					<FaCircleCheck size={50} className='text-custom-access' />
					<Typography variant='h2'>Аккаунт создан! </Typography>
					<Typography variant='body1' className='text-center'>
						Проверьте вашу почту для подтверждения
					</Typography>
					{/* <Link href={'/'}>
						<Button size={'lg'}>На главную</Button>
					</Link> */}
				</div>
			) : (
				<FormProvider {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
						<InputForm
							label='Никнейм'
							name='username'
							placeholder='Свиборг'
							type='text'
						/>

						<InputForm
							label='Почта'
							name='email'
							placeholder='sviborg@mail.com'
							type='email'
						/>

						<InputForm
							label='Пароль'
							name='password'
							placeholder='••••••'
							type='password'
						/>

						<InputForm
							label='Подтвердите пароль'
							name='confirmPassword'
							placeholder='••••••'
							type='password'
						/>

						<Button
							type='submit'
							size={'lg'}
							className='mt-4 w-full'
							disabled={isLoading}
						>
							{isLoading ? 'Загрузка...' : 'Зарегистрироваться'}
						</Button>

						<div className='mt-4 text-center text-sm'>
							<Typography variant='subtitle2'>
								Есть аккаунт?
								<Link href={'/auth/login'}>
									<Button
										variant={'link'}
										size={'text'}
										type='button'
										className='text-custom-brand ml-2'
									>
										Войти
									</Button>
								</Link>
							</Typography>
						</div>
					</form>
				</FormProvider>
			)}
		</AuthFormWrapper>
	)
}
