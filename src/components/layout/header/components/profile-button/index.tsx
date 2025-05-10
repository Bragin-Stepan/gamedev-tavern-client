'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/common/button'

import { useAuth } from '@/hooks/use-auth'

import { ProfileMenu } from './profile-menu'

export const ProfileButton = () => {
	const { isAuthenticated } = useAuth()

	return isAuthenticated ? (
		<ProfileMenu />
	) : (
		<Link href={'/auth/login'}>
			<Button variant={'default'} size={'default'}>
				Войти
			</Button>
		</Link>
	)
}
