'use client'

import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/common/button'
import { Typography } from '@/components/ui/common/typography'
import { WBlock } from '@/components/ui/shared/w-block'

import { useAuth } from '@/hooks/use-auth'

export const Login = () => {
	const { isAuthenticated } = useAuth()

	return isAuthenticated ? null : (
		<WBlock className='items-center justify-center p-4 lg:gap-5 lg:p-6'>
			<Typography className='px-4 text-center'>
				Вы сможете комментировать темы, создать карточку кондидата или проекта
			</Typography>
			<Link href={'/auth/login'} className='w-full'>
				<Button size={'lg'} className='w-full'>
					Войти
				</Button>
			</Link>
		</WBlock>
	)
}
